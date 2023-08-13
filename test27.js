const time = 20200304105655;

const getTime = (t) => {
  t = t.toString();
  const Time = `${t.slice(0, 4)}-${t.slice(4, 6)}-${t.slice(6, 8)}T${t.slice(
    8,
    10
  )}:${t.slice(10, 12)}:${t.slice(12, 14)}`;
  return new Date(Time);
};

const acct = [{ name: "hadi", age: 30 }];

const arr = [
  {
    class: "auth.user",
    createdts: "2021-02-07T12:19:13.952Z",
    id: "006eae92-5316-4959-980f-2375cd546bd7",
    status: "ACTIVE",
    username: "9167194840",
  },
];

const arr1 = [
  { code: "fatherName", value: "فضل اله" },
  { code: "birthIDCardNumber", value: 1710 },
  { code: "birthIDCardIssuedPlace", value: "تهران" },
];

let { value: id } = arr1.find((val) => val.code === "birthIDCardNumber");

const obj = {
  firstname: "{firstname}",
  lastname: "{lastname}",
  attributes: {
    msisdn: "{username}",
    nationalCode: "{national code}",
    postalCode: "{postal code}",
    address: "{address}",
    fathername: "{fatherName}",
    gender: "{MALE/FEMALE if gender is 1/0}",
    birthDate: "{date part of birthday}",
    ssn: "{birthIDCardNumber; if birthIDCardNumber is 0, use national code instead}",
    // locked: [
    //   "firstname",
    //   "lastname",
    //   "attributes.nationalCode",
    //   "attributes.postalCode",
    //   "attributes.address",
    //   "attributes.fathername",
    //   "attributes.gender",
    //   "attributes.ssn",
    //   "attributes.birthdate",
    // ],
  },
};

let keys = [];

keys = Object.keys(obj).reduce((result, val) => {
  if (["firstname", "lastname"].includes(val)) {
    result.push(val);
    return result;
  } else {
    const attr = Object.keys(obj[val]).reduce((result1, val1) => {
      result1.push(`attributes.${val1}`);
      return result1;
    }, []);
    result.push(...attr)
    return result
  }
}, []);

console.log(keys);
