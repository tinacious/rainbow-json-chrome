import { getIgnoreList } from "./lib/storage"

const isJsonDocument = (): boolean => {
  if (document.contentType.includes('application/json')) {
    return true
  }

  try {
    JSON.parse(document.body.innerText)
    return true
  } catch (e) {
  }

  return false
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

const perform = async () => {
  if (!isJsonDocument()) return

  try {
    const ignorelist = await getIgnoreList()

    const found = ignorelist.find((item) => item === location.href)
    if (found) return

    injectJsonViewer()
  } catch (e) {
    console.warn('[Rainbow JSON] could not load ignorelist', e)
  }
}


perform()
