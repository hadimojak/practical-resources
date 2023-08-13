// const finding = [159, 158, 163, 176];

// const response = [120, 150, 160, 170];

// console.log(finding.some((val) => response.find((item) => item === val)));
// const PersianDate = require('persian-date')

// const date = "1992-10-10";
// console.log(new PersianDate(new Date(date)).toLocale('en').format('L').split('/').join(''))

// const flag = true;

// const obj = { name: "hadi", age: "40",...(flag&&{addres:'tehran'}) };

// console.log(obj)

const obj = {
  resultHeader: {
    version: 1,
    resultCode: 0,
    resultDesc: "success",
  },
  queryCustomerInfoResponse: {
    customer: {
      customerId: "???",
      custBasicInfo: {
        custCode: 44287084,
        custType: 1,
        custClass: 1,
        partyId: 10204428708481,
        regionId: 10101,
      },
      individualInfo: {
        individualBaseInfo: {
          individualId: "???",
          firstName: "??",
          lastName: "گل پورلاسکی",
          title: 1,
          gender: 1,
          birthday: "????-07-23T00:00:00",
          nationality: "IRN",
          nativePlace: "فومن",
          occupation: "ocut95",
          writtenLang: "Persian",
          phoneticLang: 4,
          individualProperty: [
            { code: "fatherName", value: "??" },
            { code: "birthIDCardNumber", value: 1985 },
            { code: "birthIDCardIssuedPlace", value: "فومن" },
          ],
        },
        certificationInfo: {
          idType: "NationalID",
          idNumber: "??",
          issueCountry: "فومن",
        },
      },
      addressInfo: {
        addressId: "??",
        effDate: "2003-10-14T00:00:00",
        expDate: "2037-01-01T00:00:00",
        addrType: 6010506003,
        addressInfo: {
          addrId: 8110713500488335,
          addrClass: "S",
          addr1: "ایران",
          addr2: "گیلان",
          addr3: "رشت",
          usAddr: "??",
          postalCode: "??",
        },
      },
    },
  },
};

if (
  ["NationalID", "PlanningCard"].includes(
    obj.queryCustomerInfoResponse.customer.individualInfo.certificationInfo
      .idType
  )
)
  console.log(true);

// const id =
//   obj.queryCustomerInfoResponse.customer.individualInfo.individualBaseInfo.individualProperty.reduce(
//     (val, result) => {
//       if (val.code === "birthIDCardNumber") result = val.value;
//       return result;
//     },
//     ''
//   );

const id =
  obj.queryCustomerInfoResponse.customer.individualInfo.individualBaseInfo.individualProperty.find(
    (val) => val.code === "birthIDCardNumber"
  ).value;

// console.log(id);
