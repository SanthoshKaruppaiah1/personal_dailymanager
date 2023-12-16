const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const isMac = process.platform === 'darwin';


function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Sans_day',
        width: 1000,
        height: 600
    });

    mainWindow.loadFile(path.join(__dirname, './start.html'));
    mainWindow.maximize();
    mainWindow.show();
    mainWindow.setMenuBarVisibility(false);
    
}



app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0){
            createMainWindow();
        }
    });
});

app.on('window-all-closed', () =>{
   if(!isMac){
    app.quit();
   } 
});

ipcMain.on('open-homepage', () => {
    const homepageWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
            nodeIntegration: true, // or false based on your requirement
            preload: path.join(__dirname, 'preload.js')
        }
    });

    homepageWindow.loadFile(path.join(__dirname, 'homepage.html'));
});