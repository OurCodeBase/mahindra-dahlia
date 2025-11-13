import { followUp, fallbackHandler, dispatchMessage, checkLicense } from './features'

async function onClicked(tab: chrome.tabs.Tab) {
  if (!tab.id) return;
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: followUp,
  });
}

function onMessage(data: any) {
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
}

chrome.action.onClicked.addListener(onClicked);
chrome.runtime.onMessage.addListener(onMessage);

queueMicrotask(async () => {
  const unauthorized = await checkLicense();
  if (!unauthorized) return;
  chrome.action.onClicked.removeListener(onClicked);
  chrome.runtime.onMessage.removeListener(onMessage);
})
