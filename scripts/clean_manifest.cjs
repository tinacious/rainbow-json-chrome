const Fs = require('node:fs')
const Path = require('node:path')
const manifest = require('../rainbow-json-chrome/manifest.json')

// Remove $schema
delete manifest['$schema']

// Rewrite file
const manifestPath = Path.resolve(__dirname, '../rainbow-json-chrome/manifest.json')
Fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
