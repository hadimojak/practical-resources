// const body = {
//   firstname: "hadi",
//   lastname: "arbabi",
//   attributes: {
//     postalCode: "0054646984",
//     gender: "MALE",
//   },
// };

// function convertKeysToString(obj) {
//   let keys = [];
//   for (let key in obj) {
//     keys.push(key.toString());
//     if (key === "attributes") {
//       for (const key1 in obj[key]) {
//         keys.push(`attributes.${key1}`);
//       }
//     }
//   }
//   return keys;
// }

// const arr = [1, 2, 3, 4];

// const PersianDate = require("persian-date");

// console.log( new PersianDate().toLocale('en').format('L'))
// console.log( new Date().toTimeString().slice(0,8))

let stvalue;
const testFn = () => {
  const status = "great";
  return status;
};

setTimeout(async () => {
  stvalue = await testFn();
  console.log(stvalue)
}, 2000);
