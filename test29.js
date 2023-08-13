const voucher = "ABCD";
const serviceCode = "perspolis";
const national = "1234567890";

const arr = [
  {
    attributes: {
      nationalCode: "1234567890",
      clubs: [
        {
          serviceCode: "perspolis123",
          voucher: "ABCD",
          status: "ACTIVE",
        },
      ],
    },
  },
  {
    attributes: {
      nationalCode: "2456252",
      clubs: [
        {
          serviceCode: "perspolis",
          voucher: "ABCD",
          status: "ACTIVE",
        },
      ],
    },
  },
  {
    attributes: {
      nationalCode: "47856785678",
      clubs: [
        {
          serviceCode: "perspolis3",
          voucher: "ABCD",
          status: "ACTIVE",
        },
      ],
    },
  },
  {
    attributes: {
      nationalCode: "56785678",
      clubs: [
        {
          serviceCode: "perspolis4545",
          voucher: "ABCD",
          status: "ACTIVE",
        },
      ],
    },
  },
];

let nationalCode_;
for (let i = 0; i < arr.length; i++) {
  const { clubs } = arr[i].attributes;
  const nationalCode = arr[i].attributes.nationalCode;

  for (let j = 0; j < clubs.length; j++) {
    const {
      serviceCode: serviceCode_,
      voucher: voucher_,
      status: status_,
    } = clubs[j];
    if (
      serviceCode === serviceCode_ &&
      voucher === voucher_ &&
      ["ACTIVE", "INACTIVE"].includes(status_)
    ) {
        nationalCode_ = nationalCode;
    }
  }
}

console.log(nationalCode_)


// const {
//   attributes: { nationalCode },
// } = arr.find((val) => {
//   const last = val.attributes.clubs.find((p) => {
//     if (
//       p.serviceCode === serviceCode &&
//       p.voucher === voucher &&
//       ["ACTIVE", "INACTIVE"].includes(p.status)
//     )
//       return p;
//   });
//   if (last) return last;
// });

// console.log(nationalCode);
