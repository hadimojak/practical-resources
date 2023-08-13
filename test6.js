const res1 = {
  Requests: [
    {
      ApplicatorMobileNo: '0912*******',
      RequestId: 'c9b98826-6ddb-ec11-b80f-005056b45061',
      CallerName: ' mohammadreza',
      CallerPhone: '',
      CallerMobileNo: '0912*******',
      NationalCode: '**********',
      DiscountCode: '',
      Region: '',
      Address: 'tehran',
      Latitude: 0,
      Longitude: 0,
      RequestItems: [
        {
          RequestId: 'c9b98826-6ddb-ec11-b80f-005056b45061',
          RequestItemId: 'd5b98826-6ddb-ec11-b80f-005056b45061',
          MobileNo: '0912*******',
          PersonName: '',
          NationalCode: '**********',
          ServiceTypeProductId: '5478df2e-950b-ec11-b803-005056b45061',
        },
      ],
      TimeSpanId: 'd5103632-46d5-ec11-b80e-005056b45061',
      CityId: '6dcbff5c-fcd3-eb11-b7ff-005056b45061',
      ServiceTypeProductId: '5478df2e-950b-ec11-b803-005056b45061',
      EmergencyNo: '021********',
      CalculatedCost: 300000,
      CostAfterDiscountCalculated: 300000,
      OperatorName: '',
      OperatorMobileNumber: '',
      TotalPayablePrice: 350000,
      TotalRequestItemsPrice: 50000,
      StatusValue: 276160003,
      RequestNumber: '799808',
      EndReserveTime: '2022-11-30T08:30:00Z',
      CreatedOn: '2021-11-23T08:00:00',
    },
  ],
  IsSuccessful: true,
  ErrorMessage: null,
  ResponseMessage: '',
  ErrorCode: 0,
};

const res2 = {
  Requests: {
    Body: [
      {
        ApplicatorMobileNo: '0912*******',
        RequestId: 'c9b98826-6ddb-ec11-b80f-005056b45061',
        CallerName: ' mohammadreza',
        CallerPhone: '',
        CallerMobileNo: '0912*******',
        NationalCode: '**********',
        DiscountCode: '',
        Region: '',
        Address: 'tehran',
        Latitude: 0,
        Longitude: 0,
        RequestItems: [
          {
            RequestId: 'c9b98826-6ddb-ec11-b80f-005056b45061',
            RequestItemId: 'd5b98826-6ddb-ec11-b80f-005056b45061',
            MobileNo: '0912*******',
            PersonName: '',
            NationalCode: '**********',
            ServiceTypeProductId: '5478df2e-950b-ec11-b803-005056b45061',
          },
        ],
        TimeSpanId: 'd5103632-46d5-ec11-b80e-005056b45061',
        CityId: '6dcbff5c-fcd3-eb11-b7ff-005056b45061',
        ServiceTypeProductId: '5478df2e-950b-ec11-b803-005056b45061',
        EmergencyNo: '021********',
        CalculatedCost: 300000,
        CostAfterDiscountCalculated: 300000,
        OperatorName: '',
        OperatorMobileNumber: '',
        TotalPayablePrice: 350000,
        TotalRequestItemsPrice: 50000,
        StatusValue: 276160003,
        RequestNumber: '799808',
        EndReserveTime: '2022-11-30T08:30:00Z',
        CreatedOn: '2021-11-23T08:00:00',
      },
    ],
  },
  IsSuccessful: true,
  ErrorMessage: null,
  ResponseMessage: '',
  ErrorCode: 0,
};

const res3 = {
  Requests: {
    Body: [],
  },
  IsSuccessful: true,
  ErrorMessage: null,
  ResponseMessage: '',
  ErrorCode: 0,
};

const randomProperty = () => {
  var keys = [res1, res2, res3];
  return keys[(keys.length * Math.random()) << 0];
};
const obj = randomProperty();

let CityId;
if (Array.isArray(obj.Requests)) {
  CityId = obj.Requests[0].CityId;
}
if (!Array.isArray(obj.Requests) && Array.isArray(obj.Requests.Body)) {
  if (obj.Requests.Body.length > 0) {
    CityId = obj.Requests.Body[0].CityId;
  }
}

const date = '2022-11-11T08:00:00';
// console.log("1401\/08\/20 - 8:00 AM - 12:00 PM ".split('-')[1]);

// console.log(new Date('1401/08/20').getDay());

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
    StartDate: '2022-11-11T12:01:00',
    EndDate: '2022-11-11T16:00:00',
    Remained: 7,
  },
  {
    Id: '06215918-c057-ed11-b814-005056b45061',
    Name: '1401/08/20 - 12:01 PM - 4:00 PM ',
    StartDate: '2022-11-11T12:01:00',
    EndDate: '2022-11-11T16:00:00',
    Remained: 7,
  },
  {
    Id: '06215918-c057-ed11-b814-005056b45061',
    Name: '1401/08/22 - 12:01 PM - 4:00 PM ',
    StartDate: '2022-11-11T12:01:00',
    EndDate: '2022-11-11T16:00:00',
    Remained: 7,
  },
  {
    Id: '06215918-c057-ed11-b814-005056b45061',
    Name: '1401/08/23 - 12:01 PM - 4:00 PM ',
    StartDate: '2022-11-11T12:01:00',
    EndDate: '2022-11-11T16:00:00',
    Remained: 7,
  },
];

const daySpans = TimeSpans.reduce((result, val) => {
  const day = new Date(val.StartDate).getDay();
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
  }
  if (result.find((item) => item.dayOfWeek === day)) {
    return result;
  }
}, []);

console.log(daySpans);
