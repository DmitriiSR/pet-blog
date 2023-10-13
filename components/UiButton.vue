<template>
  <button type="button" class="ui-button">{{label}}</button>
</template>

<script setup lang="ts">
const props = defineProps(['label'])
</script>

<style scoped lang="postcss">
.ui-button {
  @apply py-2 px-4 text-white cursor-pointer rounded-lg
}
</style>