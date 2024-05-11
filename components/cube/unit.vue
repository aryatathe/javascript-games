<script setup>
const props = defineProps(["unit"]);

const colorMap = {
  r: "red",
  g: "green",
  b: "blue",
  y: "yellow",
  o: "orange",
  w: "white",
  ".": "grey",
};
</script>

<template>
  <div class="cube">
    <div
      class="face front"
      :style="{ backgroundColor: colorMap[unit[0]] }"
    ></div>
    <div class="face top" :style="{ backgroundColor: colorMap[unit[1]] }"></div>
    <div
      class="face left"
      :style="{ backgroundColor: colorMap[unit[2]] }"
    ></div>
    <div
      class="face bottom"
      :style="{ backgroundColor: colorMap[unit[3]] }"
    ></div>
    <div
      class="face right"
      :style="{ backgroundColor: colorMap[unit[4]] }"
    ></div>
    <div
      class="face back"
      :style="{ backgroundColor: colorMap[unit[5]] }"
    ></div>
  </div>
</template>

<style scoped>
.cube {
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
}

.face {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: 100px;
  border: 1px solid black;
  box-sizing: border-box;
}

.face.front {
  transform: translateZ(50px);
}
.face.back {
  transform: rotateY(180deg) translateZ(50px);
}
.face.left {
  transform: rotateY(-90deg) translateZ(50px);
}
.face.right {
  transform: rotateY(90deg) translateZ(50px);
}
.face.top {
  transform: rotateX(90deg) translateZ(50px);
}
.face.bottom {
  transform: rotateX(-90deg) translateZ(50px);
}

/* Customize colors for each cube face */
/* .cube .front {
  background-color: white;
}
.cube .back {
  background-color: yellow;
}
.cube .left {
  background-color: blue;
}
.cube .right {
  background-color: green;
}
.cube .top {
  background-color: red;
}
.cube .bottom {
  background-color: orange;
} */
</style>
