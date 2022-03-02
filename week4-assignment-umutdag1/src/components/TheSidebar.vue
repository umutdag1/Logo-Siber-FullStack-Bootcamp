<template>
  <ul
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    <SidebarBrand />

    <!-- Divider -->
    <SidebarDivider :divider="divider[0]" />

    <!-- Nav Item - Dashboard -->
    <SidebarDashboard />

    <!-- Divider -->
    <SidebarDivider />

    <!-- Heading -->
    <SidebarHeading :heading="heading[0]" />

    <!-- Nav Item - Pages Collapse Menu -->
    <SidebarItemCollapsePagesMenu />

    <!-- Nav Item - Utilities Collapse Menu -->
    <SidebarItemCollapseUtilitiesMenu />

    <!-- Divider -->
    <SidebarDivider />

    <!-- Heading -->
    <SidebarHeading :heading="heading[1]"/>
    <!-- <div class="sidebar-heading">Addons</div> -->

    <!-- Nav Item - Pages Collapse Menu -->
    <SidebarItemCollapsePagesMenu />
    <!-- <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapsePages"
        aria-expanded="true"
        aria-controls="collapsePages"
      >
        <i class="fas fa-fw fa-folder"></i>
        <span>Pages</span>
      </a>
      <div
        id="collapsePages"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Login Screens:</h6>
          <a class="collapse-item" href="login.html">Login</a>
          <a class="collapse-item" href="register.html">Register</a>
          <a class="collapse-item" href="forgot-password.html"
            >Forgot Password</a
          >
          <div class="collapse-divider"></div>
          <h6 class="collapse-header">Other Pages:</h6>
          <a class="collapse-item" href="404.html">404 Page</a>
          <a class="collapse-item" href="blank.html">Blank Page</a>
        </div>
      </div>
    </li> -->

    <!-- Nav Item - Charts -->
    <SidebarItemCharts />

    <!-- Nav Item - Tables -->
    <SidebarItemTables />

    <!-- Divider -->
    <SidebarDivider />
    <!-- <hr class="sidebar-divider d-none d-md-block" /> -->

    <!-- Sidebar Toggler (Sidebar) -->
    <SidebarToggler />

    <!-- Sidebar Message -->
    <SidebarMessage />
  </ul>
</template>

<script>
/* Out Order */
import SidebarDivider from "./SidebarDivider.vue";

/* In Order */
import SidebarBrand from "./SidebarBrand.vue";
import SidebarDashboard from "./SidebarDashboard.vue";
import SidebarHeading from "./SidebarHeading.vue";
import SidebarItemCollapsePagesMenu from "./SidebarItemCollapsePagesMenu.vue";
import SidebarItemCollapseUtilitiesMenu from "./SidebarItemCollapseUtilitiesMenu.vue";
import SidebarItemCharts from "./SidebarItemCharts.vue";
import SidebarItemTables from "./SidebarItemTables.vue";
import SidebarToggler from "./SidebarToggler.vue";
import SidebarMessage from "./SidebarMessage.vue";

export default {
  name: "TheSidebar",
  data() {
    return {
      divider: [
        {
          class: "my-0",
        },
      ],
      heading: [
        {
          textContent: "Interface",
        },
        {
          textContent: "Addons",
        },
      ],
    };
  },
  components: {
    SidebarDivider,
    SidebarBrand,
    SidebarDashboard,
    SidebarHeading,
    SidebarItemCollapsePagesMenu,
    SidebarItemCollapseUtilitiesMenu,
    SidebarItemCharts,
    SidebarItemTables,
    SidebarToggler,
    SidebarMessage,
  },
};
</script>

<style scoped>
</style>