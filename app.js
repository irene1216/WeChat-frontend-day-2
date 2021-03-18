// app.js
App({
  globalData: {
    anotherTitle: "Hello World",
    stories: [],
    test: "This is some data in globalData"
  },
  onLaunch(){
    this.globalData.stories = wx.getStorageSync('stories')
    let page = this
    wx.getStorage({
      key: 'stories',
      success: function(res){
        console.log("testing other way of getting storage", res)
        page.globalData.stories = res.stories
      }
    })
  }
})
