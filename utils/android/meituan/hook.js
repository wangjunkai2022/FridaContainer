function getProcessId() {
    var androidProcess = Java.use('android.os.Process');
    return 'processId: ' + androidProcess.myTid() + ' - ';
}
function bytes2hexstr_1(arrBytes) {
    var str = "";
    for (var i = 0; i < arrBytes.length; i++) {
        var tmp;
        var num = arrBytes[i];
        if (num < 0) {
            tmp = (255 + num + 1).toString(16);
        } else {
            tmp = num.toString(16);
        }
        if (tmp.length == 1) {
            tmp = "0" + tmp;
        }
        str += tmp;
    }
    return str;
 }
function hook() {
    var javaString = Java.use('java.lang.String');
    var NBridge = Java.use('com.meituan.android.common.mtguard.NBridge');
    Java.openClassFile("/data/local/tmp/r0gson.dex").load();
    var gson = Java.use('com.r0ysue.gson.Gson');
    // var WTSign = Java.use('com.meituan.android.common.mtguard.wtscore.plugin.sign.core.WTSign');

    // WTSign.makeHeader.implementation = function (a, b) {
    //     console.log(getProcessId(), 'WTSign.makeHeader.a: ', a);
    //     console.log(getProcessId(), 'WTSign.makeHeader.b: ', javaString.$new(a));

    //     var res = this.makeHeader(a, b);
    //     console.log(getProcessId(), 'WTSign.makeHeader.res: ', res);

    //     return res;
    // }

    NBridge.main.implementation = function (a, b) {
        console.log("###################start###################");

        if (b.length === 3) {
            console.log(getProcessId(), 'NBridge.main.b.0: ', b[0]);
            console.log(getProcessId(), 'NBridge.main.b.1: ', b[1]);
            console.log(getProcessId(), 'NBridge.main.b.2: ', b[2]);
        } else {
            for (var i = 0; i < b.length; i++) {
                console.log(getProcessId(), 'NBridge.main.b.i: ', i, ' data: ', bytes2hexstr_1(b[i]));
            }
        }

        var res = this.main(a, b);

        console.log(getProcessId(), 'NBridge.main.res: ', res);

        for (var j = 0; j < res.length; j++) {
            console.log(getProcessId(), 'NBridge.main.res.j: ', j, ' data: ', res[j]);
        }
        console.log("###################end###################");
        return res;
    }
}

function hook2() {
    var javaString = Java.use('java.lang.String');
    var NBridge = Java.use('com.meituan.android.common.mtguard.NBridge');

    NBridge.main2.overload('int', '[Ljava.lang.Object;').implementation = function () {
        console.log('main2: ', arguments[0]);
        console.log('main2: ', (arguments[1]));

        var res = this['main2'].apply(this, arguments);
        console.log('main2.res: ', res);

        return res;
    }

}

function hook3() {
    var javaString = Java.use('java.lang.String');
    var NBridge = Java.use('com.meituan.android.common.mtguard.NBridge');

    javaString.getValue.overload('java.lang.String').implementation = function () {
        console.log('main2: ', arguments[0]);
        console.log('main2: ', (arguments[1]));

        var res = this['getValue'].apply(this, arguments);
        console.log('main2.res: ', res);

        return res;
    }

}

function hook4() {
    var javaString = Java.use('java.lang.String');
    var NBridge = Java.use('java/lang/Long');

    javaString.format.overload('java.lang.String', '[Ljava.lang.Object;').implementation = function () {
        console.log('format1: ', arguments[0]);
        console.log('format2: ', (arguments[1]));

        var res = this['format'].apply(this, arguments);
        console.log('getValue.res: ', res);

        return res;
    }

}

function main() {
    Java.perform(function () {
        hook();
    })
}

setImmediate(main);

// frida -UF -l hook.js
// frida -UF -l hook.js | tee hook.log
