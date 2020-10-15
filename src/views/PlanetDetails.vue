<template>
  <div>
    <p>Name: {{ planet.name }}</p>
    <p>Diameter: {{ planet.diameter }}</p>
    <p>Rotation_period: {{ planet.rotation_period }}</p>
    <p>Orbital_period: {{ planet.orbital_period }}</p>
    <p>Gravity: {{ planet.gravity }}</p>
    <p>Population: {{ planet.population }}</p>
    <p>Climate: {{ planet.climate }}</p>
    <p>Terrain: {{ planet.terrain }}</p>
    <p>Surface_water: {{ planet.surface_water }}</p>
    <p v-if="planet.residents.length>=1">
      Residents:
      <character :characterURLs="planet.residents"></character>
    </p>
    <p v-if="! planet.residents.length >= 1">Residents: none</p>
    <p>Films: <film :filmURLs="planet.films"></film></p>
  </div>
</template>

<script>
import Character from "../components/Character";
import Film from "../components/Film";

export default {
  name: "planetDetails",
  components: {
    Character,
    Film
  },
  computed: {
    planet() {
      return this.$store.getters.findPlanetByURL(
        "http://swapi.dev/api/planets/" + this.$route.params.planetId + "/"
      );
    }
  }
};
</script>
