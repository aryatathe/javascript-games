const x = (arr) =>
  arr.map((item) => {
    let ii = item.split("");
    return [ii[0], ii[1], ii[4], ii[3], ii[2], ii[5]].join("");
  });

let temp = [
  "wr..b.",
  "wrg...",
  "w.go..",
  "w..ob.",
  ".r..by",
  ".rg..y",
  "..go.y",
  "...oby",
];
console.log(x(temp));
