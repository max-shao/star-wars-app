import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    films: [],
    characters: []
  },
  getters: {
    films: state => state.films.map(f => ({ ...f, id: f.url.split("/")[5] })),

    findFilm: state => title => state.films.find(f => f.title == title),

    findCharacter: state => url => state.characters.find(c => c.url == url),

    isLoaded: state => !!state.films.length
  },
  mutations: {
    setFilms(state, films) {
      state.films = films;
    },
    setCharacters(state, characters) {
      state.characters = characters;
    }
  },
  actions: {
    async getFilms(context) {
      const films = (await axios.get("https://swapi.co/api/films/")).data.results;
      context.commit('setFilms', films);
    },
    async getCharacters(context) {
      const characters = (await axios.get("https://swapi.co/api/people/")).data.results;
      context.commit('setCharacters', characters);
    }
  }
});
