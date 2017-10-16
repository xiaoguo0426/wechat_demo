//http请求组件
function Http()  {
    this.callbacks = {
        success: function(res){
            this.handle(res);
            //console.log('默认成功处理方法');
        },
        fail: function(res){
            //console.log('默认错误处理方法');
        },
        complate: function(res){
            //console.log('默认完成处理方法');
        }
    }
};

/**
 * POST请求
 */
Http.prototype.post = function(url,data,callbacks){
    console.log('post');
    this.load(url,'POST',data,callbacks);
}

/**
 * GET请求
 */
Http.prototype.get = function (url, data, callbacks) {
    this.load(url, 'GET', data, callbacks);
}

/**
 * 请求处理
 */
Http.prototype.load = function (url, type, data, callback) {
    const callbackType = typeof callback;
    let callbacks = {};
    if ('function' === callbackType){
        callbacks = Object.assign(this.callbacks, {success: callback});
    }else if('object' === callbackType){
        callbacks = Object.assign(this.callbacks,callback);
    }else{
        callbacks = this.callbacks;
    }
    console.log(callbacks);
    wx.request({
        url: url,
        data: data || [],
        method: type || 'GET',
        header: {
            'content-type': 'application/json' // 默认值
        },
        dataType: 'JSON',
        success: function(res){
            console.log(JSON.parse(res.data));
            typeof callbacks.success === 'function' && callbacks.success.call(this, JSON.parse(res.data));
        },
        fail: function(res){
            typeof callbacks.fail === 'function' && callbacks.fail.apply(this, res);
        },
        complete: function(res){
            typeof callbacks.complete === 'function' && callbacks.complete.apply(this, res);
        }
    })
    
}
/**
 * 默认处理方法
 */
Http.prototype.handle = function(res){
    //todo
    //这里的方法还没有想到
}

module.exports = new Http();