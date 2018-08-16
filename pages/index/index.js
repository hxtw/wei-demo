//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        text:'init data',
        num:0,
        array:[{text:'init data'}],
        object:{
            text:'init data'
        },
        array:[{
            message:'foo'
        },{
            message:'bar'
        }]
    },
    changeText(){
        this.setData({
            text:'changed data'
        });
    },
    changeNum(){
        this.data.num++;
        this.setData({
            num:this.data.num
        });
    },
    changeItemInArray(){
        this.setData({
            'array[0].text':'changed data'
        });
    },
    changeItemInObject(){
        this.setData({
            'object.text':'changed object'
        });
    },
    addNewField(){
        this.setData({
            'newField.text':'new data'
        });
    },
    //事件处理函数
    bindViewTap: function () { console.log('123')
        wx.navigateTo({//跳转
            url: '../auth/auth'
        })
        wx.redirectTo({//重定向
            url:'../auth/auth'
        })
    },
    onLoad: function () {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    onPullDownRefresh(){//用户下拉刷新，需要在app.json window 选项中配置 enablePullDownRefresh 为 true
        console.log("监听用户下拉刷新")
    },
    onReachBottom(){//用户下拉刷新，需要在app.json window 选项中配置 onReachBottomDistance 为 true
        console.log("监听用户上拉触底事件")
    },
    onPageScroll(){},
    onTabltemTap(e){
        console.log(e)
    },
    getMoney(){
        console.log("haode")
    },
    getUserInfo: function (e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})
