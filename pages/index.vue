<template>
  <div>
    <h1>Articles</h1>
    <form>
      <input type="search">
      <button>Search</button>
    </form>
      <article v-for="n in 15" :key="n">
        <h2><a href="/article/123">Article 123</a></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
        <span>Date: <strong>12.10.2023</strong></span>
        <div>
          <span>Author: <strong>Dmitriy Ryabukhin</strong></span>
        </div>
        <div>Likes: <strong>12</strong></div>
        <div>Views: <strong>2312</strong></div>
      </article>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>