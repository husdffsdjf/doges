<template>
  <div class="Sort">
    <span class="Sort__title">Сортировка по алфавиту</span>
    <Toggle @change="changeSort"/>
  </div>
</template>

<script>
import Toggle from '@/components/Toggle'

export default {
  name: 'Sort',
  components: {
    Toggle,
  },
  methods: {
    changeSort(status) {
      this.$emit('changeSort', status);
    }
  }
}
</script>

<style scoped>
.Sort {
  display: flex;
  margin-top: 30px;
}

.Sort__title {
  color: #626262;
  margin-right: 10px;
}
</style>
