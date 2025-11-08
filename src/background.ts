import { followUp, fallbackHandler, dispatchMessage } from './features'

chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id) return;
  if (!tab.url?.includes("mahindra.my.site.com")) return;
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: followUp,
  });
});

chrome.runtime.onMessage.addListener(function(data) {
  chrome.tabs.query({ url: "https://web.whatsapp.com/*" }, async function(tabs) {
    if (tabs.length == 0) return fallbackHandler();
    const tab = tabs[0];
    if (!tab.id) return;
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: dispatchMessage,
      args: [data]
    })
  })
  return true;
})
