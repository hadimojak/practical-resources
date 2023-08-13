const obj = {
  name: 'hadi',
  age: 21,
  avg: 42.25,
  falg: true,
  arr: [1, 2],
};

const keys = Object.values(obj);

// if(keys.find(val=>!['string','number','boolean'].includes(typeof val))) console.log('err')

const obj1 = [
  {
    serviceCode: 'perspolis',
    id: '5d683711-b785-4224-b622-c579716a4e9f',
    voucher: 'abcd',
    serial: 123,
    clientId: '024fe592-1949-496e-b2a8-e5847dff4251',
    status: 'ACTIVE',
  },
];
// if(!obj1.some((val) => Object.keys(val).includes('serviceCode')) || obj1.some(val=>val.status!=='INACTIVE'))console.log('errrr')
const reduced = obj1.reduce((result, val) => {
  if (val.serviceCode === 'perspolis') {
    val.status = 'ACTIVE';
    result.push(val);
    return result;
  }
}, []);

// console.log(obj1.some((val) => !["ACTIVE", "INACTIVE"].includes(val.status)))

const obj2 = {
  firstname: 'string',
  lastname: 'string',
  email: 'string',
  nationalCode: '0078063507',
  attributes: {
    msisdn: '9121935901',
    gender: 'string',
    clubs: [
      {
        serviceCode: 'perspolis',
        clientId: 'uuid',
        id: '5d683711-b785-4224-b622-c579716a4e9f',
        voucher: 'abcd',
        accountId: '12345678',
        status: 'ACTIVE',
      },
      {
        serviceCode: 'perspolis',
        clientId: 'uuid',
        id: '5d683711-b785-4224-b622-c579716a4e9f',
        voucher: 'abcd',
        accountId: '12345678',
        status: 'ACTIVE',
      },
      {
        serviceCode: 'perspolis',
        clientId: 'uuid',
        id: '5d683711-b785-4224-b622-c579716a4e9f',
        voucher: 'abcd',
        accountId: '12345678',
        status: 'ACTIVE',
        likesCount: 1
      },
    ],
  },
};

const mapped = obj2.attributes.clubs
  .filter((val) => val.serviceCode === 'perspolis')
  .map((val) => {
    if (val.likesCount) val.likesCount++;
    else val.likesCount = 1;
    return val;
  });

  console.log(mapped)