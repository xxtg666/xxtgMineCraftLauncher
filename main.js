const { app, BrowserWindow , ipcMain} = require('electron')
const path = require('path')
const { Client, Authenticator } = require('minecraft-launcher-core')
const fs = require('fs')
const config_path = './xmcl_config.json'
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
      webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    icon: path.join(__dirname, 'img/icon.ico')
  })

    win.loadFile('index.html')
    ipcMain.on('loadconfig', () => {
        console.log("loadconfig")
        win.webContents.send('config',getconfig())
    })
    ipcMain.on('saveconfig', (_event,config) => {
        console.log("saveconfig")
        fs.writeFileSync(config_path, JSON.stringify(config, null, 2),"utf-8")
    })
    ipcMain.on('loaddotminecraft', (_event) => {
        console.log("loaddotminecraft")
        let cfg = getconfig()
        let cfgdmp = cfg["dotminecraftpath"]+"/versions"
        let cfgmv = cfg["minecraftversion"]
        if(!fs.existsSync(cfgdmp))
        {
            win.webContents.send("dotminecraftfailed")
            return
        }
        fs.readdir(cfgdmp,function(err,files){
            let folders = []
            for(let i = 0; i < files.length; i++){
                let filename = files[i]
                let stats = fs.statSync(cfgdmp + "/" + filename)
                if(stats.isDirectory()){
                    folders.push(filename)
                }
            }
            //console.log(folders)
            win.webContents.send("dotminecraft",folders,cfgmv)
        })
    })
    ipcMain.on('rungame', (_event) => {
        console.log("rungame")
        let cfg = getconfig()
        launchgame(cfg,win)
    })
}
app.whenReady().then(() => {
  createWindow()
    app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
function getconfig(){
    try {
        let data = fs.readFileSync(config_path)
        data = JSON.parse(data)
        return data
    } catch (error) {
        console.log(error)
        let data = {
            "username":"",
            "minecraftversion":0,
            "dotminecraftpath":".minecraft",
            "skinpath":"",
            "java":"",
            "ram":"4",
            "gamearg":"",
            "javaarg":""
        }
        return data
    }
}
function launchgame(cfg,win){
    const launcher = new Client();
    let cfgdmp = cfg["dotminecraftpath"]+"/versions"
    fs.readdir(cfgdmp,function(err,files){
        let folders = []
        for(let i = 0; i < files.length; i++){
            let filename = files[i]
            let stats = fs.statSync(cfgdmp + "/" + filename)
            if(stats.isDirectory()){
                folders.push(filename)
            }
        }
        let opts = {
            authorization: Authenticator.getAuth(cfg["username"]),
            root: cfg["dotminecraftpath"],
            version: {
                number: folders[cfg["minecraftversion"]],
                type: "release",
                custom: folders[cfg["minecraftversion"]]
            },
            memory: {
                max: cfg["ram"] + "G",
                min: "128M"
            },
            javaPath: cfg["java"]+"javaw",
            customLaunchArgs:cfg["gamearg"],
            customArgs: cfg["javaarg"]
        }
        launcher.launch(opts);
        launcher.on('debug', (e) => win.webContents.send("gamelog",e));
        launcher.on('data', (e) => win.webContents.send("gamelog",e));
        launcher.on('close', (e) => win.webContents.send("gameclose",e));
        })
}