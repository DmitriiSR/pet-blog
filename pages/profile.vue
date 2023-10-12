<template>
  <div>
    <h1>Profile</h1>
    <form>
      <label>
        <span>Avatar</span>
        <input type="file">
      </label>
    </form>

    <ul>
      <li>Login: <strong>geralt0509</strong></li>
      <li>Name: <strong>Dmitriy</strong> </li>
      <li>Surname: <strong>Ryabukhin</strong></li>
      <li>Email: <strong>d.ryabukhin0509@gmail.com</strong></li>
    </ul>

    <div style="padding: 20px 0">
      <button>Edit profile</button>
    </div>

    <div>
      <h2>My articles</h2>
      <form>
        <label>
          <span>Title</span>
          <input type="text">
        </label>
        <label>
          <textarea></textarea>
        </label>
        <button>Add article</button>
      </form>
      <form>
        <input type="search">
        <button>Search</button>
      </form>
      <article v-for="n in 5" :key="n">
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
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>