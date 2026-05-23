import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({ command }) => ({
	plugins: [react(), tailwindcss(), ...(command === "build" ? [cloudflare()] : [])],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src/react-app"),
		},
	},
	assetsInclude: ["**/*.svg", "**/*.csv"],
}));
