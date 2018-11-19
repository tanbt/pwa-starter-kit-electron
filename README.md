[![Built with pwa–starter–kit](https://img.shields.io/badge/built_with-pwa–starter–kit_-blue.svg)](https://github.com/Polymer/pwa-starter-kit "Built with pwa–starter–kit")
[![Build status](https://api.travis-ci.org/Polymer/pwa-starter-kit.svg?branch=master)](https://travis-ci.org/Polymer/pwa-starter-kit)

> ## 🛠 Status: In Development
> PWA Starter Kit is currently in development. It's on the fast track to a 1.0 release, so we encourage you to use it and give us your feedback, but there are things that haven't been finalized yet and you can expect some changes.
>
> See the list of Known Issues and TODOs, below, for updates.

### Run with Electron
```
npm install
npm run build
npm start
```
### Run with Polymer CLI
```
npm run serve
```
### Run with PRPL Server
```
npm run serve:prpl-server
```

### Application distribution using third-party modules

https://github.com/electron-userland/electron-packager

https://github.com/electron/windows-installer

```
npm install electron-packager -g
npm install --save-dev electron-winstaller
```

The `dist/app-win32-x64/` folder now has the same content with the manual distribution above (without asar).

At project root (e.g. pwa-starter-kit), run:
```
electron-packager . app --platform win32 --arch x64 --out dist/
```

Rename `app-win32-x64` to `AppWin32X64`. Create`installer.js`.

```
var electronInstaller = require('electron-winstaller');
resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: 'dist/AppWin32X64',
  outputDirectory: 'installer/AppWin32X64',
  authors: 'Designer App Inc.',
  exe: 'app.exe'
});

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));
```

Run `node installer.js`

### Application distribution manually

[On Windows](https://electronjs.org/docs/tutorial/application-distribution):

* Download and extract the [prebuild electron](https://github.com/electron/electron/releases/download/v3.0.9/electron-v3.0.9-win32-x64.zip) (choose the correct version) to `electron` directory
* Copy the running sources (which are used when run the project with npm `electron .`) into electron/`resources/app` such as: index.html and related front-end resources, main.js, package.json.
* Execute `electron.exe` on Windows
* The `electron` directory will then be your distribution to deliver to final users.

##### [Packaging Your App into a File](https://electronjs.org/docs/tutorial/application-packaging)

To use an `asar` archive to replace the `app` folder above, you need to rename the archive to `app.asar`.

```
npm install -g asar
asar pack your-app app.asar
```

###### Common Errors

* `Description is required.`: package.json in `resource/app/your-source/` [must have description](https://github.com/electron/windows-installer/issues/272).
* [Product@version is invalid](https://github.com/electron/windows-installer/issues/203): remove all `-` in the app name (the `name` in package.json) and location.








# PWA Starter Kit

This sample app is a starting point for building PWAs. Out of the box, the template
gives you the following features:
- all the PWA goodness (manifest, service worker)
- a responsive layout
- application theming
- example of using Redux for state management
- offline UI
- simple routing solution
- fast time-to-interactive and first-paint through the PRPL pattern
- easy deployment to prpl-server or static hosting
- unit and integrating testing starting points
- documentation about other advanced patterns.

### 📖 Head over to the [documentation site](https://polymer.github.io/pwa-starter-kit/) for more details or check out [how to get started](https://polymer.github.io/pwa-starter-kit/setup/)!

![pwa-starter-kit screenshot](https://user-images.githubusercontent.com/1369170/39715580-a1be5126-51e2-11e8-8440-96b07be03a3c.png)

## TODOs

- [x] Setup Safari testing on Travis.
- [x] Deploy all templates as demos.
- [ ] Update to latest [Material Web Components](https://github.com/material-components/material-components-web-components).
