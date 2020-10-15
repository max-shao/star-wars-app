<template>
  <div>
    <!-- Run when only one String URL passed in  -->
    <div v-if="typeof planetURLs === 'string'">
      <router-link
        :to="'/planetDetails/' + planetURLs.match(/\d+/g)"
      >{{ getPlanetName(planetURLs) }}</router-link>
    </div>

    <!-- Run when an array of URLs passed in  -->
    <div v-else>
      <div v-for="planetURL in planetURLs" v-bind:key="planetURL.id">
        <router-link
          :to="'/planetDetails/' + planetURL.match(/\d+/g)"
        >{{ getPlanetName(planetURL) }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "planet",
  props: ["planetURLs"],
  methods: {
    getPlanetName(planetURL) {
      return this.$store.getters.findPlanetByURL(planetURL).name;
    }
  }
};
</script>
