const arr = [
  {
    title: 'موسیقی فیلم',
    key: '40139d0b-b76f-4723-9cf2-5308d7db45e4',
    groupStatus: 'ACTIVE',
  },
  {
    title: 'سنتی',
    key: '035ee0b6-0698-41b4-a9e8-522dc86ee3de',
    groupStatus: 'ACTIVE',
  },
  {
    title: 'مذهبی',
    key: '555ce6bb-f20f-465f-a08a-ff700648beba',
    groupStatus: 'ACTIVE',
    children: [
      {
        title: 'شهادت معصومین',
        key: '6b9bf72c-4db9-47bb-b1a8-901a12607a1d',
        groupStatus: 'ACTIVE',
      },
      {
        title: 'محرم و صفر',
        key: '8ac58d60-99c5-4d90-8bb9-81e59bbd9502',
        groupStatus: 'ACTIVE',
      },
      {
        title: 'اعیاد مذهبی',
        key: 'bc28688a-060b-49cf-ba29-0e0ec8741b07',
        groupStatus: 'ACTIVE',
        children: [
          {
            title: 'عید غدیر',
            key: '0026fe18-898f-496c-ad14-219e40d9dc9d',
            groupStatus: 'ACTIVE',
          },
          {
            title: 'عید مبعث',
            key: 'a22a9021-ae23-44a8-8df5-7d431e2a7d99',
            groupStatus: 'ACTIVE',
          },
          {
            title: 'عید سعید فطر',
            key: '6f0f1c31-2b3b-46b7-849f-a8b7b5878377',
            groupStatus: 'ACTIVE',
          },
          {
            title: 'نیمه شعبان',
            key: '778e9dd7-d22d-43fa-91d1-5b9734e1c533',
            groupStatus: 'ACTIVE',
          },
          {
            title: 'ولادت معصومین',
            key: '550091c9-7141-4422-aa89-39160953f2d5',
            groupStatus: 'ACTIVE',
          },
          {
            title: 'عید قربان',
            key: '040826b1-daed-4123-a05b-10e49514a41f',
            groupStatus: 'ACTIVE',
          },
          {
            title: 'مذهبی - اعیاد مذهبی -  سایر',
            key: '6b9bf72c-4db9-47bb-b1a8-901a12607b1c',
            groupStatus: 'ACTIVE',
          },
        ],
      },
      {
        title: 'ماه مبارک رمضان',
        key: '7642bc45-35d7-47c5-8b4d-33894c2e9cd0',
        groupStatus: 'ACTIVE',
      },
      {
        title: 'سایر مذهبی',
        key: '6b9bf72c-4db9-47bb-b1a8-901a12607a7G',
        groupStatus: 'ACTIVE',
      },
    ],
  },
];

const reduced = arr.reduce((result, val) => {
  const obj1 = {
    category: val.key,
    title: val.title,
    imageUrl: `https://static-ebcom.mci.ir/mci/rbt/${val.key}.jpg`,
  };
  result.push(obj1);
  if ('children' in val) {
    val.children.forEach((val1) => {
      const obj2 = {
        category: val1.key,
        title: val1.title,
        imageUrl: `https://static-ebcom.mci.ir/mci/rbt/${val1.key}.jpg`,
      };
      if ('children' in val1) {
        val1.children.forEach((val2) => {
          const obj3 = {
            category: val2.key,
            title: val2.title,
            imageUrl: `https://static-ebcom.mci.ir/mci/rbt/${val2.key}.jpg`,
          };
          result.push(obj3)
        });
      }
      result.push(obj2);
    });
  }
  return result;
}, []);

// const reduced = [];
// arr.forEach((val1) => {
//   if ('children' in val1) {
//     reduced.push({
//       category: val1.key,
//       title: val1.title,
//       imageUrl: `https://static-ebcom.mci.ir/mci/rbt/${val1.key}.jpg`,
//     });

//     val1.children.forEach((val2) => {
//       if ('children' in val2) {
//         reduced.push({
//           category: val2.key,
//           title: val2.title,
//           imageUrl: `https://static-ebcom.mci.ir/mci/rbt/${val2.key}.jpg`,
//         });
//         val2.children.forEach((val3) => {
//             reduced.push({
//               category: val3.key,
//               title: val3.title,
//               imageUrl: `https://static-ebcom.mci.ir/mci/rbt/${val3.key}.jpg`,
//             });
//         });
//       } else {
//         reduced.push({
//           category: val2.key,
//           title: val2.title,
//           imageUrl: `https://static-ebcom.mci.ir/mci/rbt/${val2.key}.jpg`,
//         });
//       }
//     });
//   } else {
//     reduced.push({
//       category: val1.key,
//       title: val1.title,
//       imageUrl: `https://static-ebcom.mci.ir/mci/rbt/${val1.key}.jpg`,
//     });
//   }
// });

console.log(reduced);
