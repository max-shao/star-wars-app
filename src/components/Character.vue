<template>
  <div>
    <div v-for="character in characters" v-bind:key="character.id">
      <router-link :to="'/characterDetails/' + character.id">
        {{ character.info.name }}
      </router-link>
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
