var a = [
  {
    id: 1,
    category: "a",
  },
  {
    id: 2,
    category: "a",
  },
  {
    id: 3,
    category: "b",
  },
  {
    id: 4,
    category: "c",
  },
  {
    id: 5,
    category: "a",
  },
  {
    id: 6,
    category: "d",
  },
  {
    id: 7,
    category: "b",
  },
];
function render() {
  var b = a.reduce((total, current) => {
    if (current.category in total) {
      total[current.category]++;
    } else {
      total[current.category]=1;
    }
    return total;
  }, {});
  console.log(b);
}
render();
