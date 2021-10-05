<template>
  <div class="Toggle">
    <div :class="[{ 'Toggle__container--active': isActive }, 'Toggle__container']" @click="toggle">
      <div class="Toggle__container__switch"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toggle',
  data: () => ({
    isActive: false,
  }),
  methods: {
    toggle() {
      this.isActive = !this.isActive;
      this.$emit('change', this.isActive);
    }
  }
}
</script>

<style scoped>
.Toggle {
 
}

.Toggle__container {
  position: relative;
  width: 30px;
  height: 14px;
  border: 1px solid #626262;
  border-radius: 10px;
}

.Toggle__container__switch {
  position: absolute;
  top: 2px;
  left: 2px;
  height: 10px;
  width: 10px;
  border-radius: 10px;
  background: #626262;
}

.Toggle__container--active .Toggle__container__switch {
  background: #fff;
  left: 17px;
}
</style>
