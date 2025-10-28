import { defineConfig } from "vite";
import zip from 'vite-plugin-zip-pack';
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    crx({ manifest }),
    zip({ outDir: 'release', outFileName: 'release.zip' })
  ],
});

