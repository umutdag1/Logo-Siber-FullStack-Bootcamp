<template>
  <li class="nav-item dropdown no-arrow mx-1">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      id="messagesDropdown"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <i class="fas fa-envelope fa-fw"></i>
      <!-- Counter - Messages -->
      <NavbarNavItemMesssagesCounter />
    </a>
    <!-- Dropdown - Messages -->
    <NavbarNavItemMessagesDropdown />
  </li>
</template>

<script>
import NavbarNavItemMesssagesCounter from "./NavbarNavItemMesssagesCounter.vue";
import NavbarNavItemMessagesDropdown from "./NavbarNavItemMessagesDropdown.vue";
export default {
  name: "NavbarNavItemMessages",
  components: {
    NavbarNavItemMesssagesCounter,
    NavbarNavItemMessagesDropdown,
  },
};
</script>

<style scoped>
</style>