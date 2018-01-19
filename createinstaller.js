const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('Creating Windows Installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    appDirectory: path.join(outPath, 'ZClassic-Eleos-Wallet-win32-x64/'),
    authors: 'Michael Otis',
    noMsi: true,
    outputDirectory: path.join(outPath, 'windows-installer'),
    exe: 'ZClassic-Eleos-Wallet.exe',
    setupExe: 'ZClassic-Eleos-Wallet.exe',
    setupIcon: path.join(rootPath, 'assets', 'icons', 'zcl.ico'),
	loadingGif: path.join(rootPath, 'assets', 'icons', 'zcl-loading.gif')
  })
}