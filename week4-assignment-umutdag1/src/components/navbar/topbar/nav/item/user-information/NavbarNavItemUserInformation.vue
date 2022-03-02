<template>
  <li class="nav-item dropdown no-arrow">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      id="userDropdown"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span class="mr-2 d-none d-lg-inline text-gray-600 small"
        >Douglas McGee</span
      >
      <img
        class="img-profile rounded-circle"
        src="/img/undraw_profile.svg"
      />
    </a>
    <!-- Dropdown - User Information -->
    <NavbarNavItemUserInformationDropdown />
  </li>
</template>

<script>
import NavbarNavItemUserInformationDropdown from "./NavbarNavItemUserInformationDropdown.vue";

export default {
  name: "NavbarNavItemUserInformation",
  components: {
    NavbarNavItemUserInformationDropdown,
  },
};
</script>

<style scoped>
</style>