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
import NavbarNavDivider from "./nav/NavbarNavDivider.vue";

/* In Order */
import NavbarNavItemSearchDropdown from "./nav/item/NavbarNavItemSearchDropdown.vue";
import NavbarNavItemAlerts from "./nav/item/NavbarNavItemAlerts.vue";
import NavbarNavItemMessages from "./nav/item/messages/NavbarNavItemMessages.vue";
import NavbarNavItemUserInformation from "./nav/item/user-information/NavbarNavItemUserInformation.vue";

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