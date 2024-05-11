<script setup>
const props = defineProps(["cube"]);
</script>

<template>
  <div class="rubiks-cube">
    <template v-for="layer in cube">
      <CubeLayer :layer="layer" />
    </template>
  </div>
</template>

<style scoped>
.rubiks-cube {
  width: 340px;
  height: 340px;
  transform-style: preserve-3d;
  transform: rotate3d(1, 1, 1, 30deg);
}
</style>
