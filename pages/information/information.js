const app = getApp()
Page({
    data: {
        sexArray: [
            {
                id: 1,
                name: '男'
            },
            {
                id: 2,
                name: '女'
            },
        ],
        marryArray: [
            {
                id: 1,
                name: '已婚'
            },
            {
                id: 2,
                name: '未婚'
            }
        ],
        raceArray: [
            {
                id: 1,
                name: '白种人'
            },
            {
                id: 2,
                name: '黄种人'
            },
            {
                id: 3,
                name: '黑种人'
            },
        ],
        sexIndex: 0,
        marryIndex: 0,
        raceIndex: 0,
        endTime: '',
        formData: {
            company: '',
            sex: '1',
            isMarry: '1',
            ethnic: '1',
            birthDate: '1994-01-01',
        }
    },
    onLaunch() {
        console.log(1)
    },
    onShow() {
        var date = new Date();
        date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        this.setData({
            endTime: date
        });
        this.getList();
    },
    getList() {
        let that = this;
        wx.request({
            url: 'http://192.168.33.111:1001/static/json/getInformation.json',
            success: function (res) {
                if (res.data.jjk_resultCode == "0") {
                    that.setData({
                        formData: res.data.jjk_result,
                        sexIndex: res.data.jjk_result.sex - 1,
                        marryIndex: res.data.jjk_result.isMarry - 1,
                        raceIndex: res.data.jjk_result.ethnic - 1,
                    });
                }
            }
        });
    },
    bindPickerChange(e) {
        console.log(e)
        var index = e.currentTarget.dataset.type;
        switch (index) {
            case '1':
                var sex = 'formData.sex';
                this.setData({
                    [sex]: this.data.sexArray[e.detail.value].id,
                    sexIndex: e.detail.value
                });
                break;
            case '2':
                var marry = 'formData.isMarry';
                this.setData({
                    [marry]: this.data.marryArray[e.detail.value].id,
                    marryIndex: e.detail.value
                });
                break;
            case '3':
                var race = 'formData.ethnic';
                this.setData({
                    [race]: this.data.raceArray[e.detail.value].id,
                    raceIndex: e.detail.value
                });
                break;
        }
    },
    bindDateChange(e) {
        var birth = 'formData.birthDate';
        this.setData({
            [birth] : e.detail.value
        })
    },
    formSubmit(e) {
        wx.navigateTo({
            url: '../choseTime/choseTime'
        })
    },
})