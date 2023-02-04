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
let button_microsoftauth = document.getElementById("button-microsoftauth")
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
    document.getElementById("run-setting").className= "card disabledDiv"
    document.getElementById("setting-runsetting").className= "card disabledDiv"
    // alert("游戏已启动")
}
function on_button_microsoftauth()
{
    alert("暂未完成")
}
button_versionsetting.addEventListener('click',on_button_versionsetting)
button_run.addEventListener('click',on_button_run)
button_microsoftauth.addEventListener('click',on_button_microsoftauth)

// page-download-nav
let nav_download_auto=document.getElementById("nav-download-auto")
let nav_download_manual=document.getElementById("nav-download-manual")
let nav_download_mod=document.getElementById("nav-download-mod")
let nav_download_pack=document.getElementById("nav-download-pack")
let page_download_auto=document.getElementById("page-download-auto")
let page_download_manual=document.getElementById("page-download-manual")
let page_download_mod=document.getElementById("page-download-mod")
let page_download_pack=document.getElementById("page-download-pack")
function on_nav_download_auto()
{
    nav_download_auto.className="nav-link text-primary strong"
    nav_download_manual.className="nav-link"
    nav_download_mod.className="nav-link"
    nav_download_pack.className="nav-link"
    page_download_auto.className=""
    page_download_manual.className="hidden"
    page_download_mod.className="hidden"
    page_download_pack.className="hidden"
}
function on_nav_download_manual()
{
    nav_download_auto.className="nav-link"
    nav_download_manual.className="nav-link text-primary strong"
    nav_download_mod.className="nav-link"
    nav_download_pack.className="nav-link"
    page_download_auto.className="hidden"
    page_download_manual.className=""
    page_download_mod.className="hidden"
    page_download_pack.className="hidden"
}
function on_nav_download_mod()
{
    nav_download_auto.className="nav-link"
    nav_download_manual.className="nav-link"
    nav_download_mod.className="nav-link text-primary strong"
    nav_download_pack.className="nav-link"
    page_download_auto.className="hidden"
    page_download_manual.className="hidden"
    page_download_mod.className=""
    page_download_pack.className="hidden"
}
function on_nav_download_pack()
{
    nav_download_auto.className="nav-link"
    nav_download_manual.className="nav-link"
    nav_download_mod.className="nav-link"
    nav_download_pack.className="nav-link text-primary strong"
    page_download_auto.className="hidden"
    page_download_manual.className="hidden"
    page_download_mod.className="hidden"
    page_download_pack.className=""
}
nav_download_auto.addEventListener('click',on_nav_download_auto)
nav_download_manual.addEventListener('click',on_nav_download_manual)
nav_download_mod.addEventListener('click',on_nav_download_mod)
nav_download_pack.addEventListener('click',on_nav_download_pack)

// page-download-manual
let nav_download_manual_minecraft=document.getElementById("nav-download-manual-minecraft")
let nav_download_manual_optifine=document.getElementById("nav-download-manual-optifine")
let nav_download_manual_forge=document.getElementById("nav-download-manual-forge")
let nav_download_manual_fabric=document.getElementById("nav-download-manual-fabric")
let nav_download_manual_liteloader=document.getElementById("nav-download-manual-liteloader")
let page_download_manual_minecraft=document.getElementById("page-download-manual-minecraft")
let page_download_manual_optifine=document.getElementById("page-download-manual-optifine")
let page_download_manual_forge=document.getElementById("page-download-manual-forge")
let page_download_manual_fabric=document.getElementById("page-download-manual-fabric")
let page_download_manual_liteloader=document.getElementById("page-download-manual-liteloader")
function on_nav_download_manual_minecraft()
{
    nav_download_manual_minecraft.className="nav-link active"
    nav_download_manual_optifine.className="nav-link"
    nav_download_manual_forge.className="nav-link"
    nav_download_manual_fabric.className="nav-link"
    nav_download_manual_liteloader.className="nav-link"
    page_download_manual_minecraft.className=""
    page_download_manual_optifine.className="hidden"
    page_download_manual_forge.className="hidden"
    page_download_manual_fabric.className="hidden"
    page_download_manual_liteloader.className="hidden"
}
function on_nav_download_manual_optifine()
{
    nav_download_manual_minecraft.className="nav-link"
    nav_download_manual_optifine.className="nav-link active"
    nav_download_manual_forge.className="nav-link"
    nav_download_manual_fabric.className="nav-link"
    nav_download_manual_liteloader.className="nav-link"
    page_download_manual_minecraft.className="hidden"
    page_download_manual_optifine.className=""
    page_download_manual_forge.className="hidden"
    page_download_manual_fabric.className="hidden"
    page_download_manual_liteloader.className="hidden"
}
function on_nav_download_manual_forge()
{
    nav_download_manual_minecraft.className="nav-link"
    nav_download_manual_optifine.className="nav-link"
    nav_download_manual_forge.className="nav-link active"
    nav_download_manual_fabric.className="nav-link"
    nav_download_manual_liteloader.className="nav-link"
    page_download_manual_minecraft.className="hidden"
    page_download_manual_optifine.className="hidden"
    page_download_manual_forge.className=""
    page_download_manual_fabric.className="hidden"
    page_download_manual_liteloader.className="hidden"
}
function on_nav_download_manual_fabric()
{
    nav_download_manual_minecraft.className="nav-link"
    nav_download_manual_optifine.className="nav-link"
    nav_download_manual_forge.className="nav-link"
    nav_download_manual_fabric.className="nav-link active"
    nav_download_manual_liteloader.className="nav-link"
    page_download_manual_minecraft.className="hidden"
    page_download_manual_optifine.className="hidden"
    page_download_manual_forge.className="hidden"
    page_download_manual_fabric.className=""
    page_download_manual_liteloader.className="hidden"
}
function on_nav_download_manual_liteloader()
{
    nav_download_manual_minecraft.className="nav-link"
    nav_download_manual_optifine.className="nav-link"
    nav_download_manual_forge.className="nav-link"
    nav_download_manual_fabric.className="nav-link"
    nav_download_manual_liteloader.className="nav-link active"
    page_download_manual_minecraft.className="hidden"
    page_download_manual_optifine.className="hidden"
    page_download_manual_forge.className="hidden"
    page_download_manual_fabric.className="hidden"
    page_download_manual_liteloader.className=""
}
nav_download_manual_minecraft.addEventListener('click',on_nav_download_manual_minecraft)
nav_download_manual_optifine.addEventListener('click',on_nav_download_manual_optifine)
nav_download_manual_forge.addEventListener('click',on_nav_download_manual_forge)
nav_download_manual_fabric.addEventListener('click',on_nav_download_manual_fabric)
nav_download_manual_liteloader.addEventListener('click',on_nav_download_manual_liteloader)

// page-download-mod
let nav_download_mod_curseforge=document.getElementById("nav-download-mod-curseforge")
let nav_download_mod_modrinth=document.getElementById("nav-download-mod-modrinth")
let page_download_mod_curseforge=document.getElementById("page-download-mod-curseforge")
let page_download_mod_modrinth=document.getElementById("page-download-mod-modrinth")
function on_nav_download_mod_curseforge()
{
    nav_download_mod_curseforge.className="nav-link active"
    nav_download_mod_modrinth.className="nav-link"
    page_download_mod_curseforge.className=""
    page_download_mod_modrinth.className="hidden"
}
function on_nav_download_mod_modrinth()
{
    nav_download_mod_curseforge.className="nav-link"
    nav_download_mod_modrinth.className="nav-link active"
    page_download_mod_curseforge.className="hidden"
    page_download_mod_modrinth.className=""
}
nav_download_mod_curseforge.addEventListener('click',on_nav_download_mod_curseforge)
nav_download_mod_modrinth.addEventListener('click',on_nav_download_mod_modrinth)

// page-download-pack
let nav_download_pack_curseforge=document.getElementById("nav-download-pack-curseforge")
let nav_download_pack_modrinth=document.getElementById("nav-download-pack-modrinth")
let page_download_pack_curseforge=document.getElementById("page-download-pack-curseforge")
let page_download_pack_modrinth=document.getElementById("page-download-pack-modrinth")
function on_nav_download_pack_curseforge()
{
    nav_download_pack_curseforge.className="nav-link active"
    nav_download_pack_modrinth.className="nav-link"
    page_download_pack_curseforge.className=""
    page_download_pack_modrinth.className="hidden"
}
function on_nav_download_pack_modrinth()
{
    nav_download_pack_curseforge.className="nav-link"
    nav_download_pack_modrinth.className="nav-link active"
    page_download_pack_curseforge.className="hidden"
    page_download_pack_modrinth.className=""
}
nav_download_pack_curseforge.addEventListener('click',on_nav_download_pack_curseforge)
nav_download_pack_modrinth.addEventListener('click',on_nav_download_pack_modrinth)