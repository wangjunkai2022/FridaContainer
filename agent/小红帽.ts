import { DMLog } from "../utils/dmlog";
import { FCAnd } from "../utils/FCAnd";

export function hook_小红帽(){
    // hook_decryptPrefRecord()
    hook_RetrofitSource()
}

function hook_RetrofitSource(){
    const RetrofitSource = Java.use('com.qennnsad.aknkaksd.data.repository.k')
    RetrofitSource.loadPrivateLimit.implementation = function(arge){
        DMLog.i("RetrofitApi.loadPrivateLimit", arge)
        return ""
    }
}

function hook_RetrofitApi(){
    const RetrofitApi = Java.use('com.qennnsad.aknkaksd.data.repository.RetrofitApi');
    RetrofitApi.loadPrivateLimit.implementation = function(arge){
        DMLog.i("RetrofitApi.loadPrivateLimit", arge)
        return ""
    }
}

function hook_decryptUserMoney(){

    const UserMoney = Java.use('com.qennnsad.aknkaksd.data.bean.me.UserMoney');
    // PrefsHelper.decryptPrefRecord.implementation = function(str: string){
    //     DMLog.i("PrefsHelper decryptPrefRecord",str);
    //     return 0;
    // }
    UserMoney.getBeanbalance.implementation = function(){
        DMLog.i("getBeanbalance", this.beanbalance)
        return 999
    }
    UserMoney.getChipbalance.implementation = function(){
        DMLog.i("chipbalance", this.chipbalance)
        return 999
    }
    UserMoney.getCoinbalance.implementation = function(){
        DMLog.i("coinbalance", this.coinbalance)
        return 999.0
    }
    UserMoney.getPointbalance.implementation = function(){
        DMLog.i("pointbalance", this.pointbalance)
        return 999.0
    }
    UserMoney.getRemainForNextLev.implementation = function(){
        DMLog.i("remainfornextlev", this.remainfornextlev)
        return 1
    }

    // var className = "com.qennnsad.aknkaksd.data.sharedpreference.PrefsHelper"
    // FCAnd.traceArtMethods(["E:" + className],"decryptPrefRecord")

}