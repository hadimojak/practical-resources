const emailReg = /\S+@\S+\.\S+/;

// console.log(emailReg.test('hadimojak@gmail.com'))

const birthday = "1992-09-15T00:00:00";
const age = Math.round(
  (Date.now() - new Date(birthday).getTime()) / 1000 / 3600 / 24 / 365
);

const time = +new Date().toLocaleTimeString().split(" ")[0].replaceAll(":", "");

// if (170000 > time && time > 50000) console.log(time);

const range = (min, max) =>
  Array.from({ length: max - min + 1 }, (_, i) => min + i);

const obj = { name: { hadi: { nam: "hadi" } } };

const {
  name: { hadi },
} = obj;

const simType = "PREPAID";
const subType = undefined;

const arr = [
  {
    id: "dd4e9d12-2272-4b17-b2e0-8cfdb67eb24e",
    title: "پیامک",
    cip: false,
    simType: "POSTPAID",
    subType: "NORMAL",
    iconUrl:
      "https://static-ebcom.mci.ir/static/mci/mymci/dd4e9d12-2272-4b17-b2e0-8cfdb67eb24e.png",
    packageType: "SMSPACKAGE",
  },
  {
    id: "270b54ea-1c0a-43bc-aa64-c8a9a603e9d9",
    title: "بین الملل",
    cip: false,
    simType: "POSTPAID",
    subType: "NORMAL",
    iconUrl:
      "https://static-ebcom.mci.ir/static/mci/mymci/270b54ea-1c0a-43bc-aa64-c8a9a603e9d9.png",
    packageType: "INTPACKAGE",
  },
  {
    id: "dd4e9d12-2272-4b17-b2e0-8cfdb67eb24e",
    title: "پیامک",
    cip: false,
    simType: "PREPAID",
    subType: "NORMAL",
    iconUrl:
      "https://static-ebcom.mci.ir/static/mci/mymci/dd4e9d12-2272-4b17-b2e0-8cfdb67eb24e.png",
    packageType: "SMSPACKAGE",
  },
  {
    id: "270b54ea-1c0a-43bc-aa64-c8a9a603e9d9",
    title: "بین الملل",
    cip: false,
    simType: "PREPAID",
    subType: "NORMAL",
    iconUrl:
      "https://static-ebcom.mci.ir/static/mci/mymci/270b54ea-1c0a-43bc-aa64-c8a9a603e9d9.png",
    packageType: "INTPACKAGE",
  },
  {
    id: "dd4e9d12-2272-4b17-b2e0-8cfdb67eb24e",
    title: "پیامک",
    cip: false,
    simType: "PREPAID",
    subType: "ANARESTAN",
    iconUrl:
      "https://static-ebcom.mci.ir/static/mci/mymci/dd4e9d12-2272-4b17-b2e0-8cfdb67eb24e.png",
    packageType: "SMSPACKAGE",
  },
];

const filter = arr.filter((val) => {
  if (val.simType === simType) {
    if (subType && val.subType === subType) {
      return val;
    } else if (!subType) {
      val.subType = "NORMAL";
      return val;
    }
  }
});

// console.log([
//   {
//     clientId: 'asd90asd9087as',
//   },{
//     clientId: 'asdad235423',
//   },{
//     clientId: 'asd90asdfa345345asd9087as',
//   },{
//     clientId: 'asdfgsgw563456',
//   },
// ].map(val=>val.clientId).join());

const time1 = '991002123456';

const getTime = (t) => {
  // eslint-disable-next-line no-param-reassign
  t = t.toString();
  const Time = `${time1.slice(0, 2)}-${time1.slice(2, 4)}-${time1.slice(4, 6)}T${time1.slice(  6,  8)}:${time1.slice(8, 10)}:${time1.slice(10, 12)}`
  return new Date(Time);
};


console.log( getTime())