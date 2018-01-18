# Eleos

Eleos is a wallet for zero-knowledge cryptocurrencies written in Electron. 

  - Compatible with Windows, MacOS, and Linux
  - No Third-Party Java Dependencies Required
  - Supports Zclassic

![Screenshot](https://i.imgur.com/hyvrCpX.jpg)

### Installation
Note: First time installations may take awhile to load since ~1GB of cryptographic data must be downloaded first.

##### Windows and MacOS
The simplest way to get started on Windows or MacOS is to [download and run the latest installer](https://github.com/michaelotis/eleos/releases).

##### Linux
Note: Eleos requires that the compiled wallets are named zcld-linux and are saved into the eleos directory.
You can compile yourself or get the file here : https://github.com/michaelotis/eleos/releases/tag/0.1.0

Get the source
```
git clone https://github.com/michaelotis/eleos.git eleos
```
cd ~/Builds/eleos
```
npm install 
```
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


### Donation
If you consider to make a donation, here are our addresses :
ZCL : t1SHPhCr6TScktD9Ndm16VEjYJsMoR2DUBv

### License
Common Public Attribution License (CPAL-1.0)
Created by Josh Yabut for ZenCash
Modified and maintained by Michael Otis of ZClassic/Bitcoin Private Development Team
