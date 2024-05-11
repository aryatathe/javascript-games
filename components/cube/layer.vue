<script setup>
const props = defineProps(["layer"]);
</script>

<template>
  <div class="layer">
    <template v-for="unit in [...layer[0], ...layer[1], ...layer[2]]">
      <CubeUnit :unit="unit" />
    </template>
  </div>
</template>

<style scoped>
.layer {
  width: 340px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  transform-style: preserve-3d;
}

.layer:nth-child(1) {
  transform: translateZ(120px);
}

.layer:nth-child(2) {
  transform: translateY(-340px);
}

.layer:nth-child(3) {
  transform: translateZ(-120px) translateY(-680px);
}
</style>
