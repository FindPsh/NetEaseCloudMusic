<template>
  <div class="nav">
    <div class="iconItem">
      <van-icon name="fire-o" class="icon" />
      <span>每日推荐</span>
    </div>
    <div class="iconItem">
      <van-icon name="fire-o" class="icon" />
      <span>私人漫游</span>
    </div>
    <div class="iconItem">
      <van-icon name="fire-o" class="icon" />
      <span>歌单</span>
    </div>
    <div class="iconItem">
      <van-icon name="fire-o" class="icon" />
      <span>排行榜</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 1.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.iconItem {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.iconItem span {
  margin-top: 0.1rem;
}
.icon {
  /* width: 1rem;
  height: 1rem; */
}
</style>
