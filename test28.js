const clubs = [{ name: "ani" }];

const arr = [
  {
    id: "bebf82ab-f6d3-4f35-bafd-a7c21af9bcff",
    msisdn: "9107636873",
    simType: "PREPAID",
    subsType: "ANARESTAN",
  },
  {
    id: "e41fe5cb-cb72-4382-b166-589a285659bf",
    msisdn: "9121935901",
    simType: "POSTPAID",
  },
];

const obj = {
  firstname: "string",
  lastname: "string",
  email: "string",
  nationalCode: "0078063507",
  attributes: {
    msisdn: "9121935901",
    gender: "string",
    clubs: [
      {
        serviceCode: "perspolis",
        clientId: "uuid",
        id: "5d683711-b785-4224-b622-c579716a4e9f",
        voucher: "abcd",
        accountId: "12345678",
        status: "ACTIVE",
      },
    ],
  },
};

const newArr = [...arr, ...(clubs || [])];

let count =5

console.log(count+=1);
