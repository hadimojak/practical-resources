// const persianDate = require('persian-date');

// var day = new Date('20201221000000'.slice(0, 4), '20201221000000'.slice(4, 6), '20201221000000'.slice(6, 8))
// var dayWrapper = new persianDate(day).toLocale('en').format('L')

// console.log(day)

const arr = [
  {
    channel: 1,
    comment:
      'مشترک گرامی شما پاسخگوی تماس کارشناسان در تاریخ 1401/04/22ساعات 11:32و 14:45جهت رفع مشکل همراه من نبودید. نسبت به حذف و نصب مجدد اپلیکیشن اقدام نموده و یا از نسخه pwa.mci.ir استفاده کنید. در صورت عدم رفع مشکل با 9990 تماس حاصل نمایید. با تشکر همراه اول',
    commentDate: '2022-07-13 15:07:56',
    creationTime: '2022-07-13 12:07:32',
    handleNo: 9920664692,
    serialNo: 20220713003469,
    serviceTypeID: 111005014,
    serviceTypeName: 'هماره من[5]',
    staffId: '',
    status: 'Close',
    workGroup: '',
  },
  {
    channel: 1,
    comment:
      'طی تماس با مشترک در تاریخ  09/05/1401 ساعت 19:40 راهنمایی لازم انجام شده که می بایست مجدد مشکل را بررسی و تنظیمات اینترنت گوشی (  پورت  و  پروکسی  )  خالی باشد و اینترنت  و VPN گوشی را بررسی کنند  و  مشترک می بایست اپلیکیشن همراه من را حذف و مجدد از سایت همراه من MY.MCI.IR  دانلود و نصب کرده و مشکل را مجدد بررسی کنند و در صورت عدم مرفع مشکل از نسخه تحت وب همراه من PWA.MCI.IR  مشکل را بررسی کنند',
    commentDate: '2022-07-31 21:07:54',
    creationTime: '2022-07-30 20:07:31',
    handleNo: 9920664692,
    serialNo: 20220730008802,
    serviceTypeID: 111005014,
    serviceTypeName: '[5] همراه من > [5-14] مشکلات همراه من- مشکل ورود به همراه من',
    staffId: '',
    status: 'Close',
    workGroup: '',
  },
  {
    channel: 1,
    comment: 'طی تماس در خصوص پیامک ارسال شده اطلاع رسانی شد',
    commentDate: '2022-08-10 14:08:16',
    creationTime: '2022-08-05 15:08:22',
    handleNo: 9920664692,
    serialNo: 20220805001748,
    serviceTypeID: 111005014,
    serviceTypeName: '[5] همراه من > [5-14] مشکلات همراه من- مشکل ورود به همراه من',
    staffId: '',
    status: 'Handle4',
    workGroup: '',
  },
  {
    channel: 1,
    comment:
      'مشترک گرامی شما پاسخگوی تماس کارشناسان در تاریخ 1401/05/22ساعات 14:38و 12:35جهت رفع مشکل پرونده ایجادشده نبودید. در صورت  اقدام به حذف و نصب برنامه و بررسی در سایت  pwa.mci.ir و عدم رفع مشکل با 9990 تماس حاصل نمایید. با تشکر همراه اول',
    commentDate: '2022-08-13 16:08:22',
    creationTime: '2022-08-11 16:08:41',
    handleNo: 9920664692,
    serialNo: 20220811004641,
    serviceTypeID: 111005014,
    serviceTypeName: '[5] همراه من > [5-14] مشکلات همراه من- مشکل ورود به همراه من',
    staffId: '',
    status: 'Handle4',
    workGroup: '',
  },
  {
    channel: 1,
    comment:
      'مشترک گرامی طی بررسی و تماس در تاریخ 1401/05/25 ساعت 13:19 مشکلی جهت ورود به همراه من مشاهده نگردید. نسبت به حذف و نصب مجدد اپلیکیشن اقدام نموده و یا از سایت pwa.mci.ir استفاده کنید. با تشکر همراه اول',
    commentDate: '2022-08-16 15:08:06',
    creationTime: '2022-08-15 15:08:47',
    handleNo: 9920664692,
    serialNo: 20220815005603,
    serviceTypeID: 111005014,
    serviceTypeName: '[5] همراه من > [5-14] مشکلات همراه من- مشکل ورود به همراه من',
    staffId: '',
    status: 'Feedback',
    workGroup: '',
  },
  {
    channel: 1,
    comment:
      'طی تماس و تست همزمان در تاریخ  1401/05/30 ساعت 14:45 مشکلی جهت ورود به همراه من روئیت نشد.توضیحات لازم در خصوص بررسی تنظیمات اینترنت به روز رسانی و حذف و نصب و در نهایت تست گوشی ارائه گردید.',
    commentDate: '2022-08-21 14:08:00',
    creationTime: '2022-08-20 19:08:39',
    handleNo: 9920664692,
    serialNo: 20220820007792,
    serviceTypeID: 111005014,
    serviceTypeName: '[5] همراه من > [5-14] مشکلات همراه من- مشکل ورود به همراه من',
    staffId: '',
    status: 'Feedback',
    workGroup: '',
  },
  {
    channel: 1,
    comment: 'طی   تماس تلفنی  درتاریخ  03/09/01  در10:59  با  راهنمایی لازمه  حذف  ونصب همراه  من مشترک  اعلام  نمود  مشکل  ورودبه  همراه  من  برطرف  شده است',
    commentDate: '2022-11-24 11:11:59',
    creationTime: '2022-11-23 15:11:53',
    handleNo: 9920664692,
    serialNo: 20221123003839,
    serviceTypeID: 111005014,
    serviceTypeName: '[5] همراه من > [5-14] مشکلات همراه من- مشکل ورود به همراه من',
    staffId: '',
    status: 'Handle3',
    workGroup: '',
  },
  {
    channel: 1,
    comment: 'مشترک گرامی طی بررسی صورت گرفته مشکل ورود به سامانه همراه من طی 2 روز کاری آینده مرتفع خواهد شد. با تشکر همراه اول',
    commentDate: '2022-12-13 15:12:58',
    creationTime: '2022-12-13 13:12:20',
    handleNo: 9920664692,
    serialNo: 20221213003222,
    serviceTypeID: 111005014,
    serviceTypeName: '[5] همراه من > [5-14] مشکلات همراه من- مشکل ورود به همراه من',
    staffId: '',
    status: 'Handle3',
    workGroup: '',
  },
  {
    channel: 1,
    comment: 'مشترک گرامی طی بررسی صورت گرفته مشکل ورود به سامانه همراه من طی 2 روز کاری آینده مرتفع خواهد شد. با تشکر همراه اول',
    commentDate: '2022-12-13 15:12:58',
    creationTime: '2022-12-13 13:12:20',
    handleNo: 9920664692,
    serialNo: 20221213003222,
    serviceTypeID: 111005014,
    serviceTypeName: '[5] همراه من > [5-14] مشکلات همراه من- مشکل ورود به همراه من',
    staffId: '',
    status: 'Analyze',
    workGroup: '',
  },
  {
    channel: 12312,
    comment: 'مشترک گرامی طی بررسی صورت گرفته مشکل ورود به سامانه همراه من طی 2 روز کاری آینده مرتفع خواهد شد. با تشکر همراه اول',
    commentDate: '2022-12-13 15:12:58',
    creationTime: '2022-12-13 13:12:20',
    handleNo: 9920664692,
    serialNo: 20221213003222,
    serviceTypeID: 111005014,
    serviceTypeName: '[5] همراه من > [5-14] مشکلات همراه من- مشکل ورود به همراه من',
    staffId: '',
    status: 'Analyze',
    workGroup: '',
  },
];

const statusEnum = {
  Close: 'CLOSED',
  Handle4: 'OPEN',
  Feedback: 'FEEDBACK',
  Handle3: 'DONE',
  Analyze: 'ANALYZE',
};

const filteredTT = arr.filter((val) => {
  val.status = statusEnum[val.status];
  return val;
});

// const mappedTT = arr.map((val) => {
//   val.status = statusEnum[val.status];
//   val = { name: val.serviceTypeName };
//   return val
// });

const reduced = filteredTT.reduce((result, val) => {
  if (result.find((p) => p.status === 'ANALYZE')) {
    if (val.status === 'ANALYZE') {
      result.splice(
        result.findIndex((x) => x.status === 'ANALYZE'),
        1,
      );
      result.push(val);
      return result;
    }
  } else {
    result.push(val);
    return result;
  }
}, []);

// console.log(reduced);
// const txt = mappedTT[0].name
// console.log(txt)
// if (txt.indexOf(']') + 1 === txt.length) {
//   console.log(txt.slice(0, txt.indexOf('[')))
// }
// console.log(
//   txt.slice((txt.indexOf(']') + 1), (txt.indexOf('>')))
// )

const enumDesc = {
  FEEDBACK: "تیکت شما بررسی و پاسخ داده شده است. کارشناسان ما جهت انجام نظرسنجی از طریق پیامک یا تلفن با شما در ارتباط خواهند بود.",
  CLOSED: "بررسی تیکت شما به اتمام رسیده است.",
};

const remap = reduced.map((val) => {
  let desc;
  if (val.status === 'FEEDBACK' || val.status === 'CLOSED') desc = enumDesc[val.status]
  else desc = "تیکت شما در حال بررسی و اقدام می باشد. به محض اتمام بررسی اطلاع رسانی خواهد شد."
  val.description = desc;
  val.creationTime = val.creationTime.split(' ').join('T')
  return { ...val }
});

const a = remap[0]
const b = remap[1]
const aDate = new Date(a.creationTime).getTime()
const bDate = new Date(b.creationTime).getTime()
// console.log(aDate<bDate)

const sorted = remap.sort(function (a, b) {
  var dateA = new Date(a.creationTime).getTime();
  var dateB = new Date(b.creationTime).getTime();
  return dateB-dateA
})

console.log(sorted)