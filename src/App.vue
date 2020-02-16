<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Film List</router-link>
    </div>
    {{ "Film:" + $store.state.films }}
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
    // * Wrap film id and film info individually into films[]
    store.state.films = (
      await axios.get("https://swapi.co/api/films/").then(response => {
        for (let i = 0; i < response.data.results.length; i++) {
          let element = {};
          //Extract film id from url.
          element["id"] = response.data.results[i].url.split("/")[5];
          element["info"] = response.data.results[i];
          this.$store.state.films.push(element);
        }
      })
    ).data;
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
