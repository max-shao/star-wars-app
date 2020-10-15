<template>
  <div>
    <v-container v-if="!$store.getters.filmsLoaded">
      <v-progress-circular :size="60" indeterminate></v-progress-circular>
    </v-container>

    <div v-if="$store.getters.filmsLoaded">
      <h3>{{ film.title }}</h3>
      <hr />
      <p>Director: {{ film.director }}</p>
      <p>Producer: {{ film.producer }}</p>
      <p>Release Date: {{ film.release_date }}</p>
      <hr />
      <p>Opening Crawl: {{ film.opening_crawl }}</p>
      <hr />
      <p>Characters ({{ film.characters.length }}) <character :characterURLs="film.characters"></character></p>
      <hr />
      <p>Planets ({{ film.planets.length }}) <planet :planetURLs="film.planets"></planet></p>
    </div>
  </div>
</template>

<script>
import Character from "../components/Character";
import Planet from "../components/Planet";

export default {
  name: "filmDetails",
  computed: {
    film() {
      return this.$store.getters.findFilmByTitle(this.$route.params.FilmTitle);
    }
  },
  components: {
    Character,
    Planet
  }
};
</script>
