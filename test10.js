const arr = ['asd', 123, 'adfs', `21`];

const [first] = arr;
const activePlan = {
  resultCode: '0',
  resultDescription: 'success',
  data: {
    planId: '1498',
    score: '-10',
    effectiveDate: '1399/06/01',
    expireDate: '1399/06/25',
    planMaxChance: '50',
    userId: 'FMOTALEB',
    ussdDesc: 'جوايز 10 ميليوني شهريور99',
  },
};

activePlan.data.score = Math.abs(activePlan.data.score);
activePlan.data.planMaxChance = parseInt(activePlan.data.planMaxChance,10);

// console.log(activePlan.data);
const today = new Date().toISOString().slice(0,10)
// console.log(new Date().toISOString().slice(0,19))

// console.log(new Date().getTime())
// console.log(Math.floor((new Date().getTime()-new Date('2023-03-03T12:34:56').getTime())/86400000))

const status =3
if([3,4].includes(status)){console.log('oookkk')}