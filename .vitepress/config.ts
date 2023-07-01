import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Stockfish",
	description: "Stockfish documentation",

	base: "/stockfish-docs/",

	ignoreDeadLinks: true,

	lastUpdated: true,

	// cleanUrls: true,

	themeConfig: {
		editLink: {
			pattern: "https://github.com/Disservin/stockfish-docs/edit/master/:path",
		},
		search: {
			provider: "local",
		},
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Docs", link: "/pages/Home" },
		],

		sidebar: [
			{
				text: "Home",
				items: [
					{ text: "Description", link: "/pages/Home" },
					{ text: "Advanced topics", link: "/pages/Advanced-topics" },
					{ text: "Commands", link: "/pages/Commands" },
					{
						text: "Compiling from source",
						link: "/pages/Compiling-from-source",
					},
					{ text: "Developers", link: "/pages/Developers" },
					{
						text: "Download and Usage",
						link: "/pages/Download-and-usage",
					},
					{
						text: "Governance and responsibilities",
						link: "/pages/Governance-and-responsibilities",
					},
					{
						text: "Regression Tests",
						link: "/pages/Regression-Tests",
					},
					{ text: "Stockfish FAQ", link: "/pages/Stockfish-FAQ" },
					{ text: "Terminology", link: "/pages/Terminology" },
					{ text: "Useful data", link: "/pages/Useful-data" },
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
