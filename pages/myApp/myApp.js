const app =getApp();
Page({
    data:{},
    goDetail(){
        wx.navigateTo({
            url:'../appDetail/appDetail'
        });
    },
    changeApp(e){
        wx.showModal({
            title: '若要修改预约需要先取消预约，您确定要先取消预约吗？',
            content: '',
            cancelColor:'#666666',
            confirmColor:'#4873D2',
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                }else{
                    console.log('用户点击取消')
                }

            }
        });
    }
});