<template>
  <div>
    <div v-for="characterURL in characterURLs" v-bind:key="characterURL">
      <router-link :to="'/characterDetails/' + characterURL.match(/\d+/g)">
        {{ getCharacterName(characterURL) }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "character",
  // What the component expects as parameters
  props: ["characterURLs"],
  methods: {
    getCharacterName(characterURL) {
      return this.$store.getters.findCharacterByURL(characterURL).name;
    }
  }
};
</script>
