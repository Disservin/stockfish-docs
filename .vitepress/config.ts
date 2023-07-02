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
				text: "Stockfish",
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
			{
				text: "NNUE Pytorch",
				items: [
					{ text: "Documentation", link: "/pages-nnue/docs/nnue" },
					{ text: "Features", link: "/pages-nnue/docs/features" },
				],
			},

			{
				text: "Fishtest",
				items: [
					{
						text: "Creating a Test",
						link: "/pages-fishtest/Creating-my-first-test",
					},
					{
						text: "Running the worker",
						link: "/pages-fishtest/Running-the-worker",
					},
					{
						text: "Fishtest Server Setup",
						link: "/pages-fishtest/Fishtest-server-setup",
					},
					{
						text: "Advanced Topics",
						link: "/pages-fishtest/Advanced-topics",
					},
					{
						text: "Build Cutechess With Qt5 Static",
						link: "/pages-fishtest/Build-cutechess-with-Qt5-static",
					},
					{
						text: "Fishtest Mathematics",
						link: "/pages-fishtest/Fishtest-mathematics",
					},
					{
						text: "PGN files of games played on fishtest",
						link: "/pages-fishtest/PGN-files-of-games-played-on-fishtest",
					},
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
