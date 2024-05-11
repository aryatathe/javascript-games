const centers = ["w.....", ".r....", "..b...", "....g.", "...o..", ".....y"];
const edges = [
  "wr....",
  "w.b...",
  "w...g.",
  "w..o..",
  ".rb...",
  ".r..g.",
  "..bo..",
  "...og.",
  ".r...y",
  "..b..y",
  "....gy",
  "...o.y",
];
const corners = [
  "wrb...",
  "wr..g.",
  "w.bo..",
  "w..og.",
  ".rb..y",
  ".r..gy",
  "..bo.y",
  "...ogy",
];

const completeCube = [
  [
    [corners[0], edges[0], corners[1]],
    [edges[1], centers[0], edges[2]],
    [corners[2], edges[3], corners[3]],
  ],
  [
    [edges[4], centers[1], edges[5]],
    [centers[2], "......", centers[3]],
    [edges[6], centers[4], edges[7]],
  ],
  [
    [corners[4], edges[8], corners[5]],
    [edges[9], centers[5], edges[10]],
    [corners[6], edges[11], corners[7]],
  ],
];

export default function () {
  const cube = ref(completeCube);

  return { cube };
}
