import { DMLog } from "../utils/dmlog";

export function hook_hot51(){
    // const LiveCourseBean =  Java.use('com.example.obs.player.component.data.LiveCourseBean');
    // LiveCourseBean.getPayType.implementation = function(){
    //     DMLog.i("LiveCourseBean payType",this.payType);
    //     return '1';
    // }

    const IntoRoomRefactor = Java.use('com.example.obs.player.model.IntoRoomRefactor');
    // IntoRoomRefactor.getPayType.implementation = function(){
    //     DMLog.i("IntoRoomRefactor payType",this.payType);
    //     return 1;
    // }
    IntoRoomRefactor.getPayPrice.implementation = function(){
        DMLog.i("IntoRoomRefactor payPrice",this.payPrice);
        return 0;
    }
    IntoRoomRefactor.getBuy.implementation = function(){
        DMLog.i("IntoRoomRefactor buy",this.buy);
        return true;
    }

    IntoRoomRefactor.getBuyWatchStartTime.implementation = function(){
        DMLog.i("IntoRoomRefactor buy",this.nowTime);
        return this.nowTime.value;
    }

    IntoRoomRefactor.getBuyWatchEndTime.implementation = function(){
        DMLog.i("IntoRoomRefactor buy",this.buyWatchEndTime);
        return "2025-02-25 18:41:01";
    }

    const ChangeFeeBean = Java.use('com.example.obs.player.model.ChangeFeeBean');
    ChangeFeeBean.getType.implementation = function(){
        DMLog.i("ChangeFeeBean getType",this.type);
        return 1;
    }
    
}