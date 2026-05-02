import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Dimitri Sotnikov",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "sotnikov.eu",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: {
          name: "Cormorant Garamond",
          weights: [300, 400, 600],
          includeItalic: true, // essential for AN feel
        },
        body: {
          name: "EB Garamond",
          weights: [400, 500],
          includeItalic: true,
        },
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#F7F4F0",       // warm off-white background
          lightgray: "#E2DDD8",   // borders, dividers
          gray: "#9E9890",        // graph nodes, secondary UI
          darkgray: "#3D3830",    // body text
          dark: "#1E1B18",        // headings, bold text
          secondary: "#4E7268",   // ← Patina — links, active elements
          tertiary: "#C0714A",    // ← Terracotta — hover state
          highlight: "rgba(78, 114, 104, 0.10)",  // subtle bg highlight
          textHighlight: "#C9A84C88",             // ← Ochre — text selection
        },
        darkMode: {
          light: "#1A1E1C",       // dark background (tinted toward Patina)
          lightgray: "#2E3530",   // borders, dividers
          gray: "#5A6B60",        // graph nodes, secondary UI
          darkgray: "#D4CFC9",    // body text
          dark: "#F0EDE8",        // headings
          secondary: "#7A9E7E",   // ← Sage — links (lighter for dark bg)
          tertiary: "#C0714A",    // ← Terracotta — hover state
          highlight: "rgba(122, 158, 126, 0.12)", // subtle bg highlight
          textHighlight: "#C9A84C88",             // ← Ochre — text selection
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
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
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
