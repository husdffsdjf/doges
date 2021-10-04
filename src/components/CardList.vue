<template>
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
</template>

<script>
import Card from '@/components/Card';

export default {
  name: 'CardList',
  components: {
    Card,
  },
  props: ['list', 'favouriteList'],
  methods: {
    addToFavourites(data) {
      this.$emit('addToFavourites', data)
    },
    removeFromFavourites(data) {
      this.$emit('removeFromFavourites', data)
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

.CardList__item {
  margin-top: 30px;
}
</style>
