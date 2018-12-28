const app = getApp();
Page({
    data:{
        branchId:'',
    },
    onLaunch(options){
        //options.id url 传参接参方式
    },
    radioChange(e){
        this.setData({
            branchId:e.detail.value
        });
    },
    goTime(){
        wx.navigateTo({
            url:'../choseTime/choseTime?bid='+this.data.branchId,
        });
    },
});