<template>
  <div>
    <!-- Display all films, if no URLs are passed into this component -->
    <div v-if="filmURLs == null || filmURLs.length == 0">
      <div v-for="film in $store.state.films" v-bind:key="film.id">
        <!-- 
            * Client Side Filter
            * Display corresponding film, if film title or opening_crawl contains input keyword.
        -->
        <div
          v-if="
              (searchKeyword == null ||
                searchKeyword == '' ||
                film.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                film.opening_crawl.toLowerCase().includes(searchKeyword.toLowerCase() )
                && (filmURLs.length == 0)
                )"
        >
          <router-link :to="'/filmDetails/' + film.title">{{ film.title }}</router-link>
        </div>
      </div>
    </div>

    <!-- Display corresponding, if URLs passed into this component -->
    <div v-else>
      <div v-for="filmURL in filmURLs" v-bind:key="filmURL.id">
        <router-link :to="'/filmDetails/' + getFilm(filmURL).title">{{ getFilm(filmURL).title }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "film",
  props: ["searchKeyword", "filmURLs"],
  methods: {
    getFilm(filmURL) {
      return this.$store.getters.findFilmByURL(filmURL);
    }
  }
};
</script>
