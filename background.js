// Auto Resume Downloads Local
// Tries to resume interrupted Chrome downloads immediately and periodically.

function tryResume(id, source) {
  chrome.downloads.resume(id, () => {
    if (chrome.runtime.lastError) {
      console.log(`[auto-resume] ${source}: download ${id}: ${chrome.runtime.lastError.message}`);
    } else {
      console.log(`[auto-resume] ${source}: resumed download ${id}`);
    }
  });
}

function scanInterrupted(source) {
  chrome.downloads.search({ state: "interrupted" }, (items) => {
    for (const item of items) {
      tryResume(item.id, source);
    }
  });
}

chrome.downloads.onChanged.addListener((delta) => {
  if (delta.state && delta.state.current === "interrupted") {
    // Immediate retries. Manual "Resume" works only while the signed URL/session is still alive.
    tryResume(delta.id, "onChanged");
    setTimeout(() => tryResume(delta.id, "retry-3s"), 3000);
    setTimeout(() => tryResume(delta.id, "retry-10s"), 10000);
  }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("scanInterrupted", { periodInMinutes: 0.5 });
  scanInterrupted("installed");
});

chrome.runtime.onStartup.addListener(() => {
  chrome.alarms.create("scanInterrupted", { periodInMinutes: 0.5 });
  scanInterrupted("startup");
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "scanInterrupted") {
    scanInterrupted("alarm");
  }
});

// Run once when the service worker wakes up.
scanInterrupted("wake");
