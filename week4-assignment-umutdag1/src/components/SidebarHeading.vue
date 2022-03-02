<template>
  <div class="sidebar-heading">{{heading.textContent}}</div>
</template>

<script>
export default {
  props : {
    heading : {
      type : Object,
      required : false,
      default : rawProps => rawProps
    }
  },
  name: "SidebarHeading",
};
</script>

<style scoped>
</style>