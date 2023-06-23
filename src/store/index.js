import { createStore } from "vuex";

export default createStore({
  state: {
    // 播放列表
    playList: [
      {
        al: {
          id: 71783637,
          name: "若把你",
          pic: 109951163401482430,
          picUrl:
            "http://p1.music.126.net/M877M2-VhWZiLPVFORf9iQ==/109951163401482434.jpg",
          pic_str: "109951163401482434",
        },
        id: 865632948,
      },
    ],
    playListIndex: 0,
    isbtnShow: true, // 播放按钮的显示
  },
  getters: {},
  mutations: {
    updateIsbtnShow: function (state, value) {
      state.isbtnShow = value;
    },
    updatePlayList: function (state, value) {
      state.playList = value;
      console.log(state.playList);
    },
    updatePlayListIndex: function (state, value) {
      state.playListIndex = value;
    },
  },
  actions: {},
  modules: {},
});
