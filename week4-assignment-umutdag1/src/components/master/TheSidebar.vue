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
    <SidebarItemCollapseMenu :collapseMenu="collapseMenu[0]" />

    <!-- Nav Item - Utilities Collapse Menu -->
    <SidebarItemCollapseMenu :collapseMenu="collapseMenu[1]" />

    <!-- Divider -->
    <SidebarDivider />

    <!-- Heading -->
    <SidebarHeading :heading="heading[1]" />
    <!-- <div class="sidebar-heading">Addons</div> -->

    <!-- Nav Item - Pages Collapse Menu -->
    <SidebarItemCollapseMenu :collapseMenu="collapseMenu[2]" />
 
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
import SidebarDivider from "../sidebar/SidebarDivider.vue";

/* In Order */
import SidebarBrand from "../sidebar/SidebarBrand.vue";
import SidebarDashboard from "../sidebar/SidebarDashboard.vue";
import SidebarHeading from "../sidebar/SidebarHeading.vue";
import SidebarItemCollapseMenu from "../sidebar/item/collapse-menu/SidebarItemCollapseMenu.vue";
import SidebarItemCharts from "../sidebar/item/SidebarItemCharts.vue";
import SidebarItemTables from "../sidebar/item/SidebarItemTables.vue";
import SidebarToggler from "../sidebar/SidebarToggler.vue";
import SidebarMessage from "../sidebar/SidebarMessage.vue";

export default {
  name: "TheSidebar",
  data() {
    return {
      divider: [{ class: "my-0" }],
      heading: [{ textContent: "Interface" }, { textContent: "Addons" }],
      collapseMenu: [
        {
          textContent: "Components",
          target: "collapseTwo",
          icon: "fas fa-fw fa-cog",
        },
        {
          textContent: "Utilities",
          target: "collapseUtilities",
          icon: "fas fa-fw fa-wrench",
        },
        {
          textContent: "Pages",
          target: "collapsePages",
          icon: "fas fa-fw fa-folder",
        },
      ],
    };
  },
  components: {
    SidebarDivider,
    SidebarBrand,
    SidebarDashboard,
    SidebarHeading,
    SidebarItemCollapseMenu,
    SidebarItemCharts,
    SidebarItemTables,
    SidebarToggler,
    SidebarMessage,
  },
};
</script>

<style scoped>
</style>