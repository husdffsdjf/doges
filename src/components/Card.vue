<template>
  <div class="Card" :style="getBg">
    <span class="Card__favorite material-icons" @click="toggleFavourite" v-html="getIcon"></span>
    <span class="Card__caption">{{ imageData.breed | capitalize }}</span>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['imageData', 'favouriteList'],
  computed: {
    getBg() {
      return { 'background-image': `url(${this.imageData.url})` };
    },
    isRecordExist() {
      return ~this.favouriteList.findIndex(fawDog => fawDog.url === this.imageData.url);
    },
    getIcon() {
      return this.isRecordExist ? '&#xe87d;' : '&#xe87e;';
    },
  },
  methods: {
    toggleFavourite() {
      !this.isRecordExist ? this.addToFavourites(this.imageData) : this.removeFromFavourites(this.imageData);
    },
    addToFavourites(data) {
      this.$emit('addToFavourites', data)
    },
    removeFromFavourites(data) {
      this.$emit('removeFromFavourites', data)
    },
  },
}
</script>

<style scoped>
.Card {
  position: relative;
  height: 290px;
  width: 367px;
  border-radius: 8px;
  background-size: cover;
  overflow: hidden;
  cursor: default;
  user-select: none;
}

.Card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(1.26deg, #000000 -5.53%, rgba(0, 0, 0, 0) 54.45%);
}

.Card__caption {
  position: absolute;
  bottom: 25px;
  left: 0;
  right: 25px;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.01em;
  text-align: right;
  color: #fff
}

.Card__favorite {
  position: absolute;
  top: 25px;
  left: 25px;
  font-size: 30px;
  color: #fff;
}
</style>
