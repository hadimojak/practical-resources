const past = "2021/06/06";
const future = "2022/10/10";
const cycle = "202306";

if (
  !(new Date(past) < new Date() && new Date() < new Date(future)) &&
  cycle !== "202106"
)
  console.log("heerree");
