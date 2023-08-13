const numDate = (20200304105655).toString();

const date = `${numDate.slice(0, 4)}-${numDate.slice(4, 6)}-${numDate.slice(6, 8)}T${numDate.slice(8, 10)}:${numDate.slice(10, 12)}:${numDate.slice(12, 14)}`;

// console.log(new Date(date)<new Date())

const date1 = '2021-11-01T12:34:56';
const dif = new Date().getTime() - new Date(date1).getTime();

// console.log(dif/86400000)

const mainObj = {
  firstname: 'string',
  fathername: 'string',
  email: 'string',
  image: 'string',
  attributes: {
    an: 'shit',
    ssn:'asdasdasd'
  },
};

let attrBody = {};
const attrBodySample = ['msisdn', 'nationalCode', 'postalCode', 'address', 'fathername', 'gender', 'birthDate', 'ssn', 'locked'];
const locked = [];
const lockedSample = [
  'firstname',
  'lastname',
  'attributes.nationalCode',
  'attributes.postalCode',
  'attributes.address',
  'attributes.fathername',
  'attributes.gender',
  'attributes.ssn',
  'attributes.birthDate',
];
for (const key in mainObj) {
  if (typeof mainObj[key] === 'string') {
    if (lockedSample.includes(key)) locked.push(key);
    if (attrBodySample.includes(key)) attrBody[key] = mainObj[key];
  } else if (typeof mainObj[key] === 'object' && key === 'attributes') {
    for (const keyItem in mainObj[key]) {
      if (lockedSample.includes(`attributes.${keyItem}`)) locked.push(`attributes.${keyItem}`);
      if (attrBodySample.includes(keyItem)) attrBody[keyItem] = mainObj[key][keyItem];
    }
  }
}

// console.log(locked);
attrBody = { ...attrBody, locked: [...locked] };
console.log(attrBody);
