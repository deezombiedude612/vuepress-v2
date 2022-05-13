const {
    activeHeaderLinksPlugin,
} = require("@vuepress/plugin-active-header-links");
const { defaultTheme } = require("vuepress");

module.exports = {
    title: "ITS30605",
    description: "ITS30605 Web Programming Practical Labs",

    theme: defaultTheme({
        editLinks: false,
        lastUpdated: true,
        // logo: "https://vuejs.org/images/logo.png",
        sidebarDepth: 4,
        navbar: [
            { text: "WP", link: "/" },
            {
                text: "OOP",
                link: "https://deezombiedude612.github.io/oop-labs",
            },
        ],
    }),
    plugins: [
        activeHeaderLinksPlugin({
            // options
        }),
    ],
};
