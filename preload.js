const { contextBridge, ipcRenderer } = require('electron')
const replaceValue = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.value = text
    }
window.addEventListener('DOMContentLoaded', () => {

})

contextBridge.exposeInMainWorld('electronAPI', {
    _init: () => ipcRenderer.send('init'),
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

ipcRenderer.on("initpage",(_event,pages) => {
    document.getElementById("page-run").innerHTML = pages["run"]
    document.getElementById("page-download").innerHTML = pages["download"]
    document.getElementById("page-setting").innerHTML = pages["setting"]
    let script = document.createElement('script');
    script.setAttribute('type','text/javascript');
    script.setAttribute('src',"./js/click_func.js");
    document.body.appendChild(script)
    let script2 = document.createElement('script');
    script2.setAttribute('type','text/javascript');
    script2.setAttribute('src',"./js/edit_func.js");
    document.body.appendChild(script2)
})