var electronInstaller = require('electron-winstaller');
resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: 'dist/AppWin32X64',
  outputDirectory: 'installer/AppWin32X64',
  authors: 'Designer App Inc.',
  exe: 'app.exe'
});

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));