<template>
  <div class="nav">
    <div class="nav_icon">
      <van-icon name="ellipsis" />
    </div>
    <div class="topContent">
      <van-search
        placeholder="请输入搜索关键词"
        background="transparent"
        right-icon="scan"
      />
    </div>
    <div class="nav_icon_search">
      <van-icon name="share-o" />
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.active {
  font-weight: 900;
}
.nav {
  width: 100%;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  height: 1rem;
  align-items: center;
}
.topContent {
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: space-around;
  /* align-items: center; */
  font-size: 0.36rem;
}

.topContent >>> .van-search {
  width: 100%;
}
.topContent >>> .van-search__content {
  border-radius: 0.2rem;
}
</style>
