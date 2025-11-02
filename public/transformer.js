function p(type, response) {
  queueMicrotask(() => {
    if (!response?.changes) return;
    for (const [_, c] of Object.entries(response.changes)) {
      if (c?.Location_name) return window.postMessage({ type, data: c }, '*');
    }
  })
}

(function () {
  var XHR = XMLHttpRequest.prototype;
  var open = XHR.open;
  var send = XHR.send;
  XHR.open = function (method, url) {
    this._method = method;
    this._url = url;
    return open.apply(this, arguments);
  };
  XHR.send = function() {
    this.addEventListener('load', function () {
      p('xhr', this.response);
    });
    return send.apply(this, arguments);
  };
})(XMLHttpRequest);

const { fetch: origFetch } = window;
window.fetch = async (...args) => {
  const response = await origFetch(...args);
  if (response.headers.get('content-type').includes('xml')) return response;
  response
    .clone()
    .json()
    .then(data => {
      p('fetch', data);
    })
    .catch(err => console.error(err));
  return response;
};
