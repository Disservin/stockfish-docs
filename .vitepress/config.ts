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
			{ text: "Docs", link: "/Stockfish.wiki/Home" },
		],

		sidebar: [
			{
				text: "Home",
				items: [
					{ text: "Description", link: "/Stockfish.wiki/Home" },
					{ text: "Advanced topics", link: "/Stockfish.wiki/Advanced-topics" },
					{ text: "Commands", link: "/Stockfish.wiki/Commands" },
					{
						text: "Compiling from source",
						link: "/Stockfish.wiki/Compiling-from-source",
					},
					{ text: "Developers", link: "/Stockfish.wiki/Developers" },
					{
						text: "Download and Usage",
						link: "/Stockfish.wiki/Download-and-usage",
					},
					{
						text: "Governance and responsibilities",
						link: "/Stockfish.wiki/Governance-and-responsibilities",
					},
					{
						text: "Regression Tests",
						link: "/Stockfish.wiki/Regression-Tests",
					},
					{ text: "Stockfish FAQ", link: "/Stockfish.wiki/Stockfish-FAQ" },
					{ text: "Terminology", link: "/Stockfish.wiki/Terminology" },
					{ text: "Useful data", link: "/Stockfish.wiki/Useful-data" },
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
