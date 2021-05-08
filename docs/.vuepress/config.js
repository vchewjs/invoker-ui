module.exports = {
  title: "InVoker-UI",
  description: "InVoker-UI",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "component", link: "/views/guide/" },
      { text: "GitHub", link: "https://github.com/vchewjs" }
    ],
    sidebar: {
      "/views/guide/": [
        {
          title: "简介",
          collapsable: false,
          children: ["/views/guide/introduction"]
        },
        {
          title: "基础组件",
          collapsable: true,
          children: ["/views/guide/button/button","/views/guide/dialog/dialog","/views/guide/icon/icon"]
        }
      ]
    }
  }
};
