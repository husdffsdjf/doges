<template>
  <div class="header">
    <h1 class="header__title">ПЁСЕЛЬ</h1>
    <FavoritesButton/>
  </div>
</template>

<script>
import FavoritesButton from '@/components/FavoritesButton'

export default {
  name: 'Header',
  components: {
    FavoritesButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  margin: 0;
  padding: 1px;
  background: #151419;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: space-between;
}

.header__title {
  color: #3C59F0;
}
</style>
