<template>
  <div id="app">
		<h1>{{this.$root.meng}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

#app {
  height: 100vh;
}
</style>
