const http = require('../../utils/http.js')
const msg = require('../../utils/msg.js')
// pages/test/test.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        product_id:123
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.hideShareMenu();
        const url = 'https://api.it120.cc/mall/config/get-value?key=mallName';
        const callbacks = {
            success: function (res) {
                console.log(res);
                console.log('自定义成功处理方法');
            },
            fail: function (res) {
                console.log(res);
                console.log('自定义错误处理方法');
            }
        };
        http.get(url, {}, callbacks);
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function (res) {
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log(res.target)
        }
        console.log(this.data.product_id);
        return {
            title: '自定义转发标题',
            path: '/page/user?id=123',
            success: function (res) {
                // 转发成功
                console.log('转发成功')
            },
            fail: function (res) {
                // 转发失败
                console.log('转发失败');
            }
        }
    },
    modalTap: function (e) {
        msg.alert('提示语句', '这是一段提示语', function () {
            msg.alert('你点击了确认按钮');
        });
    },
    noTitlemodalTap: function (e) {
        msg.confirm('这是一个确认提示框',function(){
            msg.alert('你点击了确认按钮');
        },function(){
            msg.alert('你点击了取消按钮');
        });
    },
    toast1Tap: function () {
        // wx.showToast({
        //     title: "默认"
        // })
        msg.success('默认');
    },
    toast2Tap: function () {
        // wx.showToast({
        //     title: "duration 3000",
        //     duration: 3000
        // })
        msg.success('成功',5000);
    },
    toast3Tap: function () {
        // wx.showToast({
        //     title: "loading",
        //     icon: "loading",
        //     duration: 5000
        // })
        msg.loading('加载中...');
    },
    hideToast: function () {
        msg.close();
    }
})