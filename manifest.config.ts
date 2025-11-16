import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,
  name: "mahindra-dahlia",
  description: "A chromium extension for mahindra cerebo automation.",
  version: "1.8",
  icons: {
    16: "icon.png",
    32: "icon.png",
    48: "icon.png",
    128: "icon.png"
  },
  action: {
    default_title: "Click here to handle initial follow up.",
  },
  background: {
    service_worker: "src/background.ts",
    type: "module",
  },
  content_scripts: [
    {
      matches: ["https://cerebro-tdportal.mahindra.com/*"],
      js: ["src/sites/td/content.ts"],
      run_at: "document_start",
      all_frames: true
    }
  ],
  permissions: [
    "tabs",
    "storage",
    "scripting",
    "activeTab"
  ],
  host_permissions: [
    "*://localhost:*/*",
    "https://web.whatsapp.com/*",
    "*://mahindr.appwrite.network/*",
    "https://cerebro-tdportal.mahindra.com/*",
    "*://mahindra.my.site.com/*"
  ],
  web_accessible_resources: [
    {
      resources: ["transformer.js"],
      matches: ["https://cerebro-tdportal.mahindra.com/*"]
    }
  ],
  externally_connectable: {
    matches: ["https://cerebro-tdportal.mahindra.com/*"]
  }
});
