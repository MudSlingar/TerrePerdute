import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Terre Perdute Wiki",
    pageTitleSuffix: " - Approdo Wiki",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: 'plausible'
    },
    locale: "en-US",
    baseUrl: "mudslingar.github.io/TerrePerdute",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Pangolin",
        body: "Crimson Text",
        code: "Inconsolata",
      },
      colors: {
        lightMode: {
          light: "#E8EFEF",
          lightgray: "#846A5E",
          gray: "#C8975D",
          darkgray: "#3A353A",
          dark: "#8F6B3C",
          secondary: "#5B5B62",
          tertiary: "#90919B",
          highlight: "#FFD48A",
          textHighlight: "#FFC175",
        },
        darkMode: {
          light: "#3A353A",
          lightgray: "#846A5E",
          gray: "#C8975D",
          darkgray: "#E8EFEF",
          dark: "#C8975D",
          secondary: "#FFD48A",
          tertiary: "#846A5E",
          highlight: "#54443B",
          textHighlight: "#54443B",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
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
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
