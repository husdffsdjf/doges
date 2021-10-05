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
    breedsList: [],
    dogsList: [],
    dogsFavouriteList: [],
    dogsTags: [],
    dogsSelectedTags: [],
  }),
  mutations: {
    addDogs(state, dogs) {
      const dosgData = dogs.map(dog => getDataFromUrl(dog));
      state.dogsList.push(...dosgData);
    },
    addBreeds(state, dogs) {
      state.breedsList = dogs;
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
    clearDogs(state) {
      state.dogsList = [];
    },
  },
  actions: {
    async loadFovourites({ commit }) {
      const favouritesDogs = getStoredFavourites();
      commit('setFavourites', favouritesDogs);
    },
    async loadBreeds({ state, commit }) {
      if (state.breedsList.length) return;
      try {
        const { data: { message: dogs } } = await axios.get(`https://dog.ceo/api/breeds/list/all`);
        commit('addBreeds', Object.keys(dogs));
      } catch(err) {
        console.log(err);
      }
    },
    async clearDogs({ commit }) {
      commit('clearDogs');
    },
    async loadDogs({ commit }, breed='', amount = 20) {
      if(dogsLoading) return;
      dogsLoading = true;
      try {
        const url = breed ? `https://dog.ceo/api/breed/${breed}/images/random/${amount}` : `https://dog.ceo/api/breeds/image/random/${amount}`;
        const { data: { message: dogs } } = await axios.get(url);
        commit('addDogs', dogs);
      } catch(err) {
        console.log(err);
      }
      dogsLoading = false;
    },
    async addToFavourites({ commit }, dog) {
      commit('addToFavourites', dog);
    },
    async removeFromFavourites({ commit }, dog) {
      commit('removeFromFavourites', dog);
    },
  },
  getters: {
    breedsList: state => state.breedsList,
    dogsList: state => state.dogsList,
    dogsFavouriteList: state => state.dogsFavouriteList,
  },
};
