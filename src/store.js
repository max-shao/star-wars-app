import Vue from "vue";
import Vuex from "vuex";

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
  }
});
