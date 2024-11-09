const Fs = require('node:fs')
const Path = require('node:path')
const util = require('node:util')
const exec = util.promisify(require('node:child_process').exec)

const manifest = require('../public/manifest.json')
const manifestPath = Path.resolve(__dirname, '../public/manifest.json')

perform()


async function perform() {
  const result = await exec('git describe --exact-match --tags')
  const tag = result.stdout
    .replaceAll('\n', '')
    .replace('v', '')

  manifest.version = '' + tag

  Fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n')
}
