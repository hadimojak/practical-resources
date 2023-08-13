const PersianDate = require('persian-date');

// console.log(new PersianDate(['1396']).toCalendar('gregorian').year())
const year = '12313123';

const callBackEnum = {
  1: 'WAITING',
  2: 'NOT_ANSWERED',
  3: 'UNREACHABLE',
  4: 'FAILED',
};

const arr = [
  {
    SN: '202111211504545751063',
    agentId: { '@_nil': 'true' },
    callBackNo: 9123142328,
    callBackReason: 14001,
    callBackResult: 1,
    callTime: '2021-11-21T15:04:54+03:30',
    callerNo: 9123142328,
    status: 0,
  },
  {
    SN: '202111211504545751063',
    agentId: { '@_nil': 'true' },
    callBackNo: 9123142328,
    callBackReason: 14001,
    callBackResult: 1,
    callTime: '2021-11-21T15:04:54+03:30',
    callerNo: 9123142328,
    status: 0,
  },
  {
    SN: '202111211504545751063',
    agentId: { '@_nil': 'true' },
    callBackNo: 9123142328,
    callBackReason: 14001,
    callBackResult: 1,
    callTime: '2021-11-21T15:04:54+03:30',
    callerNo: 9123142328,
    status: 0,
  },
  {
    SN: '202111211504545751063',
    agentId: { '@_nil': 'true' },
    callBackNo: 9123142328,
    callBackReason: 14001,
    callBackResult: 3,
    callTime: '2021-11-21T15:04:54+03:30',
    callerNo: 9123142328,
    status: 0,
  },
  {
    SN: '202111211504545751063',
    agentId: { '@_nil': 'true' },
    callBackNo: 9123142328,
    callBackReason: 14001,
    callBackResult: 2,
    callTime: '2021-11-21T15:04:54+03:30',
    callerNo: 9123142328,
    status: 0,
  },
  {
    SN: '202111211504545751063',
    agentId: { '@_nil': 'true' },
    callBackNo: 9123142328,
    callBackReason: 14001,
    callBackResult: 6,
    callTime: '2021-11-21T15:04:54+03:30',
    callerNo: 9123142328,
    status: 0,
  },
];

const mappedArr = arr.map((val) => {
  return { status: callBackEnum[val.callBackResult] ? callBackEnum[val.callBackResult] : 'UNKNOWN' };
});

const obj = {
  id: 'uuid',
  attributes: {
    services: {
      mci: {
        acl: [
          {
            name: 'CHILDAPN',
            access: 'WHITELIST',
          },
        ],
      },
    },
  },
};

const arr1 = [
  {
    installmentNo: '1',
    amount: '874000',
    dueDate: '2020-08-07 02:31:45',
    payDate: '2020-08-04 02:31:45',
  },
  {
    installmentNo: '1',
    amount: '874000',
    dueDate: '2020-08-07 02:31:45',
    payDate: '2020-08-04 02:31:45',
  },
  {
    installmentNo: '1',
    amount: '874000',
    dueDate: '2020-08-07 02:31:45',
    payDate: '2020-08-04 02:31:45',
  },
  {
    installmentNo: '1',
    amount: '874000',
    dueDate: '2020-08-07 02:31:45',
    payDate: '2020-08-04 02:31:45',
  },
];

const mappp = arr1.map((val) => {
  delete Object.assign(val, { no: val.installmentNo }).installmentNo;
  val.amount = +val.amount;
  val.dueDate = val.dueDate.split(' ').join('T');
  val.payDate = val.payDate.split(' ').join('T');
  return val;
});

// console.log(mappp);

const obj1 = { resultHeader: { version: '3.1.2', resultCode: 0, msgLanguageCode: 1213, resultDesc: 'success' }, reserveNumberResponse: { reserveCode: 20282429202 } };

console.log(obj1.reserveNumberResponse.reserveCode.toString())