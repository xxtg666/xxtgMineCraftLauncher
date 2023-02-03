function night_version(enable)
{
    if( enable == 1 )
    {
        document.body.className="night blackbg"
        // document.getElementById("page-setting").classList.add("blackbg")
    }
    else
    {
        document.body.className=""
        // document.getElementById("page-setting").classList.remove("blackbg")
    }
}