import { followUp, Announce } from './features'

chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id || !tab.url?.includes("https://mahindra.my.site.com/")) return;
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: followUp,
  });
});

chrome.runtime.onMessage.addListener((data) => {
  chrome.tabs.query({ url: "https://web.whatsapp.com/*" }, async function(tabs) {
    const tab = tabs[0]
    if (!tab.id) return;
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: Announce,
      args: [data]
    })
  })
})
