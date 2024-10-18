// todo: convert to cjs
import Fs from 'node:fs'
import Path from 'node:path'
import { fileURLToPath } from 'url'
import manifest from '../bundle/manifest.json' assert { type: 'json' }

delete manifest['$schema']

const __filename = fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)
const manifestPath = Path.resolve(__dirname, '../bundle/manifest.json')

Fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
