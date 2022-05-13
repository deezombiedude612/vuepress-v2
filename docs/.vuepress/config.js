module.exports = {
	title: "ITS30605",
	description: "ITS30605 Web Programming Practical Labs",

	themeConfig: {
		editLinks: false,
		lastUpdated: true,
		// logo: "https://vuejs.org/images/logo.png",
		sidebarDepth: 4,
		navbar: [
			{ text: "WP", link: "/" },
			{ text: "OOP", link: "https://deezombiedude612.github.io/oop-labs" },
		],
	},

	plugins: ["@vuepress/plugin-active-header-links@next"],
};
