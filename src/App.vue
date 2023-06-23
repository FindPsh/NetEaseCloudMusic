<template>
  <router-view />
  <FooterMusic />
</template>
<script>
import FooterMusic from "@/components/songDetails/FooterMusic.vue";
export default {
  components: {
    FooterMusic,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.icon {
  width: 0.4rem;
  height: 0.4rem;
}
a {
  color: black;
}
</style>
