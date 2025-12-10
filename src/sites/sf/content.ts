const html = `
<style>
  .lucide {
    pointer-events: none;
  }
  .dahlia_extension_container {
    top: 20%;
    right: 10%;
    position: absolute;
  }
  .dahlia_extension_btns {
    border: none;
    color: white;
    padding: 10px;
    cursor: pointer;
    padding-left: 20px;
    border-radius: 50px;
    padding-right: 20px;
    align-items: center;
    background-color: black;
    transition: all 0.2s ease;
  }
  .dahlia_extension_btns:active {
    transform: translate(2px, 2px);
  }
  .dahlia_extension_btns:last-child {
    display: none;
  }
  .dahlia_extension_btns:first-child {
    display: inline-flex;
    position: relative;
  }
  .dahlia_extension_container > div:hover .dahlia_extension_btns:last-child {
    display: inline-flex;
  }
</style>
<div class="dahlia_extension_container" id="dahlia_extension_container">
  <div style="display: inline-flex;gap: 5px;">
    <button id="dahlia_extension_followup_btn" class="dahlia_extension_btns">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide">
        <path d="M2 21a8 8 0 0 1 13.292-6"/>
        <circle cx="10" cy="8" r="5"/>
        <path d="M19 16v6"/>
        <path d="M22 19h-6"/>
      </svg>
    </button>
    <button id="dahlia_extension_send_btn" class="dahlia_extension_btns">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide">
        <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>
        <path d="M8 12h.01"/>
        <path d="M12 12h.01"/>
        <path d="M16 12h.01"/>
      </svg>
    </button>
  </div>
  <div class="dahlia_extension_mover" style="cursor: grab;position: absolute;transform: translateX(12px);">
    <span style="padding: 0px 5px 5px 5px;user-select: none;">
      ——
    </span>
  </div>
</div>
`

document.body.insertAdjacentHTML('beforeend', html);
const s = document.createElement('script');
s.src = chrome.runtime.getURL('salesforce.js');
document.head.appendChild(s);
