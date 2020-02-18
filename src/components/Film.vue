<template>
  <div>
    <div v-for="film in $store.state.films" v-bind:key="film.id">
      <!-- 
        * Client Side Filter
        * Display film titles, if film title or opening_crawl contains input keyword.
        * Display all film, if input keyword is null or empty string.
       -->
      <div
        v-if="
          search_item == null ||
            search_item == '' ||
            film.title.toLowerCase().includes(search_item.toLowerCase()) ||
            film.opening_crawl.toLowerCase().includes(search_item.toLowerCase())
        "
      >
        <router-link :to="'/filmDetails/' + film.title">
          {{ film.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "film",
  // What the component expects as parameters
  props: ["search_item"]
};
</script>
