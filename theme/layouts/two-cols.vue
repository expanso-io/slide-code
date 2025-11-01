<script setup lang="ts">
import GlowBackground from '../components/GlowBackground.vue'
</script>

<template>
  <div class="slidev-layout two-cols">
    <GlowBackground />
    <div class="column-left">
      <slot name="left" />
      <slot name="default" />
    </div>
    <div class="column-right">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.two-cols {
  width: 100%;
  height: 100%;
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  background: #000000;  /* grey-900 per design system */
  position: relative;
}

.column-left,
.column-right {
  display: flex;
  flex-direction: column;
}
</style>
