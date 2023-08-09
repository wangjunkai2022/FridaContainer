export namespace DY {

    function byteToHexString(uint8arr) {
        if (!uint8arr) {
            return '';
        }
        var hexStr = '';
        for (var i = 0; i < uint8arr.length; i++) {
            var hex = (uint8arr[i] & 0xff).toString(16);
            hex = (hex.length === 1) ? '0' + hex : hex;
            hexStr += hex;
        }

        return hexStr.toUpperCase();
    }
    export function sendEncryptLog() {
        var util = Java.use('com.ss.android.common.applog.NetUtil');
        var JavaString =Java.use("java.lang.String");
        // var url = 'https://log.snssdk.com/service/2/device_register/?ac=wifi&mac_address=04%3ae0%3a94%3a3c%3a74%3a97&channel=xiaomi&aid=1112&app_name=live_stream&version_code=835&version_name=8.3.5&device_platform=android&ssmix=a&device_type=SM-G965N&device_brand=samsung&language=zh&os_api=25&os_version=7.1.2&uuid=864394010382499&openudid=E8O4Z1QU60523647&manifest_version_code=835&resolution=720*1280&dpi=240&update_version_code=8354&_rticket=1608607904296&mcc_mnc=46007&cdid=fb996693-3a49-4473-a525-fd6f5a1f4931';
        // var body = '{"magic_tag":"ss_app_log","header":{"display_name":"抖音火山版","update_version_code":8354,"manifest_version_code":835,"app_version_minor":"","aid":1112,"channel":"xiaomi","appkey":"56ea65c067e58eea7e000c63","package":"com.ss.android.ugc.live","app_version":"8.3.5","version_code":835,"sdk_version":"2.10.1-rc.18","sdk_target_version":29,"git_hash":"afab4b4","os":"Android","os_version":"7.1.2","os_api":25,"device_model":"SM-G965N","device_brand":"samsung","device_manufacturer":"samsung","cpu_abi":"armeabi-v7a","build_serial":"37464D0000038F9D","release_build":"71ff659_20200110","density_dpi":240,"display_density":"hdpi","resolution":"1280x720","language":"zh","mc":"04:e0:94:3c:74:97","timezone":28800,"access":"wifi","not_request_sender":0,"carrier":"CMCC","mcc_mnc":"46007","rom":"700201105","rom_version":"dream2ltexx-user 7.1.2 NRD90M 700201105 release-keys","cdid":"fb996693-3a49-4473-a525-fd6f5a1f4931","sig_hash":"aea615ab910015038f73c47e45d21466","openudid":"E8O4Z1QU60523647","udid":"864394010382499","clientudid":"40155848-2613-4903-993f-18bc82a0bf43","serial_number":"37464D0000038F9D","sim_serial_number":[],"region":"CN","tz_name":"Asia\\/Shanghai","tz_offset":28800,"sim_region":"CN","oaid_may_support":false,"req_id":"80a19f1a-6696-4c90-abd3-0ec4d1c2b9ec","sdk_flavor":"china"},"_gen_time":1608521753889}';

        util.sendEncryptLog.overload('java.lang.String', '[B', 'android.content.Context', 'boolean').implementation = function (a,b,c,d) {
            var res = this.sendEncryptLog(a,b,c,d);
            // if (a.indexOf("log_settings") > 0) {
                console.log("a-->" + a);
                console.log("b-->" + JavaString.$new(b));
                // var bArr = JavaString.$new(body).getBytes('UTF-8');
                // console.log("bArr-->" + JavaString.$new(bArr));
                console.log("c-->" + c);
                console.log("d-->" + d);
                // console.log("e-->" + e);
                console.log("结果:" + res);
                console.log("===============================");   
            // }
            return res;
        }
    }
    export function sendEncryptLogStreamResp(){
        var util = Java.use('com.ss.android.common.applog.NetUtil');
        var JavaString =Java.use("java.lang.String");
        var androidLogClz = Java.use("android.util.Log");
        var exceptionClz = Java.use("java.lang.Exception");
        var Map = Java.use('java.util.HashMap');
        util.sendEncryptLogStreamResp.overload('java.lang.String', '[B', 'android.content.Context', 'boolean', 'java.lang.String', 'java.lang.String').implementation = function () {
            var res = this['sendEncryptLogStreamResp'].apply(this, arguments);
            
            // if (arguments[0].indexOf('log_settings')>0){
                console.log("===========");
                console.log("arg[0]-->" + arguments[0]);
                console.log("arg[1]-->" + JavaString.$new(arguments[1]));
                console.log("arg[3]-->" + arguments[3]);
                console.log("arg[4]-->" + arguments[4]);
                console.log("arg[5]-->" + arguments[5]);
                console.log("res:"+res);
                // console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            // }
            return res;
        }
    }
    export function ttEncrypt(){
        var util = Java.use('com.bytedance.frameworks.encryptor.EncryptorUtil');
        var JavaString =Java.use("java.lang.String");
        var File = Java.use("java/io/File");
        var androidLogClz = Java.use("android.util.Log");
        var exceptionClz = Java.use("java.lang.Exception");
        var Map = Java.use('java.util.HashMap');
        Java.openClassFile("/data/local/tmp/r0gson.dex").load();
        var gson = Java.use('com.r0ysue.gson.Gson');
        // console.log("sourceDir-->" + gson.$new().toJson(util.mHeader.value));
        util.ttEncrypt.overload('[B', 'int').implementation = function () {
            console.log("===========");
            // console.log("arg[0]-->" + byteToHexString(arguments[0]));
            // console.log("arg[0]-->" + JavaString.$new(arguments[0]));
            // var bArr = JavaString.$new(body).getBytes('UTF-8');       
            // data2 = JavaString.$new(arguments[0]);
            // console.log("arg[1]-->" + (arguments[1]));
            // console.log("arg[2]-->" + gson.$new().toJson(arguments[0]));
            // console.log("d-->" + d);
            var res = this['ttEncrypt'].apply(this, arguments);
            if (res != null) {
                console.log("结果：" +  byteToHexString(res));
                // console.log("mheader-->" + gson.$new().toJson(res.mHeader.value));
            }
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            return res;
        }
    }

    export function compressAndEncryptData(){
        var util = Java.use('com.ss.android.common.applog.NetUtil');
        var JavaString =Java.use("java.lang.String");
        var File = Java.use("java/io/File");
        var androidLogClz = Java.use("android.util.Log");
        var exceptionClz = Java.use("java.lang.Exception");
        var Map = Java.use('java.util.HashMap');
        Java.openClassFile("/data/local/tmp/r0gson.dex").load();
        var gson = Java.use('com.r0ysue.gson.Gson');
        // console.log("sourceDir-->" + gson.$new().toJson(util.mHeader.value));
        util.compressAndEncryptData.overload('android.content.Context', '[B').implementation = function () {
            console.log("===========");
            // console.log("arg[0]-->" + (arguments[0]));
            // var bArr = JavaString.$new(body).getBytes('UTF-8');
    
            console.log("arg[1]-->" + JavaString.$new(arguments[1]));
            // console.log("arg[2]-->" + gson.$new().toJson(arguments[0]));
            // console.log("d-->" + d);
            var res = this['compressAndEncryptData'].apply(this, arguments);
            if (res != null) {
                console.log("结果：" +  byteToHexString(res));
                // console.log("mheader-->" + gson.$new().toJson(res.mHeader.value));
            }
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            return res;
        }
    }

    export function a(){
        var util = Java.use('com.umeng.analytics.pro.aa');
        var JavaString =Java.use("java.lang.String");
        var File = Java.use("java/io/File");
        var androidLogClz = Java.use("android.util.Log");
        var exceptionClz = Java.use("java.lang.Exception");
        var Map = Java.use('java.util.HashMap');
        Java.openClassFile("/data/local/tmp/r0gson.dex").load();
        var gson = Java.use('com.r0ysue.gson.Gson');
        // console.log("sourceDir-->" + gson.$new().toJson(util.mHeader.value));
        util.a.overload('android.content.Context', 'java.lang.String', '[B').implementation = function () {
            console.log("===========");
            
            // var bArr = JavaString.$new(body).getBytes('UTF-8');
    
            console.log("arg[1]-->" + JavaString.$new(arguments[1]));
            console.log("arg[2]-->" + (arguments[2]));
            // console.log("arg[2]-->" + gson.$new().toJson(arguments[0]));
            // console.log("d-->" + d);
            var res = this['a'].apply(this, arguments);
            if (res != null) {
                console.log("结果：" +  JavaString.$new(res));
                // console.log("mheader-->" + gson.$new().toJson(res.mHeader.value));
            }
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            return res;
        }
    }

    export function njss(){
        var util = Java.use('com.ss.sys.secuni.a');
        var JavaString =Java.use("java.lang.String");
        var androidLogClz = Java.use("android.util.Log");
        var exceptionClz = Java.use("java.lang.Exception");
        var Map = Java.use('java.util.HashMap');
        Java.openClassFile("/data/local/tmp/r0gson.dex").load();
        var gson = Java.use('com.r0ysue.gson.Gson');
        util.njss.overload('int', 'java.lang.Object').implementation = function () {
            console.log("===========");
            console.log("arg[0]-->" + (arguments[0]));
            // var bArr = JavaString.$new(body).getBytes('UTF-8');
            // console.log("arg[1]-->" + JavaString.$new(arguments[1]));
            console.log("arg[2]-->" + gson.$new().toJson(arguments[1]));
            // console.log("d-->" + d);
            var res = this['njss'].apply(this, arguments);
            console.log("结果：" +  gson.$new().toJson(res));
            // console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            return res;
        }
    }

    export function Base64(){
        var util = Java.use('android.util.Base64');
        var JavaString =Java.use("java.lang.String");
        var androidLogClz = Java.use("android.util.Log");
        var exceptionClz = Java.use("java.lang.Exception");
        var Map = Java.use('java.util.HashMap');
        Java.openClassFile("/data/local/tmp/r0gson.dex").load();
        var gson = Java.use('com.r0ysue.gson.Gson');
        util.encodeToString.overload('[B', 'int').implementation = function () {
            console.log("===========");
            console.log("arg[0]-->" + gson.$new().toJson(JavaString.$new(arguments[0])));
            // var bArr = JavaString.$new(body).getBytes('UTF-8');
            // console.log("arg[1]-->" + JavaString.$new(arguments[1]));
            // console.log("arg[2]-->" + gson.$new().toJson(arguments[1]));
            // console.log("d-->" + d);
            var res = this['encodeToString'].apply(this, arguments);
            console.log("结果：" +  gson.$new().toJson(res));
            // console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            return res;
        }
    }

    export function c(){
        var util = Java.use('com.ss.sys.secuni.c');
        var JavaString =Java.use("java.lang.String");
        var androidLogClz = Java.use("android.util.Log");
        var exceptionClz = Java.use("java.lang.Exception");
        var Map = Java.use('java.util.HashMap');
        Java.openClassFile("/data/local/tmp/r0gson.dex").load();
        var gson = Java.use('com.r0ysue.gson.Gson');
        util.a.overload('java.lang.String', 'java.util.HashMap', '[B').implementation = function () {
            console.log("===========");
            console.log("arg[0]-->" + (arguments[0]));
            console.log("arg[1]-->" + gson.$new().toJson(arguments[1]));
            console.log("arg[2]-->" + JavaString.$new(arguments[2]));
            // console.log("d-->" + d);
            var res = this['njss'].apply(this, arguments);
            console.log("结果：" +  gson.$new().toJson(res));
            // console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            return res;
        }
    }

    export function h(){
        var util = Java.use('ms.bd.c.h');
        var JavaString =Java.use("java.lang.String");
        var androidLogClz = Java.use("android.util.Log");
        var exceptionClz = Java.use("java.lang.Exception");
        var Map = Java.use('java.util.HashMap');
        Java.openClassFile("/data/local/tmp/r0gson.dex").load();
        var gson = Java.use('com.r0ysue.gson.Gson');
        util.LIZ.overload('java.lang.String', 'java.util.HashMap', '[B').implementation = function () {
            console.log("===========");
            console.log("arg[0]-->" + (arguments[0]));
            console.log("arg[1]-->" + gson.$new().toJson(arguments[1]));
            console.log("arg[2]-->" + JavaString.$new(arguments[2]));
            // console.log("d-->" + d);
            var res = this['njss'].apply(this, arguments);
            console.log("结果：" +  gson.$new().toJson(res));
            // console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            return res;
        }
    }

    export function hook_get_bytes(){
        var util = Java.use('java.lang.String');
        var JavaString =Java.use("java.lang.String");
        var androidLogClz = Java.use("android.util.Log");
        var exceptionClz = Java.use("java.lang.Exception");
        var Map = Java.use('java.util.HashMap');
        Java.openClassFile("/data/local/tmp/r0gson.dex").load();
        var gson = Java.use('com.r0ysue.gson.Gson');
        util.getBytes.overload('java.lang.String').implementation = function () {
            console.log("===========");
            console.log("arg[0]-->" + (arguments[0]));
            // console.log("arg[1]-->" + gson.$new().toJson(arguments[1]));
            // console.log("arg[2]-->" + JavaString.$new(arguments[2]));
            // console.log("d-->" + d);
            var res = this['getBytes'].apply(this, arguments);
            console.log("结果：" +  JavaString.$new(res));
            // console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            return res;
        }
    }

    export function hook_sendEncrypt(){
        var util = Java.use('com.ss.android.common.applog.NetUtil');
        console.log(util);
        var JavaString =Java.use("java.lang.String");
        var androidLogClz = Java.use("android.util.Log");
        var exceptionClz = Java.use("java.lang.Exception");
        var Map = Java.use('java.util.HashMap');
        Java.openClassFile("/data/local/tmp/r0gson.dex").load();
        var gson = Java.use('com.r0ysue.gson.Gson');
        util.sendEncryptLog.overload('java.lang.String', '[B', 'android.content.Context', 'boolean', '[Ljava.lang.String;', 'java.util.Map', 'java.lang.String', 'boolean', 'boolean').implementation = function () {
            // console.log("===========");
            // if (a.indexOf("log_settings") > 0) {
                // console.log("arg[0]-->" + arguments[0]);
                // console.log("arg[1]-->" + JavaString.$new(arguments[1]));
                // var bArr = JavaString.$new(body).getBytes('UTF-8');
                // console.log("bArr-->" + JavaString.$new(bArr));
                // console.log("arg[4]-->" + gson.$new().toJson(arguments[4]));
                // console.log("arg[5]-->" + gson.$new().toJson(arguments[5]));
                // console.log("arg[6]-->" + (arguments[6]));
                var res = this['sendEncryptLog'].apply(this, arguments);
                // console.log("结果:" + res);
                // console.log("===============================");   
            // }
            return res;
        }
    }

    export function hook_a(){
        var util = Java.use('ms.bd.c.k');
        var JavaString =Java.use("java.lang.String");
        var androidLogClz = Java.use("android.util.Log");
        var exceptionClz = Java.use("java.lang.Exception");
        var Map = Java.use('java.util.HashMap');
        Java.openClassFile("/data/local/tmp/r0gson.dex").load();
        var gson = Java.use('com.r0ysue.gson.Gson');
        util.a.overload('int', 'int', 'long', 'java.lang.String', 'java.lang.Object').implementation = function () {
            // console.log("===========");
            // if (a.indexOf("log_settings") > 0) {
                console.log("arg[0]-->" + arguments[0]);
                console.log("arg[1]-->" + (arguments[1]));
                console.log("arg[2]-->" + arguments[2]);
                console.log("arg[3]-->" + arguments[3]);
                console.log("arg[4]-->" + arguments[4]);
                // var bArr = JavaString.$new(body).getBytes('UTF-8');
                // console.log("bArr-->" + JavaString.$new(bArr));
                // console.log("arg[4]-->" + gson.$new().toJson(arguments[4]));
                // console.log("arg[5]-->" + gson.$new().toJson(arguments[5]));
                // console.log("arg[6]-->" + (arguments[6]));
                var res = this['a'].apply(this, arguments);
                console.log("结果:" + gson.$new().toJson(res));
                // console.log("===============================");   
            // }
            return res;
        }
    }

    export function hook_NearbyModel(){
        var NearbyModel = Java.use('com.ss.ugc.aweme.commerce.NearbyModel');
        var JavaString =Java.use("java.lang.String");
        var androidLogClz = Java.use("android.util.Log");
        var exceptionClz = Java.use("java.lang.Exception");
        var Map = Java.use('java.util.HashMap');
        Java.openClassFile("/data/local/tmp/r0gson.dex").load();
        var gson = Java.use('com.r0ysue.gson.Gson');
        NearbyModel["$init"].overload('java.lang.String', 'java.lang.Boolean', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.Boolean', 'boolean', 'java.lang.Integer', 'java.lang.Integer', 'java.util.Map', 'java.lang.Boolean', 'java.lang.String').implementation = function (str, bool, str2, str3, str4, bool2, z, num, num2, map, bool3, str5) {
            console.log(`NearbyModel.$init is called: str=${str}, bool=${bool}, str2=${str2}, str3=${str3}, str4=${str4}, bool2=${bool2}, z=${z}, num=${num}, num2=${num2}, map=${map}, bool3=${bool3}, str5=${str5}`);
            this["$init"](str, bool, str2, str3, str4, bool2, z, num, num2, map, bool3, str5);
        };
    }
    export function hook_jsonObject(){
        var JSONObject = Java.use('org.json.JSONObject');
    
        // Hook JSONObject 的 getString 方法
        JSONObject.getString.overload('java.lang.String').implementation = function(key) {
            // 打印 getString 方法的参数
            console.log('JSONObject getString - key:', key);
    
            // 调用原始 getString 方法
            var result = this.getString.apply(this, arguments);
    
            // 打印 getString 方法的结果
            console.log('JSONObject getString - result:', result);
    
            // 返回 getString 方法的结果
            return result;
        };
    }
    
}