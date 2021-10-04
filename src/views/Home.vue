<template>
  <div class="home">
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

export default {
  name: 'Home',
  components: {
    CardList,
  },
  mounted() {
    this.loadDogs();
    this.loadFovourites();
  },
  computed: {
    ...mapGetters('dogs', [
      'dogsList',
      'dogsFavouriteList',
    ]),
  },
  methods: {
    ...mapActions('dogs', {
      loadFovourites: 'loadFovourites',
      loadDogs: 'loadDogs',
      addToFavouritesDogs: 'addToFavourites',
      removeFromFavouritesDogs: 'removeFromFavourites',
    }),
    loadMore() {
      this.loadDogs();
    },
    addToFavourites(data) {
      this.addToFavouritesDogs(data);
    },
    removeFromFavourites(data) {
      this.removeFromFavouritesDogs(data);
    },
  }
}
</script>
