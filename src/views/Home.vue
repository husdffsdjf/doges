<template>
  <div class="home">
    <img v-for="dog in dogsList" :key="dog" :alt="dog" :src="dog">
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
  },
  mounted() {
    this.loadDogs();
  },
  computed: {
    ...mapGetters('dogs', [
      'dogsList',
    ]),
  },
  methods: {
    ...mapActions('dogs', {
      loadDogs: 'loadDogs',
    }),
  }
}
</script>
