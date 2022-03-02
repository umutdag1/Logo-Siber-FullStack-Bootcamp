<template>
  <nav
    class="
      navbar navbar-expand navbar-light
      bg-white
      topbar
      mb-4
      static-top
      shadow
    "
  >
    <!-- Sidebar Toggle (Topbar) -->
    <NavbarTopbarSidebarToggler/>

    <!-- Topbar Search -->
    <NavbarTopbarSearch/>

    <!-- Topbar Navbar -->
    <NavbarTopbarNav/>
  </nav>
</template>

<script>
import NavbarTopbarSearch from "../navbar/topbar/NavbarTopbarSearch.vue";
import NavbarTopbarSidebarToggler from "../navbar/topbar/NavbarTopbarSidebarToggler.vue";
import NavbarTopbarNav from "../navbar/topbar/NavbarTopbarNav.vue";

export default {
    name: "TheNavbar",
    components: {
    NavbarTopbarSearch,
    NavbarTopbarSidebarToggler,
    NavbarTopbarNav
}
};
</script>

<style scoped>
</style>