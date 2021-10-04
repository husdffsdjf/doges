import axios from "axios"
import { getDataFromUrl } from "@/utils"

function storeFavourites(data) {
  localStorage.setItem('dogsFavouriteList', JSON.stringify(data));
}

function getStoredFavourites() {
  const data = localStorage.getItem('dogsFavouriteList');
  return JSON.parse(data);
}

let dogsLoading = false;

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
    setFavourites(state, dogs) {
      state.dogsFavouriteList = dogs;
    },
    addToFavourites(state, dog) {
      if(!~state.dogsFavouriteList.findIndex(fawDog => fawDog.url === dog.url)) {
        state.dogsFavouriteList.push(dog);
        storeFavourites(state.dogsFavouriteList);
      }
    },
    removeFromFavourites(state, dog) {
      const filteredDogs = state.dogsFavouriteList.filter(fawDog => fawDog.url !== dog.url);
      state.dogsFavouriteList = filteredDogs;
      storeFavourites(state.dogsFavouriteList);
    },
  },
  actions: {
    async loadFovourites({ commit }) {
      const favouritesDogs = getStoredFavourites();
      commit('setFavourites', favouritesDogs);
    },
    async loadDogs({ commit }, amount = 20) {
      if(dogsLoading) return;
      dogsLoading = true;
      try {
        const { data: { message: dogs } } = await axios.get(`https://dog.ceo/api/breeds/image/random/${amount}`);
        commit('addDogs', dogs);
      } catch(err) {
        console.log(err);
      }
      dogsLoading = false;
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
