import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    films: []
  },
  getters: {
    films: state => state.films.map(f => ({ ...f, id: f.url.split("/")[5] }))
  }
});
