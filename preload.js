const { contextBridge, ipcRenderer } = require('electron')
const replaceValue = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.value = text
    }
window.addEventListener('DOMContentLoaded', () => {

})

contextBridge.exposeInMainWorld('electronAPI', {
    loadconfig: () => ipcRenderer.send('loadconfig'),
    saveconfig: (config) => ipcRenderer.send('saveconfig',config),
    loaddotminecraft: () => ipcRenderer.send('loaddotminecraft'),
    rungame: () => ipcRenderer.send('rungame')
})

ipcRenderer.on('config', (_event,config) => {
    replaceValue("input-username",config["username"])
    // replaceValue("select-minecraftversion",config["minecraftversion"])
    replaceValue("input-dotminecraftpath",config["dotminecraftpath"])
    replaceValue("input-skinpath",config["skinpath"])
    replaceValue("input-java",config["java"])
    replaceValue("input-ram",config["ram"])
    replaceValue("input-gamearg",config["gamearg"])
    replaceValue("input-javaarg",config["javaarg"])
})

ipcRenderer.on('alert', (_event,str) => {
    alert(str)
})

ipcRenderer.on('dotminecraft', (_event,folders,cfgmv) => {
    let select = document.getElementById("select-minecraftversion")
    select.innerHTML = ""
    for (let i = 0; i < folders.length; i++) {
        const element = folders[i];
        let option = document.createElement("option")
        option.value = element
        option.text = element
        select.appendChild(option)
    }
    select.selectedIndex = cfgmv
})

ipcRenderer.on("dotminecraftfailed",(_event) => {
    let select = document.getElementById("select-minecraftversion")
    select.innerHTML="<option>请先去 设置 页面修改 .minecraft 文件夹路径</option>"
    }
)

ipcRenderer.on("gamelog",(_event,log) => {
    let plog = document.getElementById("p-log")
    plog.innerHTML = plog.innerHTML + log + "<br>"
})

ipcRenderer.on("gameclose",(_event,num) => {
    let buttonrun = document.getElementById("button-run")
    buttonrun.className="btn btn-primary bottomline"
    buttonrun.innerHTML="启动游戏"
    if(num != 0){buttonrun.innerHTML="游戏异常退出 Code"+num+" | 启动游戏"}
})