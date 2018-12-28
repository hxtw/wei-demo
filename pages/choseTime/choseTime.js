// //choseTime.js
// //获取应用实例
const app = getApp()
const MONTHS = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'June.', 'July.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
Page({
    data:{
        selected: [
            {
                date: '2018-5-21'
            }, {
                date: '2018-5-22'
            },{
                date: '2018-5-24'
            },{
                date: '2018-5-25'
            }
        ],
        isAlert:false,
        year: new Date().getFullYear(),      // 年份
        month: new Date().getMonth() + 1,    // 月份
        day: new Date().getDate(),
        str: MONTHS[new Date().getMonth()],  // 月份字符串
        dayStyle: [
            { month: 'current', day: new Date().getDate(), color: '#333333', background: '#AAD4F5',border:'none'},
            { month: 'current', day: new Date().getDate(), color: '#333333', background: '#AAD4F5',border:'none'}
        ],
        branchId:''
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if(options.bid){
            this.setData({
                branchId:options.bid,
            });
        }
        this.getList();
    },
    getList(){
        let that = this;
        wx.request({
            url: 'http://192.168.33.111:1001/static/json/dateList.json',
            success: function (res) {
                if (res.data.jjk_resultCode == "0") {
                    var data = res.data.jjk_result.dateList;

                    let today = new Date().getTime();
                    let dayStyle = new Array;
                    // console.log(data)
                    for(let index in data) {
                        var ss = new Date(data[index].date);
                        var clickDate = ss.valueOf(ss);
                        if(clickDate < today){
                            let date = data[index].date.split("-");
                            dayStyle.push({
                                month: 'current', day: date[2],color:"#999999",
                            });
                        }else{
                            if(data[index].resType == 1){
                                let date0 = data[index].date.split("-");
                                dayStyle.push({
                                    month: 'current', day: date0[2],border:'1rpx solid #1AAD19'
                                });
                            }else if(data[index].resType == 2){ //已约满
                                let date1 = data[index].date.split("-");
                                dayStyle.push({
                                    month: 'current', day: date1[2], color: '#333333', background: ' #E7E7E7'
                                });
                            }else if(data[index].resType == 3){ //休息日
                                let date2 = data[index].date.split("-");
                                dayStyle.push({
                                    month: 'current', day: date2[2], color: '#333333', background: '#E7E7E7'
                                });
                            }
                        }
                    }
                    that.setData({
                        dayStyle
                    });
                    // console.log(that.data.dayStyle)
                }
            }
        });
    },
    goBranch(){
        wx.navigateTo({
            url: '../choseBranch/choseBranch'
        })
    },
    // /**
    //  * 日历是否被打开
    //  */
    // bindselect(e) {
    //     console.log(e.detail.ischeck)
    // },
    // /**
    //  * 获取选择日期
    //  */
    // bindgetdate(e) {
    //     let time = e.detail;
    //     console.log(time)
    //
    // }

    dayClick: function (event) {
        let clickDay = event.detail.day;
        // console.log(this.data.dayStyle);
        let changeDay = `dayStyle[1].day`;
        let changeBg = `dayStyle[1].background`;
        let changeCo = `dayStyle[1].color`;
        this.setData({
            [changeDay]: clickDay,
            [changeCo]:"white",
            [changeBg]: "#1AAD19",
        })

    },
    submit(){
        this.setData({
            isAlert:true
        });
    },
    goNext(e){
        console.log(e)
        if(e.target.dataset.type == '1') {
            wx.navigateTo({
                url: '../myApp/myApp'
            })
        }else{
            wx.navigateTo({
                url: '../index/index'
            })
        }
    },
})