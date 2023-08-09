/**
 * @author: xingjun.xyf
 * @contact: deathmemory@163.com
 * @file: AntiDexLoader.js
 * @time: 2020/4/16 5:03 PM
 * @desc:
 */
import {DMLog} from "./utils/dmlog";
import {FCCommon} from "./utils/FCCommon";
// import {DianPing} from "./agent/dp/dp";
import {FCAnd} from "./utils/FCAnd";
import {DY} from "./utils/android/dy/hook";
import {DW} from "./utils/android/dewu/hook";
import {TK} from "./utils/android/tiktok/hook";

function main() {
    DMLog.d('MAIN', 'HELLO FridaContainer, please add code on the index.ts');
    // FCAnd.anti.anti_ptrace();
    // FCAnd.anti.anti_fgets();

    // FCAnd.anti.anti_debug();
    ///
    // FCAnd.showStacks();
    // FCAnd.dump_dex_common();
    // FCAnd.Anti.anti_sslPinning("/data/local/tmp/cert-der.crt");

    // FCCommon.dump_module('libmtguard.so', '/data/data/com.dianping.v1');
    // DianPing.hook_stuffs();
    // call mtgsig
    // DianPing.test_call_mtgsig();
    // DianPing.hook_zlog();
    // FCAnd.anti.anti_debug();
    // coord: (0,203,25) | addr: Lcom.dianping.nvnetwork.tunnel.Encrypt.SocketSecureManager;->getB2keyByB2(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String; | loc: ?
    // FCAnd.traceArtMethods(['E:com.dianping.nvnetwork.tunnel.Encrypt.SocketSecureManager'], null, "122,108,111,103,46,98,105,110");  // "zlog.bin"
    // FCAnd.anti.anti_ssl_unpinning();
    // FCAnd.hook_uri(true);
    // FCAnd.hook_url(true);
    // FCAnd.jni.traceAllJNISimply();
    // FCAnd.traceArtMethods(['M:com.shizhuang.duapp.modules.home.model.viewmodel.LandingNativeViewModel']);
    // rpc.exports = {
    //     test() {
    //         Java.perform(() => {
    //             FCAnd.jni.traceAllJNISimply();
    //         });
    //     }
    // }

    // FCAnd.hook_Map("nonce",true);

    // DW.fetchData();
    // DY.hoot_so();
    // FCAnd.jni.hook_registNatives()

    // DY.hook_jsonObject();

    TK.hook_sub_bdd5c();
    // TK.hook_get_bytes();
    // DY.hook_get_bytes();
    
    // FCAnd.jni.hook_registNatives();

}

function start(){
    Java.perform(function () {
        main();
    });
}

if (Java.available) {
    DMLog.i("JAVA", "available");
    setImmediate(start);
    // setInterval(start,1000);
    // setTimeout(start,2000);
}

if (ObjC.available) {
    DMLog.i("ObjC", "available");
    FCCommon.printModules();
    FCCommon.dump_module("Hopper Disassembler v4", "/Users/dmemory/Downloads/");
}


