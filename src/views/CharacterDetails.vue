<template>
  <div>
    <p>Name: {{ character.name }}</p>
    <p>Birth Year: {{ character.birth_year }}</p>
    <p>Eye Color: {{ character.eye_color }}</p>
    <p>Height: {{ character.height }}</p>
    <p>Mass: {{ character.mass }}</p>
    <p>Skin Color: {{ character.skin_color }}</p>
    <!-- <p>Homeworld:<planet :planets="homeworld"></planet></p> -->
    <!-- <p>Films:<film :films="films"></film></p> -->
  </div>
</template>

<script>
import axios from "axios";
// import Planet from "../components/Planet";
// import Film from "../components/Film";

export default {
  name: "characterDetails",
  data: function() {
    return {
      character: {},
      // parameter of Planet component; contains homeworld id and homeworld info.
      // homeworld: [],
      // parameter of Film component; contains all film id and film info.
      // films: []
    };
  },
  components: {
    // Planet,
    // Film
  },
  methods: {
    // * getCharacterDetails()
    // * Fetch character according to the character id.
    // * Store all the info about this character into character{}
    // * Wrap homeworld id and homeworld info individually into homeworld[]
    // * Wrap film id and film info individually into films[]
    getCharacterDetails() {
      const id = this.$route.params.characterId;
      axios
        .get(`https://swapi.co/api/people/${id}`, {
          headers: { "Content-Type": "application/json" }
        })
        .then(response => {
          this.character = response.data;

          //fetch homeworld data
          let id = response.data.homeworld.split("/")[5];
          let element = {};
          axios
            .get(`https://swapi.co/api/planets/${id}`, {
              headers: { "Content-Type": "application/json" }
            })
            .then(response => {
              element["id"] = id;
              element["info"] = response.data;
              this.homeworld.push(element);
            });

          //fetch film data
          for (let i = 0; i < response.data.films.length; i++) {
            let id = response.data.films[i].split("/")[5];
            let element = {};
            axios
              .get(`https://swapi.co/api/films/${id}`, {
                headers: { "Content-Type": "application/json" }
              })
              .then(response => {
                element["id"] = id;
                element["info"] = response.data;
                this.films.push(element);
              });
          }
        });
    }
  },
  mounted() {
    this.getCharacterDetails();
  }
};
</script>
