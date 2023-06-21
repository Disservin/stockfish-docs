import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Stockfish",
	description: "Stockfish documentation",
	base: "/stockfish-docs/",
	ignoreDeadLinks: true,
	themeConfig: {
		search: {
			provider: "local",
		},
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Docs", link: "/pages/home" },
		],

		sidebar: [
			{
				text: "Home",
				items: [
					{ text: "Description", link: "/pages/home" },
					{ text: "Advanced topics", link: "/pages/advanced-topics" },
					{ text: "Commands", link: "/pages/commands" },
					{
						text: "Compiling from source",
						link: "/pages/compiling-from-source",
					},
					{ text: "Developers", link: "/pages/developers" },
					{ text: "Download and Usage", link: "/pages/download-and-usage" },
					{
						text: "Governance and responsibilities",
						link: "/pages/governance-and-responsibilities",
					},
					{ text: "Regression Tests", link: "/pages/regression-tests" },
					{ text: "Stockfish FAQ", link: "/pages/stockfish-faq" },
					{ text: "Terminology", link: "/pages/terminology" },
					{ text: "Useful data", link: "/pages/useful-data" },
				],
			},
		],

		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/official-stockfish/Stockfish",
			},
		],
	},
	vite: {},
});
