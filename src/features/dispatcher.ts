export default function app(change: any) {
  const createMessage = () => {
    const vin = change?.Vin?.value;
    const location = change?.Location_name?.value;
    const model = change?.Model?.value;
    return `📘 𝐕𝐈𝐍:  ${vin} 🏁 𝐌𝐨𝐝𝐞𝐥:  ${model} 📍 𝐋𝐨𝐜𝐚𝐭𝐢𝐨𝐧:  ${location}`;
  }
  const main = document.querySelector("#main");
  const textbox = main?.querySelector<HTMLDivElement>('div[contenteditable="true"]');
  textbox?.focus();
  document.execCommand('insertText', false, createMessage());
  textbox?.dispatchEvent(new Event('change', { bubbles: true }));
  setTimeout(() => {
    const send = main?.querySelector<HTMLButtonElement>('[data-icon="wds-ic-send-filled"]');
    send?.click();
  }, 300);
}
