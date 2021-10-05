<template>
  <div class="home">
    <Tags :tags="breedsList"/>
    <CardList
      :list="dogsList"
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

export default {
  name: 'Home',
  components: {
    CardList,
    Tags,
  },
  watch:{
    async $route (){
      await this.clearDogs();
      this.loadMore();
    }
  },
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
