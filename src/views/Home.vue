<template>
  <div class="home">
    <input type="text" id="search_input" />
    <button v-on:click="searchHandler()">search</button>
    <v-container v-if="!$store.getters.isLoaded">
      <v-progress-circular :size="60" indeterminate></v-progress-circular>
    </v-container>
    <film :search_item="search_item"></film>
  </div>
</template>

<script>
import Film from "../components/Film";
import { mapState } from "vuex";

export default {
  name: "home",
  data: function() {
    return {
      // parameter of Film component; contains input search keyword.
      search_item: ""
    };
  },
  computed: mapState({
    films: state => state.films
  }),
  components: {
    Film
  },
  methods: {
    searchHandler() {
      let keyWord = document.getElementById("search_input").value;
      this.search_item = String(keyWord);
    }
  }
};
</script>
