const persianDate = require('persian-date');

const getGregorianDate = (date) => new persianDate([date.substring(0, 4), date.substring(5, 7), date.substring(8, 10)]).toCalendar('gregorian').toLocale('en').format('YYYY-MM-DD');

const status = 'active';

const item = [
  {
    packageNumber: 400622,
    score: 20,
  },
];

const offers = [
  {
    id: 'cefb10d9-f56a-4f9b-9528-271b51cbe069',
    class: 'topup.offer.mci',
    clientId: '9f740bf9-817a-4539-bb1d-43790fc93b75',
    createdts: '2021-01-18T22:41:00.000Z',
    creator: '00000000-0000-0000-0000-000000000000',
    status: 'ACTIVE',
    effts: '2020-10-01T00:00:00',
    expts: '2037-10-01T00:00:00',
    title: '10 دقيقه مکالمه و 20 پيامک 7 روزه درون شبکه',
    code: '400622',
    amount: 0,
    displayAmount: 0,
    supportedSimType: ['PREPAID', 'POSTPAID'],
    type: 'GIFTPACKAGE',
    priority: 2,
    info: {
      packageType: 'VOICE',
      packageTypeStr: 'بسته‌های مکالمه و ترکیبی',
    },
  },
];

const filteredOffers = offers.filter((val) =>
  item.find((score) => {
    if (score.packageNumber === +val.code) {
      val.score = score.score;
      return val;
    }
  }),
);

const arr2 = [
  { name: 'hadi', age: 21 },
  { name: 'hadi3', age: 21 },
  { name: 'hadi5', age: 21 },
];

const mapped = arr2.map((val) => {
  val.score = 1231;
  return val;
});

// console.log(getGregorianDate("1399/06/01"));
// console.log(new Date().toISOString().slice(0,10))

const arr = {'aa', 'bb'};

if ('aa' in arr) console.log('hast');
