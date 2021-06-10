// pages/stories/stories.js
const globalData = getApp().globalData

Page({
  onShow(){
  // Currently we get the array of stories from our app.js globaldata
  // however we want to get the all of the stories from our stories API
  
  this.setData({
    stories: globalData.stories
  })

  // we can do sth like wx.request({
    // url: 'url',
    // method: "GET",
    // succuess: (res) => {
      // console
    // }
  // })
  },

  tapOnCard: function(event){
  // currently we pass over the index of the story to the show page
  // so that we can find the story from the array on /pages/show/show's onload function 

  let index = event.currentTarget.dataset.index
  wx.navigateTo({
    url: `/pages/show/show?index=${index}`,
  })

  // However, we want to be able to get the *id* of the story this time and pass it to the show page with options
  // and the we can find the story with the /GET stories/:id api endpoint
  }
})