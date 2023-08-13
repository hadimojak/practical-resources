let arr1=[];
let arr2 = [
  { id: 3, name: "bbbb" },
  { id: 4, name: "bbff" },
  { id: 5, name: "1111" },
];
const merge = [...(arr1 && arr1), ...arr2];

console.log(
  merge.filter(
    (val, index, self) => self.findIndex((p) => p.id === val.id) === index
  )
);
