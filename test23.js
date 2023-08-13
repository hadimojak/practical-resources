const acl = [
  { id: 1, label: "Hello", color: "red", sorting: 0 },
  { id: 1, label: "Hello", sorting: 0, color: "red" },
  { id: 2, label: "World", color: "green", sorting: 1 },
  { id: 3, label: "Hello", color: "blue", sorting: 4 },
  { id: 4, label: "Sunshine", color: "yellow", sorting: 5 },
  { id: 5, label: "Hello", color: "red", sorting: 6 },
  { id: 1, label: "Hello", sorting: 0, color: "red" },
  { id: 5, label: "Hello", color: "red", sorting: 61 },
  { id: 5, label: "Hello", color: "red", sorting: 61 },
];

const keys = ["label", "color", "sorting", "id"];
const filtered = acl.filter(
  (
    (s) => (o) =>
      ((k) => !s.has(k) && s.add(k))(keys.map((k) => o[k]).join("|"))
  )(new Set())
);

console.log(filtered);
