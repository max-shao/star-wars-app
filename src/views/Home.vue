<template>
  <div class="home">
    <input type="text" id="search_input" />
    <button v-on:click="searchHandler()">search</button>
    <film :films="films" :search_item="search_item"></film>
  </div>
</template>

<script>
import axios from "axios";
import Film from "../components/Film";

export default {
  name: "home",
  data: function() {
    return {
      // parameter of Film component; contains all film id and film info.
      films: [],
      // parameter of Film component; contains input search keyword.
      search_item: ""
    };
  },
  components: {
    Film
  },
  methods: {
    // * getFilms()
    // * Fetch all films from api.
    // * Wrap film id and film info individually into films[]
    getFilms() {
      axios.get("https://swapi.co/api/films/").then(response => {
        for (let i = 0; i < response.data.results.length; i++) {
          let element = {};
          //Extract film id from url.
          element["id"] = response.data.results[i].url.split("/")[5];
          element["info"] = response.data.results[i];
          this.films.push(element);
        }
      });
    },
    searchHandler() {
      let keyWord = document.getElementById("search_input").value;
      this.search_item = String(keyWord);
    }
  },
  mounted() {
    this.getFilms();
  }
};
</script>
