import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
	server: {
		port: 3000,
		open: true,
		host: true,
		cors: true,
	},
	plugins: [react(), svgr()],
	resolve: {
		alias: [
			{
				find: "@ui",
				replacement: fileURLToPath(new URL("./src/components/ui", import.meta.url)),
			},
			{
				find: "src",
				replacement: fileURLToPath(new URL("./src", import.meta.url)),
			},
			{
				find: "@styles",
				replacement: fileURLToPath(new URL("./src/styles", import.meta.url)),
			},
		],
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
				@use "sass:math";
				@use "sass:color";
				@use '@styles/_variables.scss' as *; 
				@use '@styles/_mixins.scss' as *;
				`,
			},
		},
	},
});
