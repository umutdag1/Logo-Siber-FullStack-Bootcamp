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
import NavbarTopbarSearch from "./NavbarTopbarSearch.vue";
import NavbarTopbarSidebarToggler from "./NavbarTopbarSidebarToggler.vue";
import NavbarTopbarNav from "./NavbarTopbarNav.vue";

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