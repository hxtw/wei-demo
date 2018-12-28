// //index.js
// //获取应用实例
const app = getApp()

import WxValidate from '../../utils/WxValidate.js'
Page({
    data: {
        userInfo: {},
        isClear: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        username: '',
        isErr: false,
        errMsg: '',
        formData: {
            txm: '',
            username: ''
        }
    },
    onLaunch() {
        this.initValidate();
    },
    onShow(){
        this.initValidate();

    },
    showModal(error) {
        this.setData({
            isErr:true,
            errMsg:error.msg
        });
        // wx.showModal({
        //       content: error.msg,
        //        showCancel: false,
        //    })
         },
    initValidate() {
        const rules = {
            txm: {
                required: true,
                minlength: 11
            },
            username: {
                required: true,
                rangelength: [2, 4]
            },
        }
        const messages = {
            txm: {
                required: '请输入条码号',
                minlength: '请输入11位以上的条码号'
            },
            username: {
                required: '请输入姓名',
                rangelength: '请输入2~4个汉字'
            },
        }
        this.WxValidate = new WxValidate(rules,messages);
    },
    formSubmit(e) {
        let that = this;
        var params = e.detail.value;
        // if(!this.WxValidate.checkForm(params)){
        //     const error = this.WxValidate.errorList[0];
        //     this.showModal(error);
        //     return false;
        // }
        // wx.request({
        //     url: host + url,
        //     data: postData,
        //     method: 'POST',
        //     success: function (res) {
        //         if (typeof doSuccess == "function") {
        //             // doSuccess(res);
        //         }
        //     },
        //     fail: function () {
        //         if (typeof doFail == "function") {
        //             // doFail();
        //         }
        //     },
        // });
        wx.navigateTo({
            url: '../information/information'
        })

    },
    bindKeyInput(e) {
        this.setData({
            isClear: true
        });
    },
    clearInput() {
        let that = this;
        var username = 'formData.username';
        this.setData({
            [username]: '',
            isClear: false
        });
    },
    goMyapp(){
        wx.navigateTo({
            url:'../myApp/myApp'
        });
    }

})