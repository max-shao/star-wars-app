<template>
  <div>
    <div v-for="character in characters" v-bind:key="character.url">
      {{ "name: " + character.url }}
      <!-- <router-link :to="'/characterDetails/' + character.name">
        {{ character.name }}
      </router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "character",
  // What the component expects as parameters
  props: ["characters"]
};
</script>
