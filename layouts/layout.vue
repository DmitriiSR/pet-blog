<template>
    <NavBar/>
    <main class="main">
      <slot></slot>
    </main>
</template>

<script setup lang="ts">

</script>

<style scoped>
body {
  @apply bg-sys-white dark:bg-sys-grey dark:text-sys-grey text-sys-black
}

.main {
  @apply container mx-auto pt-9
}
</style>