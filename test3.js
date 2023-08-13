// const PersianDate =require('persian-date')

// const date ='2037-01-01T00:00:00'
// const msDate = new Date(date).getTime()
// console.log(new PersianDate(msDate).format('L'))
// const fs = require('fs');
// const path = require('path');

// let arr = JSON.parse(fs.readFileSync('./test.json'));

// arr = arr.Envelope.Body.QueryBalanceResultMsg.QueryBalanceResult.AcctList;

// const sum = arr.reduce((result, val) => {
//   if (val.BalanceResult.CurrencyID === 1069) {
//     result += val.BalanceResult.BalanceDetail.Amount;
//     return result;
//   }
// }, 0);

let smsTemplate = `this message is for %fullname% in %text% and on %address%`;

smsTemplate = smsTemplate.replace('%fullname%', 'hadi arbabi');
smsTemplate = smsTemplate.replace('%text%', 'hadi arbabi');
smsTemplate = smsTemplate.replace('%address%', 'hadi arbabi');

const obj = {
  id: 'f8a72b10-2f36-489f-9e25-76194eaa1e11',
  callerPhoneNumber: '+989121378267',
  callerVirtualNumber: '+989128888991',
  callerDisplayName: 'V.Behdasht',
  calleePhoneNumber: '+989122738297',
  calleeVirtualNumber: '+989128888891',
  calleeDisplayName: null,
  callDirection: 'Unidirectional',
  maximumNumberOfCalls: 2,
  maximumCumulativeDurationOfCalls: 300,
  notValidBefore: '2020-08-10T09:10:00Z',
  notValidAfter: '2020-08-10T09:20:00Z',
};

delete Object.assign(obj, { callerMsisdn: obj.callerPhoneNumber })['callerPhoneNumber'];

const items = [
  {
    id: 'f8a72b10-2f36-489f-9e25-76194eaa1e11',
    callerPhoneNumber: '+989121378267',
    callerVirtualNumber: '+989128888991',
    callerDisplayName: 'V.Behdasht',
    calleePhoneNumber: '+989122738297',
    calleeVirtualNumber: '+989128888891',
    calleeDisplayName: null,
    callDirection: 'Unidirectional',
    maximumNumberOfCalls: 2,
    maximumCumulativeDurationOfCalls: 300,
    notValidBefore: '2020-08-10T09:10:00Z',
    notValidAfter: '2020-08-10T09:20:00Z',
    activeIntervals: [
      {
        start: '2020-08-10T09:11:00Z',
        end: '2020-08-10T09:14:00Z',
      },
      {
        start: '2020-08-10T09:16:00Z',
        end: '2020-08-10T09:18:00Z',
      },
    ],
  },
  {
    id: 'f8a72b10-2f36-489f-9e25-76194eaa1e11',
    callerPhoneNumber: '+989121378267',
    callerVirtualNumber: '+989128888991',
    callerDisplayName: null,
    calleePhoneNumber: '+989122738297',
    calleeVirtualNumber: '+989128888891',
    calleeDisplayName: null,
    callDirection: 'Unidirectional',
    maximumNumberOfCalls: 3,
    maximumCumulativeDurationOfCalls: 620,
    notValidBefore: '2020-08-10T13:31:29Z',
    notValidAfter: '2020-08-10T13:39:29Z',
  },
];

const mappedItem = items.map((val) => {
  const obj = val;
  delete Object.assign(obj, { callerMsisdn: obj.callerPhoneNumber }).callerPhoneNumber;
  delete Object.assign(obj, { calleeMsisdn: obj.calleePhoneNumber }).calleePhoneNumber;
  delete Object.assign(obj, { callerVirtualMsisdn: obj.callerVirtualNumber }).callerVirtualNumber;
  delete Object.assign(obj, { calleeVirtualMsisdn: obj.calleeVirtualNumber }).calleeVirtualNumber;
  return val;
});

// console.log(mappedItem)

console.log(date1)

  let currentDate = new Date((new Date()).getTime() - new Date().getTimezoneOffset() * 60000).toISOString().substring(0, 19);
  currentDate = +currentDate.replaceAll('-', '').replaceAll(':', '').replace('T', '');

  console.log(currentDate)