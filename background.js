// background.js
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url.includes("netflix.com")) {
        console.log("Netflix detectado, contenido cargado");
    }
});
