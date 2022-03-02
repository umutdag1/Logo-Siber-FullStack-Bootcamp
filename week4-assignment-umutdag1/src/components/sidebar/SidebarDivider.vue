<template>
  <hr class="sidebar-divider" :class="divider.class" />
</template>

<script>
export default {
  props : {
    divider : {
      type : Object,
      required : false,
      default : rawProps => rawProps
    }
  },
  name: "SidebarDivider",
};
</script>

<style scoped>
</style>