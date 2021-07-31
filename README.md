# TS-Land
A starter template project for [Adventure.land](https://adventure.land/)

## Features
* Enables TypeScript for Adventure.Land
* Bundles code via Webpack
* Built in client for easy uploading of CODE


## Usage
Clone or Fork the repository
 
Write your TypeScript code into the `src` directory

Then run `npm run build` to build the `bundle.js` file and copy and paste it into your browser. If this is to bothersome use the build in python client for uploading your bundle

## Client
### Usage
Run `npm run start` to build and upload your code into the configured slot

### Config
You need to configure the client before you can start using it.
This is done via die `package.json` file.
Modify the `start` script to match your inputs

#### Required
* token: the authentification token of your session
    * Has to be copied from you browser
    * Example token: '21783-asdjl'
        * NOT: 'auth=21783-asdjl'
    * Make sure it is not uploaded to a public repository

#### Optional
* slot: the slot number of your CODE
    * Default: 1
* name: the name of the CODE
    * Default: 'ts-land'
* input file: the location of the file to upload relative to your project directory
    * Default: './build/bundle.js'