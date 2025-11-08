var s = document.createElement('script');
s.src = chrome.runtime.getURL('transformer.js');
s.onload = function (this, ev) {
  if (ev.target instanceof HTMLElement) {
    (ev.target as HTMLElement).remove()
  }
};
(document.head || document.documentElement).appendChild(s);

// response receiver.
window.addEventListener('message', function (e) {
  chrome.runtime.sendMessage(e.data.data);
});

// alert receiver.
chrome.runtime.onMessage.addListener(function(message) {
  if (message["type"] == "alert") return alert(message.data);
  return true;
})
