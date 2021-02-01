//app.js
var Bmob = require("utils/Bmob-1.6.3.min.js");
Bmob.initialize("86fed47394282a35bc87742655d5a9f1", "6d99c5106c1907a36936a04f9ec38e32");
// var bmobSocketIo;
App({

  onLaunch: function() {
    // bmobSocketIo = new Bmob.Socket();
    // this.updateListenerSignRecord();
  },
  globalData: {
    // 微信用户信息
    /**
     * avatarUrl:"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI50Mzniaib2icGquJEQ481rjFAzicIfz4Zwpxtv2PPH1JVj2HXicnzNWicc1DVJshc6UvOwq1iceA0pUBvQ/132"
    city:"Baise"
    country:"China"
    gender:1
    language:"zh_CN"
    nickName:"NullPointerException"
    province:"Guangxi"
     */
    userInfo: null,
    // 小程序用户信息
    currentUser: null,
    // 密码加密加盐
    hexMd5Salt:'hanxue',
  },
  setGlobalData: function(data) {
    this.globalData = data;
  }
})