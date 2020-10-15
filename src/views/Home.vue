<template>
  <div class="home">
    <input type="text" id="search_input" />
    <button v-on:click="searchHandler()">search</button>

    <v-container v-if="!$store.getters.filmsLoaded">
      <v-progress-circular :size="60" indeterminate></v-progress-circular>
    </v-container>

    <film :searchKeyword="searchKeyword"></film>
  </div>
</template>

<script>
import Film from "../components/Film";
export default {
  name: "home",
  data: function() {
    return {
      // parameter of Film component; contains input search keyword.
      searchKeyword: ""
    };
  },
  components: {
    Film
  },
  methods: {
    searchHandler() {
      let keyWord = document.getElementById("search_input").value;
      this.searchKeyword = String(keyWord);
    }
  }
};
</script>
