import { defineConfig } from "vitepress";
import { getSidebar } from 'vitepress-plugin-auto-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Stockfish",
	description: "Stockfish documentation",

	base: "/stockfish-docs/",

	ignoreDeadLinks: true,

	lastUpdated: true,

	// cleanUrls: true,

	themeConfig: {
		search: {
			provider: "local",
		},
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Docs", link: "/pages/Home" },
		],

    sidebar: getSidebar({ 
      contentRoot: '/',
      contentDirs: ['pages', 'pages-fishtest', 'pages-nnue'],
      collapsible: true,
      collapsed: false 
    }),

		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/official-stockfish/Stockfish",
			},
		],
	},
	vite: {},
});
