<template>
  <div class="resume">
    <FonctionBar />
    <SectionBar />
    <WorkingBox />
  </div>
</template>

<script>
import SectionBar from "@components/SectionBar";
import WorkingBox from "@components/WorkingBox";
import FonctionBar from "@components/FonctionBar.vue";

export default {
  name: "App",
  components: {
    FonctionBar,
    SectionBar,
    WorkingBox,
  },
};
</script>

<style lang="scss">
.resume {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: stretch;
  align-items: stretch;
  min-height: 100vh;
  max-height: 100vh;
}
</style>
