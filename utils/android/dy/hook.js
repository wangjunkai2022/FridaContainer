function hooka(){
    Java.perform(function() {
        var base_addr = Module.findBaseAddress("libmetasec_ml.so");
        var real_addr = base_addr.add(0x7d339);
        Interceptor.attach(real_addr, {
            onEnter: function (args) {
                console.log("call a")
                console.log(JSON.stringify(this.context))
                console.log("arg1:", (args[2].toInt32()))
                console.log("arg3:", (args[4]).toInt32())
                console.log("arg4:", (args[5]).readUtf8String())

            },
        });
    })
}