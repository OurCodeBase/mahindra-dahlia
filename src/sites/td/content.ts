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
  console.log('sniffed packets:' , e.data.type, e.data.data);
  chrome.runtime.sendMessage(e.data.data);
});
