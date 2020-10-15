<template>
  <div>
    <p>Name: {{ character.name }}</p>
    <p>Birth Year: {{ character.birth_year }}</p>
    <p>Eye Color: {{ character.eye_color }}</p>
    <p>Height: {{ character.height }}</p>
    <p>Mass: {{ character.mass }}</p>
    <p>Skin Color: {{ character.skin_color }}</p>
    <p>Homeworld:<planet :planetURLs="character.homeworld"></planet></p>
    <p>Films:<film :filmURLs="character.films"></film></p>
  </div>
</template>

<script>
import Planet from "../components/Planet";
import Film from "../components/Film";

export default {
  name: "characterDetails",
  computed: {
    character() {
      return this.$store.getters.findCharacterByURL("http://swapi.dev/api/people/" + this.$route.params.characterID + "/");
    }
  },
  components: {
    Planet,
    Film
  }
};
</script>
