/* eslint-disable vue/no-unused-components */
<template>
  <div id="app">
    <Todos />
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";

export default {
  name: "App",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Todos
  }
};
</script>

<style lang="scss"></style>
