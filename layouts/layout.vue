<template>
    <div class="">
      <NavBar/>
      <main class="main">
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

.main {
  @apply container mx-auto pt-9
}
</style>