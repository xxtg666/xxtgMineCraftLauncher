// page-setting & page-run
let input_username = document.getElementById("input-username")
let select_minecraftversion = document.getElementById("select-minecraftversion")
let input_dotminecraftpath = document.getElementById("input-dotminecraftpath")
let input_skinpath = document.getElementById("input-skinpath")
let input_java = document.getElementById("input-java")
let input_ram = document.getElementById("input-ram")
let input_gamearg = document.getElementById("input-gamearg")
let input_javaarg = document.getElementById("input-javaarg")
let select_versiong = document.getElementById("select-versiong")
let select_night = document.getElementById("select-night")
function save_config()
{
    let config = {
        "username":input_username.value,
        "minecraftversion":select_minecraftversion.selectedIndex,
        "dotminecraftpath":input_dotminecraftpath.value,
        "skinpath":input_skinpath.value,
        "java":input_java.value,
        "ram":input_ram.value,
        "gamearg":input_gamearg.value,
        "javaarg":input_javaarg.value,
        "versiong":select_versiong.selectedIndex,
    }
    window.electronAPI.saveconfig(config)
    window.electronAPI.loaddotminecraft()
}
function refresh_night(){
    night_version(select_night.selectedIndex)
}
input_username.addEventListener('change',save_config)
select_minecraftversion.addEventListener('change',save_config)
input_dotminecraftpath.addEventListener('change',save_config)
input_skinpath.addEventListener('change',save_config)
input_java.addEventListener('change',save_config)
input_ram.addEventListener('change',save_config)
input_gamearg.addEventListener('change',save_config)
input_javaarg.addEventListener('change',save_config)
select_versiong.addEventListener('change',save_config)
select_night.addEventListener('change',refresh_night)