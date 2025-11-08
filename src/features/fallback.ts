export default function app() {
  chrome.tabs.query({ url: "https://cerebro-tdportal.mahindra.com/*" }, function(tabs) {
    const tab = tabs[0];
    if (!tab.id) return true;
    chrome.tabs.sendMessage(tab.id, { type: "alert", data: "⚠️ Error: No Active WhatsApp Tab Detected! 😕💬\n\nHey there! 👋 It looks like you don’t currently have an active WhatsApp Web tab open in your browser. 🌐\nTo continue, please make sure you’ve opened https://web.whatsapp.com\n\nWe can’t talk to WhatsApp if the tab isn’t open — so let’s fix that and get back to chatting! 💬✨" })
    return true;
  })
}
