<template>
  <div>
    <ul>
      <li>
        <router-link to="/"> home</router-link>
      </li>
      <li>
        <router-link to="/chat">chat</router-link>
      </li>
    </ul>
    <div class="container mt-3">
      <router-view> </router-view>
    </div>
    <h1>footer</h1>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>