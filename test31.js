const PersianDate = require("persian-date");

const date = "2023-03-04%coupon%";

// console.log(new PersianDate(new Date(date)).toLocale('en').format('L'))

// console.log(date.replace('%coupon%','hadi'))

// console.log(Math.ceil("128.033"));

const arr = [
  {
    packageNumber: 400627,
    score: 20,
  },
  {
    packageNumber: 400626,
    score: 20,
  },
  {
    packageNumber: 400625,
    score: 20,
  },
  {
    packageNumber: 400624,
    score: 20,
  },
  {
    packageNumber: 400623,
    score: 20,
  },
  {
    packageNumber: 400622,
    score: 20,
  },
  {
    packageNumber: 400621,
    score: 20,
  },
];

const arr2 = [
  {
    id: "cefb10d9-f56a-4f9b-9528-271b51cbe069",
    class: "topup.offer.mci",
    clientId: "9f740bf9-817a-4539-bb1d-43790fc93b75",
    createdts: "2021-01-18T22:41:00.000Z",
    creator: "00000000-0000-0000-0000-000000000000",
    status: "ACTIVE",
    effts: "2020-10-01T00:00:00",
    expts: "2037-10-01T00:00:00",
    title: "10 دقيقه مکالمه و 20 پيامک 7 روزه درون شبکه",
    code: "400623",
    amount: 0,
    displayAmount: 0,
    supportedSimType: ["PREPAID", "POSTPAID"],
    type: "GIFTPACKAGE",
    priority: 2,
    info: {
      packageType: "VOICE",
      packageTypeStr: "بسته‌های مکالمه و ترکیبی",
    },
  },
  {
    id: "cefb10d9-f56a-4f9b-9528-271b51cbe069",
    class: "topup.offer.mci",
    clientId: "9f740bf9-817a-4539-bb1d-43790fc93b75",
    createdts: "2021-01-18T22:41:00.000Z",
    creator: "00000000-0000-0000-0000-000000000000",
    status: "ACTIVE",
    effts: "2020-10-01T00:00:00",
    expts: "2037-10-01T00:00:00",
    title: "10 دقيقه مکالمه و 20 پيامک 7 روزه درون شبکه",
    code: "400622",
    amount: 0,
    displayAmount: 0,
    supportedSimType: ["PREPAID", "POSTPAID"],
    type: "GIFTPACKAGE",
    priority: 2,
    info: {
      packageType: "VOICE",
      packageTypeStr: "بسته‌های مکالمه و ترکیبی",
    },
  },
  {
    id: "cefb10d9-f56a-4f9b-9528-271b51cbe069",
    class: "topup.offer.mci",
    clientId: "9f740bf9-817a-4539-bb1d-43790fc93b75",
    createdts: "2021-01-18T22:41:00.000Z",
    creator: "00000000-0000-0000-0000-000000000000",
    status: "ACTIVE",
    effts: "2020-10-01T00:00:00",
    expts: "2037-10-01T00:00:00",
    title: "10 دقيقه مکالمه و 20 پيامک 7 روزه درون شبکه",
    code: "400621",
    amount: 0,
    displayAmount: 0,
    supportedSimType: ["PREPAID", "POSTPAID"],
    type: "GIFTPACKAGE",
    priority: 2,
    info: {
      packageType: "VOICE",
      packageTypeStr: "بسته‌های مکالمه و ترکیبی",
    },
  },
];

const reduced = arr2.reduce((result, val) => {
  const { packageNumber, score } = arr.find(
    (p) => p.packageNumber === +val.code
  );
  result.push({ packageNumber: packageNumber, score: score });
  return result;
}, []);

// console.log(reduced);

const number = -27;

// console.log(Math.abs(+number))

// console.log(new PersianDate().toLocale("en").format("D"));

class InstallmentRequestIsNotSllowedOnBillRunDaysError extends Error {
  constructor(code, message) {
    super("Installment request is not allowed on bill run days");
    this.code = 1069;
    this.httpStatus = 520;
    if (code) this.originCode = code;
    if (message) this.originMessage = message;
  }
}

// throw new InstallmentRequestIsNotSllowedOnBillRunDaysError(1050)

const arr3 = [
  {
    AccountID: "100000000001916074",
    BrokenTimes: 6,
    EffectiveDate: 13980904000000,
    ExpirationDate: 13980915110000,
    CreationOperatorID: 10004,
    CreationTime: 13980907112341,
    UpdateOperatorID: 102,
    UpdateDate: 13980907111000,
    Remark: "dddd",
    BEID: 10101,
    BECode: 101001,
    RegionID: 101,
    RegionCode: 101,
  },
  {
    AccountID: "100000000001916074",
    BrokenTimes: 6,
    EffectiveDate: 13980904000000,
    ExpirationDate: 13980915110000,
    CreationOperatorID: 10004,
    CreationTime: 13980907112341,
    UpdateOperatorID: 102,
    UpdateDate: 13980907111000,
    Remark: "dddd",
    BEID: 10101,
    BECode: 101001,
    RegionID: 101,
    RegionCode: 101,
  },
  {
    AccountID: "100000000001916074",
    BrokenTimes: 6,
    EffectiveDate: 13980904000000,
    ExpirationDate: 13980915110000,
    CreationOperatorID: 10004,
    CreationTime: 13980907112341,
    UpdateOperatorID: 102,
    UpdateDate: 13980907111000,
    Remark: "dddd",
    BEID: 10101,
    BECode: 101001,
    RegionID: 101,
    RegionCode: 101,
  },
  {
    AccountID: "100000000001916074",
    BrokenTimes: 6,
    EffectiveDate: 13980904000000,
    ExpirationDate: 13980915110000,
    CreationOperatorID: 10004,
    CreationTime: 13980907112341,
    UpdateOperatorID: 102,
    UpdateDate: 13980907111000,
    Remark: "dddd",
    BEID: 10101,
    BECode: 101001,
    RegionID: 101,
    RegionCode: 101,
  },
];

// console.log(
//   arr3.map((val) => {
//     const item = {
//       ExpirationDate: val.ExpirationDate,
//     };
//     return item;
//   })
// );

const date1 = '2022-07-09 11:30:43.000'

// console.log(`${date1.slice(0,4)}-${date1.slice(4,6)}-${date1.slice(6,8)}T${date1.slice(8,10)}:${date1.slice(10,12)}:${date1.slice(12,14)}.000z`)

// console.log(`${date1.replace(' ','T')}.000Z`)

console.log(new Date().toISOString().slice(0,10).replaceAll('-',''))