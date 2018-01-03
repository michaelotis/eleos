# Eleos

Eleos is a wallet for zero-knowledge cryptocurrencies written in Electron. 

  - Compatible with Windows, MacOS, and Linux
  - No third-party Java dependencies required
  - Supports Zclassic

![Screenshot](https://pbs.twimg.com/media/DSgWlj_XkAAEz1B.jpg)

### Installation
Note: First time installations may take awhile to load since ~1GB of cryptographic data must be downloaded first.

##### Windows and MacOS
The simplest way to get started on Windows or MacOS is to [download and run the latest installer](https://github.com/HarrKxx/eleos/releases).

##### Linux
Note: Eleos requires that the compiled wallets are named zcld-linux and are saved into the eleos directory.

Get the source
```
git clone https://github.com/zencashio/eleos.git eleos
```
cd ~/Builds/eleos
```
npm install 


Copy the Zclassic/Zcash wallet daemon into the elos directory (name the binary zcld-linux)
```
cp ~/Builds/zclassic/src/zcashd ~/Builds/eleos/zcld-linux
```
Start eleos
```
npm start
```


### Supported Wallets

Eleos is primarily designed for Zcash-based cryptocurrencies. The wallet.dat for each cryptocurrency is stored in the directories below.

| Support | Status | Windows Location | MacOS Location |
| ------ | ------ | ------ | ------ |
| Zclassic | Fully supported | %APPDATA%/Zclassic | ~/Library/Application Support/Zclassic |


### Development

Want to contribute? Great! We need help.


### Todos

 - Display shielded tx generation status
 - Write MOAR tests
 - Write MOAR documentation

### Help!
  - Slack:  get a login at https://discord.gg/SWzCnVD
  - Other:  Submit a Github issue as needed.

### License
Common Public Attribution License (CPAL-1.0)
Created by Josh Yabut for ZenCash