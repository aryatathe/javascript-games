<script setup>
const navs = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Snake",
    path: "/snake",
  },
];
</script>

<template>
  <div
    class="fixed w-full bg-[--surface-card] py-2 px-3 flex justify-between items-center space-x-3"
  >
    <h1>TITLE</h1>
    <div class="flex space-x-2">
      <NuxtLink v-for="{ name, path } in navs" :key="path" :to="path">
        <PrimeButton outlined :label="name" size="small" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
f
