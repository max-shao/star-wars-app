<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Film List</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import store from "./store.js";

export default {
  name: "App",
  data() {
    return {};
  },
  async created() {
    // * Fetch all films from api.
    store.state.films = (await axios.get("https://swapi.co/api/films/")).data.results;
    store.state.characters = (await axios.get("https://swapi.co/api/people/")).data.results;
  }
};
</script>