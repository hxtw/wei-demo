const app = getApp();
Page({
    data:{},
    changeApp(){
        wx.showModal({
            title: '',
            content: '若要修改预约需要先取消预约，您确定要先取消预约吗？',
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                }else{
                    console.log('用户点击取消')
                }

            }
        });
    },
});