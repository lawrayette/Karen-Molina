
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/karenina/Documents/KM-/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/karenina/Documents/KM-/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/karenina/Documents/KM-/src/pages/about.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/karenina/Documents/KM-/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/karenina/Documents/KM-/src/pages/index.js")),
  "component---src-templates-template-js": preferDefault(require("/Users/karenina/Documents/KM-/src/templates/template.js"))
}

