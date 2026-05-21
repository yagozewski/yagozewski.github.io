import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Yago Tomaszewski",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "yagozewski.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      defaultTheme: "dark",
      typography: {
        header: "Space Mono",
        body: "Space Mono",
        code: "Space Mono",
      },
      colors: {
        lightMode: {
          light: "#f5f3ef",       // warm off-white page bg
          lightgray: "#e8e4dc",   // surface / sidebar bg
          gray: "#b8b2a6",        // borders, muted elements
          darkgray: "#3a3530",    // body text
          dark: "#1a1714",        // headings
          secondary: "#c45c0a",   // accent — burnt orange
          tertiary: "#9e4808",    // accent hover / deeper orange
          highlight: "rgba(196,92,10,0.07)",
          textHighlight: "rgba(196,92,10,0.18)",
        },
        darkMode: {
          light: "#080c18",       // dark bg
          lightgray: "#0f1624",   // surface
          gray: "#1e2d44",        // borders
          darkgray: "#a0b8cc",    // body text
          dark: "#deeeff",        // headings
          secondary: "#00b4dc",   // accent — cyan
          tertiary: "#0088aa",    // accent hover
          highlight: "rgba(0,180,220,0.08)",
          textHighlight: "rgba(0,180,220,0.25)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }),
      Plugin.SyntaxHighlighting({ theme: { dark: "github-dark", light: "github-light" } }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
