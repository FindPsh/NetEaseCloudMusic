<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">推荐歌单</div>
      <!-- <div class="more">发现更多</div> -->
    </div>
    <div class="musicContent">
      <van-swipe
        :loop="false"
        :width="150"
        class="swiper"
        :show-indicators="false"
      >
        <van-swipe-item v-for="item in musicList" :key="item" class="item">
          <router-link :to="{ path: '/songDetails', query: { id: item.id } }">
            <img :src="item.picUrl" alt="" />
            <span class="playCount">{{ changeCount(item.playCount) }}</span>
            <span class="name">{{ item.name }}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { getMusicList } from "@/api/home";
export default {
  data() {
    return {
      musicList: [],
    };
  },
  methods: {
    changeCount: function (num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num / 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    },

    async musicListFunc() {
      let res = await getMusicList();
      //   console.log(res);
      this.musicList = res.data.result;
    },
  },
  mounted() {
    this.musicListFunc();
  },
};
</script>

<style scoped>
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2rem;
}
.musicTop {
  width: 100%;
  height: 0.6rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
}
.title {
  font-size: 0.3rem;
  font-weight: 900;
}
.more {
  border: 1px solid #ccc;
  text-align: center;
  line-height: 0.6rem;
  padding: 0 0.2rem;
  border-radius: 0.4rem;
}
.musicContent {
  width: 100%;
  height: 4rem;
}
/* .musicContent > div:not(:first-child) {
  margin-left: 0.2rem;
} */
.swiper {
  height: 100%;
}
.swiper img {
  width: 100%;
  border-radius: 0.2rem;
}
.name {
  display: -webkit-box;

  -webkit-box-orient: vertical;

  -webkit-line-clamp: 3;

  overflow: hidden;
}

.musicContent >>> .van-swipe-item {
  margin-left: 0.2rem;
  width: 120px !important;
  height: 160px !important;
}
.playCount {
  position: absolute;
  color: white;
  font-size: 0.2rem;
  top: 0.1rem;
  right: 0.1rem;
}
.item {
  position: relative;
}
</style>
