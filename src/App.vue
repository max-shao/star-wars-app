<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Film List</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import store from "./store.js";

export default {
  name: "App",
  created() {
    store.dispatch('getFilms');
    store.dispatch('getCharacters');
    store.dispatch('getPlanets');
  }
};
</script>