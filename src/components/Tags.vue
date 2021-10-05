<template>
  <div class="Tags">
    <button class="Tags__toggle" @click="toggleTags">
      <span>Породы</span>
      <span class="Tags__toggle__icon material-icons" v-html='getIcon'></span>
    </button>
    <div class="Tags__list" v-show="isOpen">
      <button class="Tags__list__tag" v-for="tag in tags" :key="tag" @click="goTo(tag)">{{ tag }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  props: ['tags'],
  data: () => ({
    isOpen: false,
  }),
  computed: {
    getIcon() {
      return this.isOpen ? '&#xe5ce;' : '&#xe5cf;';
    }
  },
  methods: {
    toggleTags() {
      this.isOpen = !this.isOpen;
    },
    goTo(tag) {
      this.$router.push({ name: 'Tag', params: { tag } })
    },
  },
}
</script>

<style scoped>
.Tags {
  margin-top: 30px;
}

.Tags__toggle {
  display: block;
  background: none;
  border: none;
  color: #fff;
  border-bottom: 1px dashed;
  padding: 0;
  margin-bottom: 20px;
}

.Tags__toggle__icon {
  vertical-align: bottom;
  margin-left: 5px;
}

.Tags__list {
  text-align: left;
}

.Tags__list__tag {
  background: none;
  border: 1px solid #626262;
  color: #626262;
  border-radius: 15px;
  padding: 5px 10px;
  margin: 3px;
  cursor: pointer;
}
</style>
