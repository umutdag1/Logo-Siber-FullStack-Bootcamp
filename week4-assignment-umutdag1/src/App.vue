<template>
  <div id="wrapper">
    <TheSidebar />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <TheNavbar/>
        <!-- <ContentVue/> -->
      </div>
    </div>
  </div>
</template>

<script>
import TheSidebar from "./components/TheSidebar.vue";
import TheNavbar from "./components/TheNavbar.vue";
//import ContentVue from "./components/master/ContentVue.vue";

export default {
  name: "App",
  components: {
    TheSidebar,
    TheNavbar
},
};
</script>

<style>
</style>
