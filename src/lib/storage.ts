const STORAGE_KEY_IGNORELIST = "rainbow-json-ignorelist";

const hasChromeStorage = (): boolean => {
  try {
    return typeof chrome.storage.local.set === 'function'
  } catch (e) {
    console.warn('[Rainbow JSON] no chrome storage - using localStorage')
    return false
  }
}

export const getIgnoreList = async (): Promise<string[]> => {
  if (hasChromeStorage()) {
    const ignorelist = await chrome.storage.local.get(STORAGE_KEY_IGNORELIST) || ''
    if (!ignorelist[STORAGE_KEY_IGNORELIST]) return []

    return parseIgnoreList(ignorelist[STORAGE_KEY_IGNORELIST])
  } else {
    return parseIgnoreList(localStorage.getItem(STORAGE_KEY_IGNORELIST) || '')
  }
}

export const saveIgnoreList = async (ignorelist: string): Promise<void> => {
  if (hasChromeStorage()) {
    await chrome.storage.local.set({
      [STORAGE_KEY_IGNORELIST]: ignorelist
    })
  } else {
    localStorage.setItem(STORAGE_KEY_IGNORELIST, ignorelist)
  }
}

const parseIgnoreList = (input: string): string[] => {
  return input
    .split('\n')
    .filter((line) => !!(line.replace('\n', '').trim()))
}
