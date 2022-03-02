<template>
  <ul class="navbar-nav ml-auto">
    <!-- Nav Item - Search Dropdown (Visible Only XS) -->
    <NavbarNavItemSearchDropdown />

    <!-- Nav Item - Alerts -->
    <NavbarNavItemAlerts />

    <!-- Nav Item - Messages -->
    <NavbarNavItemMessages />

    <NavbarNavDivider />

    <!-- Nav Item - User Information -->
    <NavbarNavItemUserInformation />
  </ul>
</template>

<script>
/* Out Order */
import NavbarNavDivider from "./NavbarNavDivider.vue";

/* In Order */
import NavbarNavItemSearchDropdown from "./NavbarNavItemSearchDropdown.vue";
import NavbarNavItemAlerts from "./NavbarNavItemAlerts.vue";
import NavbarNavItemMessages from "./NavbarNavItemMessages.vue";
import NavbarNavItemUserInformation from "./NavbarNavItemUserInformation.vue";

export default {
  name: "NavbarTopbarNav",
  components: {
    NavbarNavDivider,
    NavbarNavItemSearchDropdown,
    NavbarNavItemAlerts,
    NavbarNavItemMessages,
    NavbarNavItemUserInformation,
  },
};
</script>

<style scoped>
</style>