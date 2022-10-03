<template>
  <div id="app">
    <h2>{{ i18n.t("welcome") }}</h2>

    <div id="nav" class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, DefineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { i18n } from "./plugins/vue-i18n-next-plugin/index";
export default defineComponent({
  name: "App",
  setup() {
    const i18n = useI18n();

    return {
      i18n,
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  h2 {
    margin: 0;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
