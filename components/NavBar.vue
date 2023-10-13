<template>
  <nav class="nav-bar">
    <ul class="nav-bar__inner">
      <li class="menu__item badge mr-2"><a href="/">Main</a></li>
      <li class="menu__item"><a href="/login">Login</a></li>
      <li class="menu__item"><a href="/registration">Registration</a></li>
      <li class="menu__item"><a href="/profile">Profile</a></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
let darkTheme = false;
const colorMode = useColorMode();
const toggleTheme = () => {
  darkTheme = !darkTheme
  if (darkTheme) {
    colorMode.preference = 'dark'
  } else {
    colorMode.preference = 'light'
  }
}
</script>

<style lang="postcss" scoped>
.nav-bar {
  @apply bg-sys-gray text-sys-white py-2
}

.nav-bar__inner {
  @apply container flex mx-auto
}
</style>