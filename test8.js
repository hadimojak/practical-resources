const charity = [
  {
    charityId: '1502',
    ussdDesc: 'ساخت مدرسه در روستاي کيخا (استان سيستان و بلوچستان)',
    score: '-10',
    charityMaxForUser: '100',
    efDate: '1399/06/05',
    expireDate: '1399/08/10',
    effectiveTime: '00:00:00',
    charityMaxCount: '2000000',
    charityUseCount: '184693',
    scoreDesc: ' طرح نيکوکاري',
    isActive: 'active',
  },
  {
    charityId: '1502',
    ussdDesc: 'ساخت مدرسه در روستاي کيخا (استان سيستان و بلوچستان)',
    score: '-10',
    charityMaxForUser: '100',
    efDate: '1399/06/05',
    expireDate: '1399/08/10',
    effectiveTime: '00:00:00',
    charityMaxCount: '2000000',
    charityUseCount: '184693',
    scoreDesc: ' طرح نيکوکاري',
    isActive: 'deactive',
  },
  {
    charityId: '1502',
    ussdDesc: 'ساخت مدرسه در روستاي کيخا (استان سيستان و بلوچستان)',
    score: '-10',
    charityMaxForUser: '100',
    efDate: '1399/06/05',
    expireDate: '1399/08/10',
    effectiveTime: '00:00:00',
    charityMaxCount: '2000000',
    charityUseCount: '184693',
    scoreDesc: ' طرح نيکوکاري',
    isActive: 'active',
  },
  {
    charityId: '1502',
    ussdDesc: 'ساخت مدرسه در روستاي کيخا (استان سيستان و بلوچستان)',
    score: '-10',
    charityMaxForUser: '100',
    efDate: '1399/06/05',
    expireDate: '1399/08/10',
    effectiveTime: '00:00:00',
    charityMaxCount: '2000000',
    charityUseCount: '184693',
    scoreDesc: ' طرح نيکوکاري',
    isActive: 'deactive',
  },
  {
    charityId: '1502',
    ussdDesc: 'ساخت مدرسه در روستاي کيخا (استان سيستان و بلوچستان)',
    score: '-10',
    charityMaxForUser: '100',
    efDate: '1399/06/05',
    expireDate: '1399/08/10',
    effectiveTime: '00:00:00',
    charityMaxCount: '2000000',
    charityUseCount: '184693',
    scoreDesc: ' طرح نيکوکاري',
    isActive: 'deactive',
  },
  {
    charityId: '1502',
    ussdDesc: 'ساخت مدرسه در روستاي کيخا (استان سيستان و بلوچستان)',
    score: '-10',
    charityMaxForUser: '100',
    efDate: '1399/06/05',
    expireDate: '1399/08/10',
    effectiveTime: '00:00:00',
    charityMaxCount: '2000000',
    charityUseCount: '184693',
    scoreDesc: ' طرح نيکوکاري',
    isActive: 'deactive',
  },
];

const scores = [
  {
    id: 'cefb10d9-f56a-4f9b-9528-271b51cbe069',
    class: 'topup.offer.mci',
    clients: ['9f740bf9-817a-4539-bb1d-43790fc93b75'],
    createdts: '2021-01-18T22:41:00.000Z',
    creator: '00000000-0000-0000-0000-000000000000',
    status: 'ACTIVE',
    effts: '2020-10-01T00:00:00',
    expts: '2037-10-01T00:00:00',
    title: '10 دقيقه مکالمه و 20 پيامک 7 روزه درون شبکه',
    code: '1502',
    amount: 0,
    displayAmount: 0,
    supportedSimType: ['PREPAID', 'POSTPAID'],
    type: 'GIFTPACKAGE',
    info: {
      hdescription: '<div>text</div>',
    },
  },
];

const mappd = charity.filter((val) =>
  scores.find((item) => {
    if (item.code === val.charityId) {
      val.title = item.title;
      val.score = Math.abs(val.score);
      val.effts = item.effts;
      return val;
    }
  }),
);

const sortedByIsActive = mappd.sort((a, b) => {
  if (a.isActive === 'active' && b.isActive === 'active') return 0;
  if (a.isActive === 'deactive' && b.isActive === 'active') return 1;
  if (a.isActive === 'active' && b.isActive === 'deactive') return -1;
});

const sorted = [
  {
    charityId: '1502',
    ussdDesc: 'ساخت مدرسه در روستاي کيخا (استان سيستان و بلوچستان)',
    score: 10,
    charityMaxForUser: '100',
    efDate: '1399/06/05',
    expireDate: '1399/08/10',
    effectiveTime: '00:00:00',
    charityMaxCount: '2000000',
    charityUseCount: '184693',
    scoreDesc: ' طرح نيکوکاري',
    isActive: 'active',
    title: '10 دقيقه مکالمه و 20 پيامک 7 روزه درون شبکه',
    effts: '2020-10-01T00:00:00',
  },
  {
    charityId: '1502',
    ussdDesc: 'ساخت مدرسه در روستاي کيخا (استان سيستان و بلوچستان)',
    score: 10,
    charityMaxForUser: '100',
    efDate: '1399/06/05',
    expireDate: '1399/08/10',
    effectiveTime: '00:00:00',
    charityMaxCount: '2000000',
    charityUseCount: '184693',
    scoreDesc: ' طرح نيکوکاري',
    isActive: 'active',
    title: '10 دقيقه مکالمه و 20 پيامک 7 روزه درون شبکه',
    effts: '2020-10-02T00:00:00',
  },
  {
    charityId: '1502',
    ussdDesc: 'ساخت مدرسه در روستاي کيخا (استان سيستان و بلوچستان)',
    score: 10,
    charityMaxForUser: '100',
    efDate: '1399/06/05',
    expireDate: '1399/08/10',
    effectiveTime: '00:00:00',
    charityMaxCount: '2000000',
    charityUseCount: '184693',
    scoreDesc: ' طرح نيکوکاري',
    isActive: 'deactive',
    title: '10 دقيقه مکالمه و 20 پيامک 7 روزه درون شبکه',
    effts: '2020-10-05T00:00:00',
  },
  {
    charityId: '1502',
    ussdDesc: 'ساخت مدرسه در روستاي کيخا (استان سيستان و بلوچستان)',
    score: 10,
    charityMaxForUser: '100',
    efDate: '1399/06/05',
    expireDate: '1399/08/10',
    effectiveTime: '00:00:00',
    charityMaxCount: '2000000',
    charityUseCount: '184693',
    scoreDesc: ' طرح نيکوکاري',
    isActive: 'deactive',
    title: '10 دقيقه مکالمه و 20 پيامک 7 روزه درون شبکه',
    effts: '2020-05-01T00:00:00',
  },
  {
    charityId: '1502',
    ussdDesc: 'ساخت مدرسه در روستاي کيخا (استان سيستان و بلوچستان)',
    score: 10,
    charityMaxForUser: '100',
    efDate: '1399/06/05',
    expireDate: '1399/08/10',
    effectiveTime: '00:00:00',
    charityMaxCount: '2000000',
    charityUseCount: '184693',
    scoreDesc: ' طرح نيکوکاري',
    isActive: 'deactive',
    title: '10 دقيقه مکالمه و 20 پيامک 7 روزه درون شبکه',
    effts: '2020-01-01T00:00:00',
  },
  {
    charityId: '1502',
    ussdDesc: 'ساخت مدرسه در روستاي کيخا (استان سيستان و بلوچستان)',
    score: 10,
    charityMaxForUser: '100',
    efDate: '1399/06/05',
    expireDate: '1399/08/10',
    effectiveTime: '00:00:00',
    charityMaxCount: '2000000',
    charityUseCount: '184693',
    scoreDesc: ' طرح نيکوکاري',
    isActive: 'deactive',
    title: '10 دقيقه مکالمه و 20 پيامک 7 روزه درون شبکه',
    effts: '2019-10-01T00:00:00',
  },
];

const sortedByEffts = sorted
  .filter((val) => val.isActive === 'deactive')
  .sort((a, b) => {
    if (new Date(a.effts) < new Date(b.effts)) {
      return 1;
    }
    if (new Date(a.effts) > new Date(b.effts)) {
      return -1;
    }
    if (new Date(a.effts) === new Date(b.effts)) {
      return 0;
    }
  });

console.log([...sorted.filter((val) => val.isActive === 'active'), ...sortedByEffts]);
