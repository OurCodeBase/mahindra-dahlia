const createMessage = (change: any) => {
  const vin = change?.Vin?.value;
  const variant = change?.Variant?.value;
  const location = change?.Location_name?.value;
  const model = change?.Model?.value;
  return `We've allotted a new vehicle.\nVin: ${vin}\nVariant: ${variant}\nLocation: ${location}\nModel: ${model}`;
}

export default function app(change: any) {
  const main = document.querySelector("#main");
  const textbox = main?.querySelector<HTMLDivElement>('div[contenteditable="true"]');
  textbox?.focus();
  document.execCommand('insertText', false, createMessage(change));
  textbox?.dispatchEvent(new Event('change', { bubbles: true }));
  setTimeout(() => {
    const send = main?.querySelector<HTMLButtonElement>('[aria-label="Send"]');
    send?.click();
  }, 200);
}
