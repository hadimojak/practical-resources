const arr1 = [
  {
    id: "000266de-9b81-4899-bed1-7abf639d9f05",
    code: "770017",
  },
  {
    id: "000128de-9b81-4899-bed1-7abf639d9f05",
    code: "770017",
  },
  {
    id: "000125de-9b81-4899-bed1-7abf639d9f05",
    code: "770017",
  },
];

const arr2 = [
  {
    id: "000266de-9b81-4899-bed1-7abf639d9f05",
    code: "770017",
  },
  {
    id: "000123de-9b81-4899-bed1-7abf639d9f05",
    code: "770017",
  },
  {
    id: "000111de-9b81-4899-bed1-7abf639d9f05",
    code: "770017",
  },
];

const merged = [...arr1, ...arr2];

var map = new Map();
merged.forEach((offer) => map.set(offer["id"], offer));

var iteratorValues = map.values();
var uniqueEmployess = [...iteratorValues];

// console.log(uniqueEmployess)

const arr2D = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const dmap = new Map(arr2D);

const arr3 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [4, 5, 6, 7, 8, 9, 10, 11],,[1,2,3,4,5,6,7,78,89]
];

function nameFN(arr) {
  const set = new Set();

  function arrUniq(arrOfarrs) {
    arrOfarrs.forEach((val) => {
      if (!Array.isArray(val)) {
        set.add(val);
      } else if (Array.isArray(val)) arrUniq(val);
    });
    return set;
  }

  const resultArr = arrUniq(arr);
  return Array.from(resultArr);
}

console.log(nameFN(arr3));
