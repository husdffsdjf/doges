<template>
  <div class="header px-60">
    <h1 class="header__title" @click="goToHome">ПЁСЕЛЬ</h1>
    <FavoritesButton/>
  </div>
</template>

<script>
import FavoritesButton from '@/components/FavoritesButton'

export default {
  name: 'Header',
  components: {
    FavoritesButton
  },
  methods: {
    goToHome() {
      this.$router.push('/');
    },
  },
}
</script>

<style scoped>
@import '~colors';

.header {
  height: 100px;
  margin: 0;
  padding: 0px;
  background: #151419;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__title {
  cursor: pointer;
  padding: 0;
  margin: 0;
  color: var(--main-blue);
}
</style>
