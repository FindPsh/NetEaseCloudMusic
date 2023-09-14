import { createStore } from "vuex";
import { getSongLyric } from "@/api/songDetails";
export default createStore({
  state: {
    // 播放列表
    playList: [
      {
        id: 865632948,
        al: {
          id: 71783637,
          name: "若把你",
          pic: 109951163401482430,
          picUrl:
            "http://p1.music.126.net/M877M2-VhWZiLPVFORf9iQ==/109951163401482434.jpg",
          pic_str: "109951163401482434",
        },
      },
    ],
    name: "若把你",
    playListIndex: 0,
    isbtnShow: true, // 播放按钮的显示
    detailShow: false, // 歌曲详情页的显示
    lyricList: {}, // 歌词
    currentTime: 0, // 当前时间
  },
  getters: {},
  mutations: {
    updateIsbtnShow: function (state, value) {
      state.isbtnShow = value;
    },
    updatePlayList: function (state, value) {
      state.playList = value;
      // console.log(state.playList);
    },
    updatePlayListIndex: function (state, value) {
      state.playListIndex = value;
    },
    updateName: function (state, value) {
      state.name = value;
    },
    updateDetailShow: function (state) {
      state.detailShow = !state.detailShow;
    },
    updateLyricList: function (state, value) {
      state.lyricList = value;
    },
    updateCurrentTime: function (state, value) {
      state.currentTime = value;
    },
  },
  actions: {
    getLyric: async function (content, value) {
      let res = await getSongLyric(value);
      // console.log(res);
      content.commit("updateLyricList", res.data.lrc);
    },
  },
  modules: {},
});
