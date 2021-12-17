<template>
  <div class="card">
    <img :src="img" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        <slot />
      </p>
     
    </div>
  </div>
</template>

<script>
export default {
  props: ["title",  "img"],
  methods: {
    dolike() {
      this.$emit("like");
    },
  },
};
</script>

<style>
</style>