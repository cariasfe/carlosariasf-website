import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://carlosariasf.com"
  const routes = [
    "",
    "/experience",
    "/accomplishments",
    "/education",
    "/boards",
    "/about",
    "/books",
    "/contact",
  ]
  return routes.map((route) => ({ url: `${base}${route}` }))
}
