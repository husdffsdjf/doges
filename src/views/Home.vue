<template>
  <div class="home">
    <CardList
      :list="dogsList"
      :favouriteList="dogsFavouriteList"
      @addToFavourites="addToFavourites"
      @removeFromFavourites="removeFromFavourites"
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
  },
  computed: {
    ...mapGetters('dogs', [
      'dogsList',
      'dogsFavouriteList',
    ]),
  },
  methods: {
    ...mapActions('dogs', {
      loadDogs: 'loadDogs',
      addToFavouritesDogs: 'addToFavourites',
      removeFromFavouritesDogs: 'removeFromFavourites',
    }),
    addToFavourites(data) {
      this.addToFavouritesDogs(data);
    },
    removeFromFavourites(data) {
      this.removeFromFavouritesDogs(data);
    },
  }
}
</script>
