// app.js
App({
  globalData: {
    anotherTitle: "Hello World",
    stories: [],
    test: "This is some data in globalData"
  },
  onLaunch(){
    let stories = wx.getStorageSync('stories')
    stories > 0 ? this.globalData.stories = stories : this.globalData.stories = []
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
