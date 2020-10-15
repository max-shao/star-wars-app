import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    films: [],
    characters: [],
    planets: []
  },
  getters: {
    films: state => state.films.map(f => ({ ...f, id: f.url.split("/")[5] })),

    findFilmByTitle: state => title => state.films.find(f => f.title == title),

    findFilmByURL: state => url => state.films.find(f => f.url == url),

    findCharacterByURL: state => url => state.characters.find(c => c.url == url),

    findPlanetByURL: state => url => state.planets.find(p => p.url == url),

    filmsLoaded: state => !!state.films.length 
  },
  mutations: {
    setFilms(state, films) {
      state.films = films;
    },
    setCharacters(state, characters) {
      state.characters = characters;
    },
    setPlanets(state, planets) {
      state.planets = planets;
    },
    addCharacters(state, characters) {
      state.characters = [...state.characters, ...characters];
    },
    addPlanets(state, planets) {
      state.planets = [...state.planets, ...planets];
    }
  },
  actions: {
    // Fetch all films from swapi.
    async getFilms(context) {
      const films = (await axios.get("https://swapi.dev/api/films/")).data.results;
      context.commit('setFilms', films);
    },
    // Fetch all Characters from swapi.
    async getCharacters(context) {
      let currentPage = (await axios.get("https://swapi.dev/api/people/")).data;
      context.commit('setCharacters', currentPage.results);
      let hasNext = currentPage.hasOwnProperty('next');
      while (hasNext) {
        currentPage = (await axios.get(currentPage.next)).data;
        context.commit('addCharacters', currentPage.results);
        hasNext = currentPage.hasOwnProperty('next');
      }
    },
    // Fetch all Planets from swapi.
    async getPlanets(context) {
      let currentPage = (await axios.get("https://swapi.dev/api/planets/")).data;
      context.commit('setPlanets', currentPage.results);
      let hasNext = currentPage.hasOwnProperty('next');
      while (hasNext) {
        currentPage = (await axios.get(currentPage.next)).data;
        context.commit('addPlanets', currentPage.results);
        hasNext = currentPage.hasOwnProperty('next');
      }
    }
  }
});
