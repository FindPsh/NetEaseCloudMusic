<template>
  <div class="player-container">
    <div class="song-info">
      <div class="disc">
        <img
          class="song-cover"
          :src="playList[playListIndex].al.picUrl"
          alt="Song Cover"
        />
      </div>

      <div class="song-details">
        <p class="song-name">{{ playList[playListIndex].al.name }}</p>
        <!-- <p class="song-artist">{{ currentSong.artist }}</p> -->
      </div>
    </div>
    <div class="right">
      <div class="controls">
        <button class="pause-button" v-if="isbtnShow">
          <van-icon name="play-circle-o" @click="isPlayMusic" />
        </button>
        <button class="play-button" v-else>
          <van-icon name="pause-circle-o" @click="isPlayMusic" />
        </button>
      </div>
      <div class="playlist">
        <button class="playlist-button">
          <van-icon name="ellipsis" />
        </button>
        <!-- 歌曲列表内容 -->
        <!-- 可以根据需要进行渲染 -->
      </div>
    </div>
    <audio
      :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"
      ref="audio"
    ></audio>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["playList", "playListIndex", "isbtnShow"]),
  },
  methods: {
    isPlayMusic() {
      // 判断音乐是否播放
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.updateIsbtnShow(false);
      } else {
        this.$refs.audio.pause();
        this.updateIsbtnShow(true);
      }
    },

    ...mapMutations(["updateIsbtnShow"]),
  },
};
</script>

<style scoped>
.right {
  display: flex;
}
.player-container {
  width: 100%;
  height: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加阴影样式 */
  position: fixed;

  bottom: 0;
}

.song-info {
  display: flex;
  align-items: center;
}

.disc {
  width: 1rem;
  height: 1rem;
  object-fit: cover;
  margin-right: 10px;
  /* position: relative; */
  border-radius: 50%;
  background: black;
  /* text-align: center;
  line-height: 1rem; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.disc img {
  width: 0.6rem;
  height: 0.6rem;
  /* position: absolute; */
  border-radius: 50%;
}

.song-details {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.song-name {
  font-weight: bold;
}

.controls {
  display: flex;
  align-items: center;
}

.play-button,
.pause-button,
.playlist-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 24px;
  margin: 0 5px;
}

.playlist-button {
  margin-right: 10px;
}

/* 根据需要设置播放按钮、暂停按钮和播放列表图标的样式 */
</style>
