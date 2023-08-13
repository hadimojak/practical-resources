const persianDate = require('persian-date')

const arr = [
  {
    subInfo: {
      subsId: '???',
      ownerPartyRoleType: 'C',
      ownerPartyRoleId: '???',
      subsName: '???',
      subsWrittenLang: 'Persian',
      subsVocieLang: 4,
      offeringId: 114,
      brand: 2,
      primaryIdentity: '???',
      networkType: 1,
      defaultAcctId: '???',
      paymentType: 1,
      imsi: '??',
      iccid: '???',
      subType: 1,
      effDate: '2021-03-06T17:32:42',
      expDate: '2037-01-01T00:00:00',
      activeDate: '2021-03-06T17:32:42',
      status: 2,
      statusTime: '2021-03-06T17:36:14',
      statusDetail: 0,
      salesChannelType: 601,
      salesChannelId: 5000015487,
      beId: 10101,
    },
  },
  {
    subInfo: {
      subsId: '???',
      ownerPartyRoleType: 'C',
      ownerPartyRoleId: '???',
      subsName: '??',
      subsWrittenLang: 'Persian',
      subsVocieLang: 4,
      offeringId: 100,
      brand: 2,
      primaryIdentity: '??',
      networkType: 1,
      defaultAcctId: '???',
      paymentType: 1,
      imsi: '??',
      iccid: '??',
      subType: 1,
      effDate: '2002-01-14T12:24:00',
      expDate: '2037-01-01T00:00:00',
      activeDate: '2002-01-14T12:24:00',
      status: 2,
      statusTime: '2021-03-31T11:14:09',
      statusDetail: 0,
      salesChannelType: 601,
      salesChannelId: 10101,
      beId: 10101,
    },
  },
  {
    subInfo: {
      subsId: '???',
      ownerPartyRoleType: 'C',
      ownerPartyRoleId: '???',
      subsWrittenLang: 'Persian',
      subsVocieLang: 4,
      offeringId: 300005,
      brand: 1,
      primaryIdentity: '??',
      networkType: 1,
      defaultAcctId: '???',
      paymentType: 0,
      imsi: '???',
      iccid: '??',
      subType: 1,
      effDate: '2009-06-17T21:18:00',
      expDate: '2037-01-01T00:00:00',
      activeDate: '2009-06-17T21:18:00',
      status: 2,
      statusTime: '2020-04-12T09:05:51',
      statusDetail: 0,
      salesChannelType: 601,
      beId: 10101,
    },
  },
];

const obj = arr.reduce((result, val) => {
  if (val.subInfo.status === 2 && val.subInfo.subsName) {
    return Object.assign(result, {
      [val.subInfo.subsName]: 'ACTIVE',
    });
  } else {
    return result;
  }
}, {});

const obj1 = {
  Results:
    'اطالع رسانی سازمان ثبت اسناد,98201212,16073,PARDISAVALKISH,5\n600569,608004,اینترنتی اصناف,eckgw,102\n404279,20102010, آداب و احکام زیارت,pardiskish,2431;3431;4431;5431;6431;7431;ziarat;ziyarat;431;زیارت\n600109,608004, اخبار هنر,eckgw,302\n600481,608004,زیارت اخبار,eckgw,160\n600143,608004,کوهنوردی اخبار,eckgw,563',
};

const splited = obj1.Results.split('\n');

const mapped = splited.map((val) => val.split(','));

const result = mapped.reduce((result, item) => {
  const tempObj = {
    serviceId: item[0],
    title: item[1], // TODO what is $7 ?
    dailyAmount: item[2],
    effectiveTime: item[3],
    expiryTime: item[4],
    status: item[5],
  };
  result.push(tempObj);
  return result;
}, []);



const date = new Date();

// console.log(new Date(date.setFullYear(date.getFullYear() + 2)))

const getPersianFullDate = (date, char) => new persianDate(new Date(date)).toLocale('en').format(`YYYY${char}MM${char}DD`);

// console.log(getPersianFullDate(new Date(), '/'))
// console.log(new Date().toISOString().slice(11,16))

let na = '12345678'
if (na.length < 10) {
  const count = na.length
  for (let i = 0; i < 10 - count; i++) {
    na = `0${na}`
  }
}


const obj2 = {
  name:'aka',
  age:21,
  size:20
}

const exict = {
  name:obj2.name,
  ...(obj2.start && {start:obj2.start}),
  size:obj2.size
}

console.log(exict)