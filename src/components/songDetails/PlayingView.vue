<template>
  <img :src="musicItem.al.picUrl" alt="" class="bgImg" />
  <div class="box">
    <div class="title">
      <div class="back" @click="detailShow">
        <van-icon name="arrow-down" />
      </div>
      <div class="txt">
        <Vue3Marquee style="color: white">
          {{ musicItem.name }}
        </Vue3Marquee>
        <span class="author" v-for="item in musicItem.ar" :key="item">
          {{ item.name }}
          {{ musicItem.ar.length > 1 ? "&nbsp;&nbsp;/&nbsp;&nbsp;" : "" }}
        </span>
      </div>
      <div class="share"><van-icon name="share-o" /></div>
    </div>
    <div class="content" v-show="isShowLyric">
      <img
        src="@/assets/needle-ab.png"
        alt=""
        class="img_needle-ab"
        :class="!isbtnShow ? 'img_needle-playing' : 'img_needle - ab'"
      />
      <img src="@/assets/outerBack.png" alt="" class="img_outerBack" />
      <img
        :src="musicItem.al.picUrl"
        alt=""
        class="picUrl"
        :class="{ picUrl_playing: !isbtnShow, picUrl_pauesd: isbtnShow }"
      />
    </div>
    <div class="musicLyric">
      <!-- {{ lyricList ? lyricList.lyric : "" }}111111111111{{ lyricFunc }} -->
      <p v-for="item in lyricFunc" :key="item">
        {{ item.lrc }}
      </p>
    </div>
    <div class="bottom">
      <div class="icon_nav">
        <van-icon name="like-o" />
        <van-icon name="upgrade" style="transform: rotate(180deg)" />
        <van-icon name="chat-o" />
        <van-icon name="link-o" />
        <van-icon name="ellipsis" style="transform: rotate(90deg)" />
      </div>

      <div class="progressBar"></div>
      <div class="cut">
        <van-icon name="revoke" />
        <van-icon name="down" style="transform: rotate(90deg)" />
        <van-icon
          v-if="isbtnShow"
          name="play-circle-o"
          style="font-size: 0.7rem"
          @click.stop="isPlayMusic"
        />
        <van-icon
          name="pause-circle-o"
          v-else
          style="font-size: 0.7rem"
          @click.stop="isPlayMusic"
        />

        <van-icon name="down" style="transform: rotate(-90deg)" />
        <van-icon name="ellipsis" />
      </div>
    </div>
  </div>
</template>

<script>
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      isShowLyric: false,
    };
  },
  computed: {
    ...mapState(["lyricList"]),
    lyricFunc() {
      let arr = [];
      if (this.lyricList.lyric) {
        arr = this.lyricList.lyric.split(/[(\r\n)\r\n]+/).map((item) => {
          const min = item.slice(1, 3);
          const sec = item.slice(4, 6);
          let mill = item.slice(7, 10);
          let lrc = item.slice(11);
          let time = parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + mill;
          if (isNaN(Number(mill))) {
            mill = item.slice(7, 9);
            lrc = item.slice(10, item.length);
            time = parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + mill;
          }
          console.log(min, sec, mill, lrc);
          return { min, sec, mill, lrc, time };
        });
      }
      console.log(arr);
      return arr;
    },
  },
  components: { Vue3Marquee },
  mounted() {},
  props: ["musicItem", "isbtnShow", "isPlayMusic"],
  methods: {
    ...mapMutations(["detailShow"]),
  },
};
</script>

<style scoped>
.musicLyric {
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  overflow: scroll;
}
.musicLyric p {
  color: rgb(190, 181, 181);
  margin-bottom: 0.4rem;
}
.icon_nav,
.cut {
  line-height: 1rem;
  height: 1rem;
  display: flex;
  color: white;
  font-size: 0.4rem;
  width: 85%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
}
.content {
  width: 100%;
  height: 9rem;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.img_needle-ab {
  width: 2rem;
  height: 3rem;
  position: absolute;
  left: 46%;
  transform-origin: 0 0;
  transform: rotate(-15deg);
  transition: all 2s;
}
.img_needle-playing {
  width: 2rem;
  height: 3rem;
  position: absolute;
  left: 46%;
  transform-origin: 0 0;
  transform: rotate(0deg);
  transition: all 2s;
}
.img_outerBack {
  width: 5rem;
  height: 5rem;
  position: absolute;
  bottom: 2.3rem;
  z-index: -1;
  left: 15%;
}
.picUrl {
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  bottom: 3.15rem;
  position: absolute;
  left: 27%;
  animation: rotate 10s linear infinite;
}
.picUrl_playing {
  animation-play-state: running;
}
.picUrl_pauesd {
  animation-play-state: paused;
}
@keyframes rotate {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
.author {
  color: #ccc;
  display: block;
  width: 100%;
  text-align: center;
  font-size: 0.24rem;
  margin-top: 0.1rem;
}
.bgImg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(70px);
}
.txt {
  width: 3rem;
  margin-top: 0.3rem;
}
.title {
  margin: 0 auto;
  width: 90%;
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
}
</style>
