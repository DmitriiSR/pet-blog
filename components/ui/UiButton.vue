<template>
  <button type="button" :class="props.type" class="ui-button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
type ButtonType = 'primary' | 'secondary'
interface UiButtonProps {
  type?: ButtonType
}
const props = withDefaults(defineProps<UiButtonProps>(), {
  type: 'primary'
})
</script>

<style scoped lang="postcss">
.ui-button {
  @apply py-2 px-4 cursor-pointer rounded-lg
}

.ui-button.primary {
  @apply bg-sys-green
}
</style>