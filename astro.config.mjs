import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
	adapter: vercel({ skewProtection: true }),
	output: "server"
});
