<template>
  <div>
    <div class="CardList px-60">
      <Card
        class="CardList__item"
        v-for="item in list"
        :key="item.src"
        :imageData="item"
        :favouriteList="favouriteList"
        @addToFavourites="addToFavourites"
        @removeFromFavourites="removeFromFavourites"
      />
    </div>
    <LazyLoading v-if="isLazyLoading" @load="loadMore"/>
  </div>
</template>

<script>
import Card from '@/components/Card';
import LazyLoading from '@/components/LazyLoading';

export default {
  name: 'CardList',
  components: {
    Card,
    LazyLoading,
  },
  computed: {
    isLazyLoading() {
      return this.$route.name !== 'Favourites';
    }
  },
  props: ['list', 'favouriteList'],
  methods: {
    addToFavourites(data) {
      this.$emit('addToFavourites', data)
    },
    removeFromFavourites(data) {
      this.$emit('removeFromFavourites', data)
    },
    loadMore() {
      this.$emit('loadMore')
    },
  }
}
</script>

<style scoped>
.CardList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.CardList__item:first-child {
  width: 91vw;
  height: 45vw;
}

.CardList__item {
  margin-top: 30px;
}
</style>
