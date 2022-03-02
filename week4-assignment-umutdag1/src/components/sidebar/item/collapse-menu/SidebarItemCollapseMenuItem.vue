<template>
  <h6 class="collapse-header">{{ items.header }}</h6>
  <a
    class="collapse-item"
    v-for="(item, index) in items.items"
    :key="index"
    :href="item.href"
  >
    {{ item.textContent }}
  </a>
</template>
<script>
export default {
  name: "SidebarItemCollapseMenuItem",
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>