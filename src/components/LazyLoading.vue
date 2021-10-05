<template>
  <div class="LazyLoading" ref="LazyLoading">x</div>
</template>

<script>

export default {
  name: 'LazyLoading',
  components: {
  },
  props: ['list', 'favouriteList'],
  methods: {
    addToFavourites(data) {
      this.$emit('addToFavourites', data)
    },
    removeFromFavourites(data) {
      this.$emit('removeFromFavourites', data)
    },
    isVisible() {
      const target = this.$refs.LazyLoading;
      var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
      },

      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };

      if (targetPosition.bottom > windowPosition.top &&
        targetPosition.top < windowPosition.bottom &&
        targetPosition.right > windowPosition.left &&
        targetPosition.left < windowPosition.right) {

        this.$emit('load');
      } else {
        //
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.isVisible);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.isVisible);
  },
}
</script>

<style scoped>
</style>
