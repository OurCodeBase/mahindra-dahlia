chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id) return;
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: callback,
  });
});

function callback() {
  const getRandomItem = (arr: Array<string>) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  const remarkTypes = ["Switched Off", "Not Reachable"]
  const noteTexts = [
    "NA",
    "NO RESPONSE",
    "No. is switched off.",
    "Call unable to connect.",
    "We're unable to reachout to customer for now.",
  ]
  const fields: Array<{ loc: string, value?: string }> = [
    { loc: 'button[value="ACE_Followup"]' },
    { loc: 'select[name="subject"]', value: "Call" },
    { loc: 'select[name="remarks"]', value: "No Response" },
    { loc: 'select[name="remarkType"]', value: getRandomItem(remarkTypes) },
    { loc: 'textarea[class="slds-textarea"]', value: getRandomItem(noteTexts) },
    { loc: 'button[class="slds-button slds-button_neutral slds-button_neutral"]' }
  ]
  fields.forEach(({ loc, value }) => {
    const element = document.querySelector<HTMLButtonElement | HTMLSelectElement | HTMLTextAreaElement>(loc);
    if (element == null) return;
    if (value) {
      element.value = value;
      element.dispatchEvent(new Event('change', { bubbles: true }));
      element.dispatchEvent(new Event('input', { bubbles: true }));
    } else {
      element.click();
    }
  })
}
