export interface SiteConfig {
  name: string
  tagline: string
  social: { linkedin: string; twitter: string; facebook: string }
}

export const siteConfig: SiteConfig = {
  name: "Carlos Arias",
  tagline: "Product Management Leader | Data Analytics & AI Solutions Pioneer",
  social: {
    linkedin: "https://linkedin.com/in/cariasf/",
    twitter: "https://x.com/cariasfe",
    facebook: "https://facebook.com/carlos.arias.33821",
  },
}
