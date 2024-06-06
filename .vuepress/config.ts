import { defineUserConfig } from "vuepress";
import {recoTheme} from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  locales: undefined,
  title: "Abra's Home",
  description: "Happy life go go go !!!",
  bundler: viteBundler(),
  markdown: {
    // @ts-ignore
    lineNumbers: true
  },
  // bundler: webpackBundler(),
  theme: recoTheme({
    colorMode: 'dark',
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "Abraham",
    authorAvatar: "https://raw.githubusercontent.com/InsHomePgup/blog-reco/main/imgs/⋆⁺₊⋆ ☾ ⋆⁺₊⋆ ☁︎.jpeg",
    // docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    // docsBranch: "main",
    // docsDir: "example",
    // lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/react/2024": [
        {
          text: "React",
          children: ["react01","react02"],
        }
      ],
    },
    navbar: [
      { text: "首页", link: "/" },
      { text: "分类", link: "/categories/git/1.html" },
      // { text: "Tags", link: "/tags/git/1.html" },
      // {
      //   text: "Docs",
      //   children: [
      //     { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
      //     { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
      //   ],
      // },
    ],
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  })
  // debug: true,
});
