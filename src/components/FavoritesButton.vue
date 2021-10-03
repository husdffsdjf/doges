<template>
  <button class="FavoritesButton" @click="goToFavorites">
    <span class="FavoritesButton__text">Избранные пёсели</span>
    <span class="FavoritesButton__icon material-icons" v-html='getIcon'></span>
  </button>
</template>

<script>
export default {
  name: 'FavoritesButton',
  methods: {
    goToFavorites() {
      this.$router.push('/favourites');
    },
  },
  computed: {
    getIcon() {
      return this.$route.name === 'Favourites' ? '&#xe87d;' : '&#xe87e;';
    }
  },
}
</script>

<style scoped>
.FavoritesButton {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: var(--main-gray)
}

.FavoritesButton__icon {
  vertical-align: top;
  margin-left: 10px;
}
</style>
