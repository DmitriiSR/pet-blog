<template>
    <div class="">
      <NavBar class="shadow-md"/>
      <main class="container">
        <slot></slot>
      </main>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
body {
  @apply bg-sys-white dark:bg-sys-gray dark:text-sys-gray;
}
</style>