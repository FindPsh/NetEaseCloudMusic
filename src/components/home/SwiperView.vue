<template>
  <div class="swiper">
    <van-swipe :autoplay="3000" lazy-render pagination-active-color="#fff">
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image.pic" />
        <span class="banner_tit">{{ image.typeTitle }}</span>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { getBanner } from "@/api/home";
import { onMounted, ref } from "vue";
export default {
  setup() {
    const images = ref({});
    onMounted(async () => {
      let res = await getBanner();
      images.value = res.data.banners;
    });

    return { images };
  },
};
</script>

<style scoped>
.swiper {
  padding: 0.3rem;
}
.swiper >>> .van-swipe {
  width: 100%;
  border-radius: 0.2rem;
  overflow: hidden;
  position: relative;
}

.swiper >>> .van-swipe-item img {
  width: 100%;
  height: 3rem;
}
.banner_tit {
  display: inline-block;
  height: 0.3rem;
  width: 1.2rem;
  position: absolute;
  bottom: 0.2rem;
  right: 0.8rem;
  background: white;
  border-radius: 0.1rem;
  text-align: center;
  line-height: 0.3rem;
  font-size: 0.2rem;
  padding: 0.04rem;
}

.swiper >>> van-swipe__indicator--active {
  background: white !important;
}
</style>
