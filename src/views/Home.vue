<template>
  <div class="Home">
    <div class="Home_options px-60">
      <Tags :tags="breedsList"/>
      <Sort @changeSort="changeSort"/>
    </div>
    <CardList
      :list="sortedBreedList"
      :favouriteList="dogsFavouriteList"
      @addToFavourites="addToFavourites"
      @removeFromFavourites="removeFromFavourites"
      @loadMore="loadMore"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CardList from '@/components/CardList'
import Tags from '@/components/Tags'
import Sort from '@/components/Sort'

export default {
  name: 'Home',
  components: {
    CardList,
    Tags,
    Sort,
  },
  watch:{
    async $route (){
      await this.clearDogs();
      this.loadMore();
    }
  },
  data: () => ({
    isSort: false,
  }),
  mounted() {
    this.loadMore();
    this.loadFovourites();
    this.loadBreeds();
  },
  computed: {
    ...mapGetters('dogs', [
      'breedsList',
      'dogsList',
      'dogsFavouriteList',
    ]),
    sortedBreedList() {
      if(this.isSort) {
        return this.dogsList.slice().sort((dog1, dog2 ) => {
          if (dog1.breed < dog2.breed) {
            return -1;
          }
          if (dog1.breed > dog2.breed) {
            return 1;
          }
          return 0;
        });
      } else {
        return this.dogsList;
      }
    },
  },
  methods: {
    ...mapActions('dogs', {
      loadFovourites: 'loadFovourites',
      loadBreeds: 'loadBreeds',
      loadDogs: 'loadDogs',
      clearDogs: 'clearDogs',
      addToFavouritesDogs: 'addToFavourites',
      removeFromFavouritesDogs: 'removeFromFavourites',
    }),
    changeSort(status) {
      this.isSort = status;
    },
    loadMore() {
      if(this.$route.name === 'Tag') {
        this.loadDogs(this.$route.params.tag);
      } else {
        this.loadDogs();
      }
    },
    addToFavourites(data) {
      this.addToFavouritesDogs(data);
    },
    removeFromFavourites(data) {
      this.removeFromFavouritesDogs(data);
    },
  },
  beforeDestroy() {
    this.clearDogs();
  },
}
</script>


<style scoped>
.Home_options {
  display: flex;
  justify-content: space-between;
}
</style>
