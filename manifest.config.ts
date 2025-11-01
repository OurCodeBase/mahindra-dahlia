import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,
  name: "mahindra-dahlia",
  description: "A chromium extension to handle initial follow up by itself.",
  version: "1.1",
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
  permissions: [
    "scripting",
    "activeTab"
  ],
  host_permissions: [
    "*://localhost:*/*",
    "*://mahindra.my.site.com/*"
  ]
});
