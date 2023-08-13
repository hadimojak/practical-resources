const TimeSpans = [
  {
    Id: 'fe205918-c057-ed11-b814-005056b45061',
    Name: '1401/08/20 - 8:00 AM - 12:00 PM ',
    StartDate: '2022-11-11T08:00:00',
    EndDate: '2022-11-11T12:00:00',
    Remained: 42,
  },
  {
    Id: '06215918-c057-ed11-b814-005056b45061',
    Name: '1401/08/20 - 12:01 PM - 4:00 PM ',
    StartDate: '2022-11-12T12:01:00',
    EndDate: '2022-11-11T16:00:00',
    Remained: 7,
  },
  {
    Id: '06215918-c057-ed11-b814-005056b45061',
    Name: '1401/08/20 - 12:01 PM - 4:00 PM ',
    StartDate: '2022-11-13T12:01:00',
    EndDate: '2022-11-11T16:00:00',
    Remained: 7,
  },
  {
    Id: '06215918-c057-ed11-b814-005056b45061',
    Name: '1401/08/22 - 12:01 PM - 4:00 PM ',
    StartDate: '2022-11-14T12:01:00',
    EndDate: '2022-11-11T16:00:00',
    Remained: 7,
  },
  {
    Id: '06215918-c057-ed11-b814-005056b45061',
    Name: '1401/08/23 - 12:01 PM - 4:00 PM ',
    StartDate: '2022-11-15T12:01:00',
    EndDate: '2022-11-11T16:00:00',
    Remained: 7,
  },
  {
    Id: '06215918-c057-ed11-b814-005056b45061',
    Name: '1401/08/23 - 12:01 PM - 4:00 PM ',
    StartDate: '2022-11-15T12:01:00',
    EndDate: '2022-11-11T16:00:00',
    Remained: 7,
  },
  {
    Id: '06215918-c057-ed11-b814-005056b45061',
    Name: '1401/08/23 - 12:01 PM - 4:00 PM ',
    StartDate: '2022-11-15T12:01:00',
    EndDate: '2022-11-11T16:00:00',
    Remained: 7,
  },
];

const daySpans = TimeSpans.reduce((result, val) => {
  const day = new Date(val.StartDate).getDay() + 1;
  if (!result.find((item) => item.dayOfWeek === day)) {
    result.push({
      id: 'uuid.v4()',
      dayType: 'NORMAL',
      dayOfWeek: day,
      timeSpans: [],
      date: val.StartDate.split('T')[0],
      status: 'ACTIVE',
    });
    return result;
  } else {
    return result;
  }
}, []);

console.log(TimeSpans.map((val) => new Date(val.StartDate).getDay() + 1));

const timeSpans = TimeSpans.forEach((val) => {
  const day = new Date(val.StartDate).getDay() + 1;
  const daySpan = daySpans.find((item) => item.dayOfWeek === day);
  const obj = {
    id: val.Id,
    from: val.StartDate.split('T')[1],
    to: val.EndDate.split('T')[1],
    timeSpanCapacity: val.Remained,
    amount: 0,
    deactivationMinute: 0,
    status: 'ACTIVE',
  };
  daySpan.timeSpans.push(obj);
});

console.log(daySpans.find((val) => val.dayOfWeek === 3));
