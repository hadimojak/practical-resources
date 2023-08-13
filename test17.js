const attributes = {
  msisdn: "112123123",
  nationalCode: "123123123",
  addresses: [{ city: "tehranإ" }],
  age: 40,
};

if (["msisdn", "nationalCode1"].every(val=>Object.keys(attributes).includes(val))) {
  console.log("hast");
}

console.log(Object.keys(attributes));



const txt = '123 saeed arbabi'

console.log(txt.replace(/ /g, ''))