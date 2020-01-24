<template>
  <div>
    <div v-for="planet in planets" v-bind:key="planet.id">
      <router-link :to="'/planetDetails/' + planet.id">
        {{ planet.info.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "planet",
  // What the component expects as parameters
  props: ["planets"]
};
</script>
