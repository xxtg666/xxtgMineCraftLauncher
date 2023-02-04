function night_version(enable)
{
    if( enable == 1 )
    {
        document.documentElement.className="night blackbg"
        // document.getElementById("page-setting").classList.add("blackbg")
    }
    else
    {
        document.documentElement.className=""
        // document.getElementById("page-setting").classList.remove("blackbg")
    }
}