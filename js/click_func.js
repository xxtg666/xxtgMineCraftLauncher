// navbar
let nav_run = document.getElementById("nav-run")
let nav_download = document.getElementById("nav-download")
let nav_setting = document.getElementById("nav-setting")
let page_run = document.getElementById("page-run")
let page_download = document.getElementById("page-download")
let page_setting = document.getElementById("page-setting")
function on_nav_run()
{
    nav_run.className="nav-link text-primary strong"
    nav_download.className="nav-link"
    nav_setting.className="nav-link"
    page_run.className=""
    page_download.className="hidden"
    page_setting.className="hidden"
}
function on_nav_download()
{
    nav_run.className="nav-link"
    nav_download.className="nav-link text-primary strong"
    nav_setting.className="nav-link"
    page_run.className="hidden"
    page_download.className="container"
    page_setting.className="hidden"
}
function on_nav_setting()
{
    nav_run.className="nav-link"
    nav_download.className="nav-link"
    nav_setting.className="nav-link text-primary strong"
    page_run.className="hidden"
    page_download.className="hidden"
    page_setting.className="container"
}
nav_run.addEventListener('click',on_nav_run)
nav_download.addEventListener('click',on_nav_download)
nav_setting.addEventListener('click',on_nav_setting)

// page-run
let button_versionsetting = document.getElementById("button-versionsetting")
let button_run = document.getElementById("button-run")
function on_button_versionsetting()
{
    alert("暂未完成")
}
function on_button_run()
{
    document.getElementById("p-log").innerHTML=""
    window.electronAPI.rungame()
    let buttonrun = document.getElementById("button-run")
    buttonrun.className="btn btn-primary bottomline disabled"
    buttonrun.innerHTML="游戏运行中……"
    // alert("游戏已启动")
}
button_versionsetting.addEventListener('click',on_button_versionsetting)
button_run.addEventListener('click',on_button_run)
