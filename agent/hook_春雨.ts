import { DMLog } from "../utils/dmlog";
const TAG = "hook_春雨"
function hook_native(){
    var modules = Process.enumerateModules();
    for (var i in modules){
        var module = modules[i];
        // console.log(module.name);
        if (module.name.indexOf("libapp.so") > -1 ){
            console.log(module.base);
        }
    }
}

function hook_春雨OS(){
    const str_name_so = "libapp.so";    // 要 hook 的 so 名
    //var str_name_func = "updateHash";          // 要 hook 的函数名
    DMLog.i(TAG, "开始");
    hook_native()
    const so_model = Module.findBaseAddress(str_name_so)
    DMLog.i(TAG, "so_model ---" + n_addr_func);
    var n_addr_func = so_model?.add("0x00000000005d3430")
    DMLog.i(TAG, "func addr is ---" + n_addr_func);
    
    // Interceptor.attach(n_addr_func, {
    //     // 在 hook 函数之前执行的语句
    //     onEnter: function(args) 
    //     {
    //         console.log("args:------>")
    //         console.log(hexdump(args[0]))
    //         //console.log(hexdump(args[1]))
    //     },
    //     // 在 hook 函数之后执行的语句
    //     onLeave:function(retval)
    //     {
    //         console.log("**********************************")
    //         console.log("********************return:------>")
    //         console.log("**********************************")
    //         console.log(hexdump(retval, {length:200}))
    
    //     }
    // })
}

function get_yoyo_tools() {
    var YouTools = Java.use("com.youyou.YouTools")
    if (YouTools){
        return YouTools
    }
    Java.openClassFile("./yoyo.dex").load();
    var YouTools = Java.use("com.youyou.YouTools")
    return YouTools
}

function get_content(): any {
    const current_application = Java.use('android.app.ActivityThread').currentApplication();
    return current_application.getApplicationContext();
}

function play(url: string) {
    var YouTools = get_yoyo_tools()
    YouTools.toLiveYouyouApp(url, get_content());
}

export function hook_春雨() {
    play("hhhh");
}