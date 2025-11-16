export default async function app(): Promise<boolean> {
  try {
    const cache = await chrome.storage.session.get('unauthorized');
    if (cache && cache['unauthorized']) return cache['unauthorized'];
    const request = await fetch("https://mahindr.appwrite.network/license.json");
    const response:Array<string> = await request.json();
    await chrome.storage.session.set({
      unauthorized: !response.includes(import.meta.env.VITE_LICENSE_KEY)
    });
    return (!response.includes(import.meta.env.VITE_LICENSE_KEY));
  } catch (e) {
    if (e instanceof Error) console.error("License check failed:", e.message);
    return true;
  }
}
