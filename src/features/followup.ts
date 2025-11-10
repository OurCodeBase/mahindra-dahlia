export default function app() {
  const getRandomItem = (arr: Array<string>) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  const responseTypes = ["Switched Off", "Not Reachable"]
  const responses = [
    "NA",
    "NO RESPONSE",
    "No. is switched off.",
    "Call unable to connect.",
    "We're unable to reachout to customer for now.",
  ]
  const fields: Array<{ loc: string, value?: string }> = [
    // { loc: 'button[value="ACE_Followup"]' },
    { loc: 'select[name="subject"]', value: "Call" },
    { loc: 'select[name="remarks"]', value: "No Response" },
    { loc: 'select[name="remarkType"]', value: getRandomItem(responseTypes) },
    { loc: 'textarea[class="slds-textarea"]', value: getRandomItem(responses) },
    // { loc: 'button[class="slds-button slds-button_neutral slds-button_neutral"]' }
  ]
  fields.forEach(({ loc, value }) => {
    const element = document.querySelector<HTMLButtonElement | HTMLSelectElement | HTMLTextAreaElement>(loc);
    if (element == null) return;
    if (!value) return element.click();
    element.value = value;
    element.dispatchEvent(new Event('change', { bubbles: true }));
    element.dispatchEvent(new Event('input', { bubbles: true }));
  })
}
