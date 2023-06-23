<template>
  <div>
    <DetailsView :playlist="state.playlist"></DetailsView>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { getSongDetailsList } from "@/api/songDetails";
import DetailsView from "@/components/songDetails/DetailsView.vue";
export default {
  setup() {
    const state = reactive({
      playlist: {},
    });
    onMounted(async () => {
      let id = useRoute().query.id;
      let res = await getSongDetailsList(id);
      state.playlist = res.data.playlist;
      //   sessionStorage.setItem("detailItem", JSON.stringify(state));
    });
    return { state };
  },
  components: {
    DetailsView,
  },
};
</script>

<style></style>
