const fs = require("fs");
let response = fs.readFileSync("./test1.json");
response = JSON.parse(response);

// const { queryCustomerInfoRspMsg } = response.Envelope.Body;

// const { value: fatherName } =
//   queryCustomerInfoRspMsg.queryCustomerInfoResponse.customer.individualInfo.individualBaseInfo.individualProperty.find(
//     (val) => val.code === "fatherName"
//   );

let Age;
let gender;
let fatherName;

const obj = {
  firstName: "hadi arbaboi",
  age: 26,
  gender: "male",
  individualProperty: [
    { code: "fatherName", value: "فضل اله" },
    { code: "birthIDCardNumber", value: 1710 },
    { code: "birthIDCardIssuedPlace", value: "تهران" },
  ],
  certificationInfo: {
    idType: "NationalID",
    idNumber: 45416435,
    issueCountry: "تهران",
  },
};

({
  age: Age,
  firstName,
  gender: gender,
} = {
  ...obj,
});

({ value: fatherName } = obj.individualProperty.find(
  (val) => val.code === "fatherName"
));

const idNumber =
  obj.certificationInfo.idType === "NationalID"
    ? obj.certificationInfo.idNumber
    : "";

Age = 40;
gender = "female";

const keys = [];
for (const key in obj) {
  if (["firstName", "lastname"].includes(key)) {
      keys.push(key);
  }
}

console.log(keys)
