<template>
  <div>
    <v-container v-if="!$store.getters.isLoaded">
      <v-progress-circular :size="60" indeterminate></v-progress-circular>
    </v-container>

    <div v-if="$store.getters.isLoaded">
      <h3>{{ film.title }}</h3>
      <hr />
      <p>Director: {{ film.director }}</p>
      <p>Producer: {{ film.producer }}</p>
      <p>Release Date: {{ film.release_date }}</p>
      <hr />
      <p>Opening Crawl: {{ film.opening_crawl }}</p>
      <hr />
      <p>Characters :<character :characters="characters"></character></p>
      <hr />
      {{ "film.characters[1]: " + film.characters[1] }}
      <hr />
      <!-- {{ "findCharacter(film.characters[1]).name: " + $store.getters.findCharacter(film.characters[1]).name }} -->
      <hr />
      {{ "characters: " + characters.length }}
      {{ "film.characters: " + film.characters.length }}
      <!-- <p>Planets :<planet :planets="planets"></planet></p> -->
    </div>
  </div>
</template>

<script>
import Character from "../components/Character";
// import Planet from "../components/Planet";

export default {
  name: "filmDetails",
  data: function() {
    return {
      // parameter of Character component; contains all character id and character info.
      // characters: [],
      // parameter of Planet component; contains all planet id and planet info.
      // planets: []
    };
  },
  computed: {
    film() {
      return this.$store.getters.findFilm(this.$route.params.FilmTitle);
    },
    characters() {
      // const film = this.$store.getters.findFilm(this.$route.params.FilmTitle);
      const characterList = [];
      characterList.push(this.$store.getters.findCharacter("https://swapi.co/api/people/1/"));
      characterList.push(this.$store.getters.findCharacter("https://swapi.co/api/people/2/"));
      characterList.push(this.$store.getters.findCharacter("https://swapi.co/api/people/3/"));
      characterList.push(this.$store.getters.findCharacter("https://swapi.co/api/people/4/"));
      characterList.push(this.$store.getters.findCharacter("https://swapi.co/api/people/5/"));
      // film.characters.forEach(c => {
      //   characterList.push(this.$store.getters.findCharacter(c));
      //   // console.log(this.$store.getters.findCharacter(c).name);
      // });
      return characterList;
    }
  },
  components: {
    Character
    // Planet
  }
  // methods: {
  //   // * getFilmDetails()
  //   // * Fetch film according to the film id.
  //   // * Store all the info about this film into film{}
  //   // * Wrap chracter id and chracter info individually into chracters[]
  //   // * Wrap planet id and planet info individually into planets[]
  //   getFilmDetails() {
  //     const filmId = this.$route.params.id;
  //     axios
  //       .get(`https://swapi.co/api/films/${filmId}`, {
  //         headers: { "Content-Type": "application/json" }
  //       })
  //       .then(response => {
  //         //fetch film data
  //         this.film = response.data;

  //         //fetch chracter data
  //         // for (let i = 0; i < response.data.characters.length; i++) {
  //         //   let id = response.data.characters[i].split("/")[5];
  //         //   let element = {};
  //         //   axios
  //         //     .get(`https://swapi.co/api/people/${id}`, {
  //         //       headers: { "Content-Type": "application/json" }
  //         //     })
  //         //     .then(response => {
  //         //       element["id"] = id;
  //         //       element["info"] = response.data;
  //         //       this.characters.push(element);
  //         //     });
  //         // }

  //         //fetch planet data
  //         // for (let i = 0; i < response.data.planets.length; i++) {
  //         //   let id = response.data.planets[i].split("/")[5];
  //         //   let element = {};
  //         //   axios
  //         //     .get(`https://swapi.co/api/planets/${id}`, {
  //         //       headers: { "Content-Type": "application/json" }
  //         //     })
  //         //     .then(response => {
  //         //       element["id"] = id;
  //         //       element["info"] = response.data;
  //         //       this.planets.push(element);
  //         //     });
  //         // }
  //       });
  //   }
  // },
  // mounted() {
  //   this.getFilmDetails();
  // }
};
</script>
