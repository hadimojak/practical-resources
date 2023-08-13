// console.log(new Date().getTimezoneOffset())

// console.log(new Date().toLocaleString('en-US', { timeZone: 'Asia/Tehran' }));

var moment = require('moment-timezone');
// console.log(moment().tz('Asia/Tehran').format());

function subtractHours(hours) {
  const date = new Date();

  date.setHours(date.getHours() - hours);

  return date;
}

// 8 AM on June 20, 2022
const time = new Date();

const newDate = subtractHours(1);

// 6 AM on June 20, 2022
// console.log(time); // 2022-06-20T06:00:00.000Z

// Original not modified
// console.log(newDate.toLocaleString()); // 2022-06-20T08:00:00.000Z

const registeredClients = [
  {
    clientId: '56464648648',
  },
  {
    clientId: '564646asdadqv48648',
  },
  {
    clientId: '564646123121248648',
  },
  {
    clientId: '12v312v3123v',
  },
  {
    clientId: '5n67567n',
  },
  {
    clientId: '56464648648',
  },
  {
    clientId: '8m678m678m67m8',
  },
];

console.log(registeredClients.map((val) => val.clientId).join(','));
