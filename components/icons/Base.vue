<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="props.width" :height="props.height" viewBox="0 0 24 24">
    <g :stroke="props.color" fill="none">
      <slot></slot>
    </g>
  </svg>
</template>

<script setup lang="ts">
import {COLORS} from "~/constants";
interface IconProps {
  color?: string,
  width?: string,
  height?: string
}
const props = withDefaults(defineProps<IconProps>(), {
  width: '24',
  height: '24',
  color: COLORS['sys-grey']
})
</script>