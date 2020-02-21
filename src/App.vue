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
  methods: {
    // fetchCharacters() {
    //   axios
    //     .get("https://swapi.co/api/people/", {
    //       headers: { "Content-Type": "application/json" }
    //     })
    //     .then(response => {
    //       // element["id"] = id;
    //       element["info"] = response.data;
    //       store.state.characters.push("test");
    //     });
    // }
  },
  async created() {
    // * Fetch all films from api.
    this.$store.dispatch('getFilms');

    store.state.characters = (
      await axios.get("https://swapi.co/api/people/")
    ).data.results;
    // fetchCharacters();
  }
};
</script>