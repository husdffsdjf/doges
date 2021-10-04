<template>
  <div class="favourites">
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
  name: 'Favourites',
  components: {
    CardList,
  },
  data: () => ({
    dogsList: [],
  }),
  async mounted() {
    this.loadDogs();
    await this.loadFovourites();
    this.dogsList = this.dogsFavouriteList;
  },
  computed: {
    ...mapGetters('dogs', [
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
