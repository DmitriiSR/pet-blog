<template>
  <header class="header">
    <div class="header__inner">
      <div class="flex justify-between">
        <BlogLogo/>
        <ThemeToggle/>
      </div>
      <UiInput type="search" class="header__search" placeholder="Search"/>
      <nav class="header__menu">
        <UiButton>Sign in</UiButton>
      </nav>
    </div>
  </header>
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
.header {
  box-shadow: 0 0 15px 0 rgba(121, 123, 174, 0.25);
  @apply bg-sys-white text-sys-white py-4
}

.header__inner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 24px;

  @apply container mx-auto
}

.header__search input {
  display: block;
  width: 100%;
}

.header__menu {
  display: flex;
  justify-content: flex-end;
}
</style>