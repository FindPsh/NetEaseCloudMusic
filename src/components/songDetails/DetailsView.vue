<template>
  <div v-if="dataLoaded" class="box">
    <div class="top">
      <img :src="playlist.coverImgUrl" alt="" class="bgimg" />
      <div class="back">
        <van-icon name="arrow-left" @click="$router.go(-1)" />
      </div>
      <span style="color: white">歌单</span>
      <div class="search">
        <van-icon name="search" />
        <van-icon name="ellipsis" />
      </div>
    </div>
    <div class="author">
      <div class="authorImg">
        <img :src="playlist.coverImgUrl" alt="" />
      </div>
      <div class="author_txt">
        <p>{{ playlist.name }}</p>
        <div>
          <img
            v-show="playlist.creator.avatarUrl"
            :src="playlist.creator.avatarUrl"
            alt=""
          />
          <span v-show="playlist.creator.nickname">{{
            playlist.creator.nickname
          }}</span>
        </div>
        <div class="lable">
          <span v-for="item in playlist.tags" :key="item"> {{ item }} </span>
        </div>
      </div>
    </div>
    <div class="description">
      {{ playlist.description }}
    </div>
    <div class="song-list">
      <ul>
        <li
          v-for="(song, index) in playlist.tracks"
          :key="song.id"
          @click="playMusic(playlist.tracks, index, song.name)"
        >
          <div class="song-info">
            <div class="song-index">{{ index + 1 }}</div>
            <div class="song-details">
              <div class="song-name">{{ song.name }}</div>
              <div class="song-artist">{{ song.ar[0].name }}</div>
            </div>
          </div>
          <div class="song-options">
            <van-icon name="play-circle-o" class="icon-like" />
            <van-icon name="ellipsis" class="icon-more" />
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div v-else class="box loading-container">
    <van-loading color="#1989fa" type="spinner" size="30px" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { onMounted, ref } from "vue";
export default {
  props: ["playlist"],
  setup() {
    const dataLoaded = ref(false);

    onMounted(() => {
      // 模拟异步数据加载
      setTimeout(() => {
        // 数据加载完成后设置 dataLoaded 为 true
        dataLoaded.value = true;
      }, 1000); // 假设数据加载需要 1 秒钟
    });
    return {
      dataLoaded,
    };
  },
  methods: {
    playMusic(value, index, name) {
      console.log(value);
      this.updatePlayList(value);
      this.updatePlayListIndex(index);
      // console.log()
      this.updateName(name);
    },
    ...mapMutations(["updatePlayList", "updatePlayListIndex", "updateName"]),
  },
};
</script>

<style scoped>
.icon-like {
  margin-right: 0.2rem;
}
.song-list {
  /* 添加样式以还原网易云音乐的歌单样式 */
  background: white;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  padding: 0 0.2rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  align-items: center;
  padding: 10px;
  /* border-bottom: 1px solid #eee; */
}

.song-info {
  display: flex;
  align-items: center;
}

.song-index {
  margin-right: 10px;
}

.song-details {
  display: flex;
  flex-direction: column;
}

.song-name {
  font-weight: bold;
}

.song-artist {
  color: #999;
}

.song-options {
  color: #ccc;
  margin-left: auto;
}
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
.lable span {
  border-radius: 0.1rem;
  background: #ccc;
  padding: 0.06rem 0.1rem;
  font-size: 0.2rem;
  color: white;
  text-align: center;
  margin-right: 0.1rem;
}
.author_txt img {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
}
.author_txt div:nth-child(2) {
  display: flex;
  align-items: center;
  font-size: 0.2rem;
  margin: 0.2rem 0;
}
.author_txt div:nth-child(2) span {
  margin-left: 0.1rem;
}
.author_txt p {
  font-size: 0.28rem;
}
.author_txt {
  color: white;
  padding: 0.1rem 0.2rem;
}
.description {
  width: 85%;
  color: #ccc;
  font-size: 0.2rem;
  margin: 0.2rem auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.author {
  display: flex;
  width: 85%;
  margin: 0.2rem auto;
}
.authorImg {
  width: 2.5rem;
}
.authorImg img {
  width: 100%;
  border-radius: 0.2rem;
}
.top {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.back,
.search {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.2rem;
}
.bgimg {
  width: 100%;
  height: 9rem;
  position: fixed;
  z-index: -1;
  filter: blur(30px);
}
.search * {
  color: white;
}
.search {
  justify-content: space-evenly !important;
}
</style>
