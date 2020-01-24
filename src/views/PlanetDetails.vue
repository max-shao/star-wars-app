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
    <p>Residents: <character :characters="residents"></character></p>
    <p>Films: <film :films="films"></film></p>
  </div>
</template>

<script>
import axios from "axios";
import Character from "../components/Character";
import Film from "../components/Film";

export default {
  name: "planetDetails",
  data: function() {
    return {
      planet: {},
      // parameter of Character component; contains all character id and character info.
      residents: [],
      // parameter of Film component; contains all film id and film info.
      films: []
    };
  },
  components: {
    Character,
    Film
  },
  methods: {
    // * getPlanetDetails()
    // * Fetch planet according to the planet id.
    // * Store all the info about this planet into planet{}
    // * Wrap character id and character info individually into residents[]
    // * Wrap film id and film info individually into films[]
    getPlanetDetails() {
      const id = this.$route.params.planetId;
      axios
        .get(`https://swapi.co/api/planets/${id}`, {
          headers: { "Content-Type": "application/json" }
        })
        .then(response => {
          this.planet = response.data;

          //fetch residents data
          for (let i = 0; i < response.data.residents.length; i++) {
            let id = response.data.residents[i].split("/")[5];
            let element = {};
            axios
              .get(`https://swapi.co/api/people/${id}`, {
                headers: { "Content-Type": "application/json" }
              })
              .then(response => {
                element["id"] = id;
                element["info"] = response.data;
                this.residents.push(element);
              });
          }

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
    this.getPlanetDetails();
  }
};
</script>
