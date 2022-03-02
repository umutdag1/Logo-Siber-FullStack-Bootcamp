<template>
  <div id="wrapper">
    <TheSidebar />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <TheNavbar />
        <TheContent />
	<TheFooter />
      </div>
    </div>
  </div>
</template>

<script>
import TheSidebar from "./components/master/TheSidebar.vue";
import TheNavbar from "./components/master/TheNavbar.vue";
import TheContent from "./components/master/TheContent.vue";
import TheContent from "./components/master/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheSidebar,
    TheNavbar,
    TheContent,
    TheFooter
  },
};
</script>

<style>
</style>
