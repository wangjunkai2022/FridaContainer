export namespace DW {
    export function fetchData(){
        var util = Java.use('com.shizhuang.duapp.common.net.DuHttpConfig$CoreHeaderConfig');
        console.log('find class :'+util);
        var JavaString =Java.use("java.lang.String");
        var File = Java.use("java/io/File");
        var androidLogClz = Java.use("android.util.Log");
        var exceptionClz = Java.use("java.lang.Exception");
        var Map = Java.use('java.util.HashMap');
        Java.openClassFile("/data/local/tmp/r0gson.dex").load();
        var gson = Java.use('com.r0ysue.gson.Gson');
        // console.log("sourceDir-->" + gson.$new().toJson(util.mHeader.value));
        util.a.overload('java.lang.String', 'java.lang.Object').implementation = function () {
            console.log("===========");
            console.log("arg[0]-->" + (arguments[0]));
            console.log("arg[1]-->" + (arguments[1]));
            // console.log("arg[2]-->" + (arguments[2]));
            // console.log("arg[3]-->" + (arguments[3]));
            var res = this['a'].apply(this, arguments);
            console.log("结果：" +  (res));
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            return res;
        }
    }
}