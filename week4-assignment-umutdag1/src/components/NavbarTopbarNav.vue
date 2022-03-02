<template>
  <ul class="navbar-nav ml-auto">
    <!-- Nav Item - Search Dropdown (Visible Only XS) -->
    <NavbarNavItemSearchDropdown/>

    <!-- Nav Item - Alerts -->
    <NavbarNavItemAlerts/>

    <!-- Nav Item - Messages -->
    <NavbarNavItemMessages/>

    <NavbarDivider/>

    <!-- Nav Item - User Information -->
    <NavbarNavItemUserInformation/>
  </ul>
</template>

<script>
import NavbarNavItemSearchDropdown from "./NavbarNavItemSearchDropdown.vue";
import NavbarNavItemAlerts from "./NavbarNavItemAlerts.vue";
import NavbarNavItemMessages from "./NavbarNavItemMessages.vue";
import NavbarDivider from "./NavbarDivider.vue";
import NavbarNavItemUserInformation from "./NavbarNavItemUserInformation.vue";

export default {
    name: "NavbarTopbarNav",
    components: {
    NavbarNavItemSearchDropdown,
    NavbarNavItemAlerts,
    NavbarNavItemMessages,
    NavbarDivider,
    NavbarNavItemUserInformation
}
};
</script>

<style scoped>
</style>