<template>
  <div class="home">
    <div class="top">
      <TopNav></TopNav>
      <SwiperView></SwiperView>
    </div>
    <NavList></NavList>
    <RecommendedPlaylist></RecommendedPlaylist>
  </div>
</template>

<script>
import NavList from "@/components/home/NavList.vue";
import TopNav from "@/components/home/TopNav.vue";
import SwiperView from "@/components/home/SwiperView.vue";
import RecommendedPlaylist from "@/components/home/RecommendedPlaylist.vue";
export default {
  name: "HomeView",
  components: {
    TopNav,
    SwiperView,
    NavList,
    RecommendedPlaylist,
  },
};
</script>

<style scoped>
.top {
  /* 基础线性渐变，从上到下 */
  background: linear-gradient(pink, white);

  /* 对角线渐变 */
  background: linear-gradient(to bottom, white, pink);

  /* 设置渐变角度 */
  background: linear-gradient(180deg, pink, white);
}
</style>
