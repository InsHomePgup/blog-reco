import { defineUserConfig } from "vuepress";
import {recoTheme} from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import navbar from './config/navbar'
import series from './config/series'

export default defineUserConfig({
  locales: undefined,
  title: "Abra's Home",
  base: '/blog-reco/',
  description: "Happy life go go go !!!",
  bundler: viteBundler(),
  markdown: {
    // @ts-ignore
    lineNumbers: true
  },
  // bundler: webpackBundler(),
  theme: recoTheme({
    colorMode: 'dark',
    logo: "/logo.png",
    author: "Abra",
    authorAvatar: "https://raw.githubusercontent.com/InsHomePgup/blog-reco/main/imgs/avatar.jpg",
    repo:"InsHomePgup/blog-reco",
    // docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    // docsBranch: "main",
    // docsDir: "example",
    // lastUpdatedText: "",
    // series 为原 sidebar
    autoSetSeries: true,
    series,
    navbar
  })
});
