const isJsonDocument = (): boolean => {
  return document.contentType.includes('application/json')
}

const injectJsonViewer = () => {
  // Set manual dark mode if applicable - Note: this currently uses the system detection
  // document.querySelector('html')?.setAttribute('class', 'dark')

  // Load CSS
  const cssFilePath = chrome.runtime.getURL('/main.css')
  const styleTag = document.createElement('link')
  styleTag.href = cssFilePath
  styleTag.rel = 'stylesheet'
  styleTag.type = 'text/css'
  styleTag.id = 'rainbow-json-css'
  document.head.appendChild(styleTag)

  // Load JS
  const scriptTag = document.createElement('script')
  const jsFilePath = chrome.runtime.getURL('/main.js')
  scriptTag.src = jsFilePath
  document.body.appendChild(scriptTag)
}

const perform = () => {
  if (!isJsonDocument()) return

  injectJsonViewer()
}


perform()
