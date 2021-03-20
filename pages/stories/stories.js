// pages/stories/stories.js
const globalData = getApp().globalData

Page({
  data: {
    stories: [],
    // activeStoryIndex: ''
  },

  onShow(){
    // this.setData({
    //   stories: wx.getStorageSync('stories')
    // })
    wx.request({
      url: 'https://fml.shanghaiwogeng.com/api/v1/stories',
      success: (res)=>{
        console.log("testing", res.data)
        this.setData({
          stories: res.data.reverse(),
          activeStoryIndex: "no"
        })
      }
    })
  },

  tapOnCard: function(event){
    console.log(event)
    // get the new active id from tapping the card
    let index = event.currentTarget.dataset.index
    let id = event.currentTarget.dataset.id
    // set index to activeStoryIndex
    this.setData({
      activeStoryIndex: index
    })
  },


  // deleteStory(event){
  //   let index = event.currentTarget.dataset.index
  //   console.log(index)
  //   this.data.stories.splice(index, 1)
  //   this.setData({
  //     stories: this.data.stories
  //   })
  
})