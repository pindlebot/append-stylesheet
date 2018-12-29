
Object.defineProperty(exports, '__esModule', {
  value: true
})

function hasStylesheet (href) {
  Object.values(document.styleSheets)
    .some(sheet => sheet.href === href)
}

function appendStylesheet (href) {
  if (typeof document === 'undefined') return
  if (hasStylesheet(href)) return
  
  var link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = href

  document.head.appendChild(link)
  return link
}

exports.default = appendStylesheet