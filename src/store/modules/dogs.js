import axios from "axios"
import { getDataFromUrl } from "@/utils"

export default {
  namespaced: true,
  state: () => ({
    dogsList: [],
    dogsFavouriteList: [],
    dogsTags: [],
    dogsSelectedTags: [],
  }),
  mutations: {
    addDogs(state, dogs) {
      // const uniqueDogs = dogs.filter((value) => !~state.dogsList.indexOf(value));
      const dosgData = dogs.map(dog => getDataFromUrl(dog));
      state.dogsList.push(...dosgData);
    },
    addToFavourites(state, dog) {
      if(!~state.dogsFavouriteList.findIndex(fawDog => fawDog.url === dog.url)) state.dogsFavouriteList.push(dog);
    },
    removeFromFavourites(state, dog) {
      const filteredDogs = state.dogsFavouriteList.filter(fawDog => fawDog.url !== dog.url);
      state.dogsFavouriteList = filteredDogs;
    },
  },
  actions: {
    async loadDogs({ commit }, amount = 20) {
      try {
        const { data: { message: dogs } } = await axios.get(`https://dog.ceo/api/breeds/image/random/${amount}`);
        commit('addDogs', dogs);
      } catch(err) {
        console.log(err);
      }
    },
    async addToFavourites({ commit }, dog) {
      try {
        commit('addToFavourites', dog);
      } catch(err) {
        console.log(err);
      }
    },
    async removeFromFavourites({ commit }, dog) {
      try {
        commit('removeFromFavourites', dog);
      } catch(err) {
        console.log(err);
      }
    },
  },
  getters: {
    dogsList: state => state.dogsList,
    dogsFavouriteList: state => state.dogsFavouriteList,
  },
};
