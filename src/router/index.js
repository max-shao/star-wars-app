import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import FilmDetails from "../views/FilmDetails.vue";
import CharacterDetails from "../views/CharacterDetails.vue";
import PlanetDetails from "../views/PlanetDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/filmDetails/:id",
    name: "filmDetails",
    component: FilmDetails,
    props: {
      id: {
        default: 1
      }
    }
  },
  {
    path: "/characterDetails/:characterId",
    name: "characterDetails",
    component: CharacterDetails
  },
  {
    path: "/planetDetails/:planetId",
    name: "planetDetails",
    component: PlanetDetails
  }
];

const router = new VueRouter({
  routes
});

export default router;
