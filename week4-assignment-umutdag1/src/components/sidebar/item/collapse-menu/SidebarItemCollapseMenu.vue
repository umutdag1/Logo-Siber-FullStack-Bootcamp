<template>
  <li class="nav-item">
    <a
      class="nav-link collapsed"
      href="#"
      data-toggle="collapse"
      :data-target="`#${collapseMenu.target}`"
      aria-expanded="true"
      :aria-controls="collapseMenu.target"
    >
      <i :class="collapseMenu.icon"></i>
      <span>{{ collapseMenu.textContent }}</span>
    </a>
    <div
      :id="collapseMenu.target"
      class="collapse"
      data-parent="#accordionSidebar"
    >
      <div class="bg-white py-2 collapse-inner rounded">
        <template v-if="isMenuItemArray(getMenuTextContent(collapseMenu))">
          <SidebarItemCollapseMenuItem
            v-for="(items, index) in getItemsOfMenuItem(
              getMenuTextContent(collapseMenu)
            )"
            :key="index"
            :items="items"
          />
          <SidebarItemCollapseMenuDivider />
        </template>
        <template v-if="isMenuItemObject(getMenuTextContent(collapseMenu))">
          <SidebarItemCollapseMenuItem
            :items="getItemsOfMenuItem(getMenuTextContent(collapseMenu))"
          />
        </template>
      </div>
    </div>
  </li>
</template>

<script>
import SidebarItemCollapseMenuItem from "./SidebarItemCollapseMenuItem.vue";
import SidebarItemCollapseMenuDivider from "./SidebarItemCollapseMenuDivider.vue";

export default {
  name: "SidebarItemCollapsePagesMenu",
  props: {
    collapseMenu: {
      type: Object,
      required: false,
      default: (rawProps) => rawProps,
    },
  },
  data() {
    return {
      menuItems: {
        components: {
          header: "Custom Components:",
          items: [
            {
              textContent: "Buttons",
              href: "buttons.html",
            },
            {
              textContent: "Cards",
              href: "cards.html",
            },
          ],
        },
        utilities: {
          header: "Custom Utilities:",
          items: [
            {
              textContent: "Colors",
              href: "utilities-color.html",
            },
            {
              textContent: "Borders",
              href: "utilities-border.html",
            },
            {
              textContent: "Animations",
              href: "utilities-animation.html",
            },
            {
              textContent: "Other",
              href: "utilities-other.html",
            },
          ],
        },
        pages: [
          {
            header: "Login Screens:",
            items: [
              {
                textContent: "Login",
                href: "login.html",
              },
              {
                textContent: "Register",
                href: "register.html",
              },
              {
                textContent: "Forgot Password",
                href: "forgot-password.html",
              },
              {
                textContent: "Other",
                href: "utilities-other.html",
              },
            ],
          },
          {
            header: "Other Pages:",
            items: [
              {
                textContent: "404 Page",
                href: "404.html",
              },
              {
                textContent: "Blank Page",
                href: "blank.html",
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    isMenuItemArray(item) {
      return Array.isArray(this.menuItems[item]);
    },
    isMenuItemObject(item) {
      return (
        typeof this.menuItems[item] === "object" && !this.isMenuItemArray(item)
      );
    },
    getMenuTextContent(collapseMenu) {
      return collapseMenu.textContent.toLowerCase();
    },
    getItemsOfMenuItem(menuItem) {
      return this.menuItems[menuItem];
    },
  },
  components: {
    SidebarItemCollapseMenuItem,
    SidebarItemCollapseMenuDivider,
  },
};
</script>

<style scoped>
</style>