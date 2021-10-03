import axios from "axios"

export default {
  namespaced: true,
  state: () => ({
    dogsList: [],
    dogsFavouriteList: [],
    dogsTags: [],
    dogsSelectedTags: [],
  }),
  mutations: {
    addDogs(state ,dogs) {
      const uniqueDogs = dogs.filter((value) => !~state.dogsList.indexOf(value));
      state.dogsList.push(...uniqueDogs);
    }
  },
  actions: {
    async loadDogs({ commit }, amount = 20) {
      try {
        const { data: { message: dogs } } = await axios.get(`https://dog.ceo/api/breeds/image/random/${amount}`);
        commit('addDogs', dogs);
      } catch(err) {
        console.log(err);
      }
    }
  },
  getters: {
    dogsList: state => state.dogsList,
  },
};
