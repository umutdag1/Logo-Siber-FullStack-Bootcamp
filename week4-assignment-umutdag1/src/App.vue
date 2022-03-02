<template>
  <div id="wrapper">
    <TheSidebar />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <TheNavbar />
        <TheContent />
      </div>
    </div>
  </div>
</template>

<script>
import TheSidebar from "./components/TheSidebar.vue";
import TheNavbar from "./components/TheNavbar.vue";
import TheContent from "./components/TheContent.vue";

export default {
  name: "App",
  components: {
    TheSidebar,
    TheNavbar,
    TheContent
  },
};
</script>

<style>
</style>
