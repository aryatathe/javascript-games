<script setup>
const { cube } = useCube();
</script>

<template>
  <div>cube</div>
  <div>{{ JSON.stringify(cube) }}</div>
  <div class="w-full py-32 flex justify-center items-center">
    <CubeDisplay :cube="cube" />
  </div>
</template>

<style scoped></style>
