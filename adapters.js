const mciAdapters = {
  serviceCategories: [
    {
      category: 1,
      type: 10,
      title: "تماس درون شبکه",
      primary: "VOICE",
    },
    {
      category: 0,
      type: 1110,
      title: "تماس تلفنی",
      primary: "VOICE",
    },
    {
      category: 0,
      type: 1170,
      title: "تماس بین الملل",
      primary: "VOICE",
    },
    {
      category: 0,
      type: 1160,
      title: "تماس رومینگ",
      primary: "VOICE",
    },
    {
      category: 1,
      type: 11,
      title: "تماس برون شبکه",
      primary: "VOICE",
    },
    {
      category: 1,
      type: 13,
      title: "تماس بین الملل",
      primary: "VOICE",
    },
    {
      category: 1,
      type: 15,
      title: "تماس رومینگ",
      primary: "VOICE",
    },
    {
      category: 1,
      type: 16,
      title: "صندوق صوتی",
      primary: "VOICE",
    },
    {
      category: 2,
      type: 21,
      title: "پیامک فارسی",
      primary: "SMS",
    },
    {
      category: 2,
      type: 22,
      title: "پیامک لاتین",
      primary: "SMS",
    },
    {
      category: 2,
      type: 23,
      title: "پیامک سرویس",
      primary: "SMS",
    },
    {
      category: 2,
      type: 24,
      title: "پیامک بین الملل",
      primary: "SMS",
    },
    {
      category: 2,
      type: 28,
      title: "پیامک رومینگ",
      primary: "SMS",
    },
    {
      category: 0,
      type: 1320,
      title: "پیامک محتوای GGI",
      primary: "SMS",
    },
    {
      category: 0,
      type: 1322,
      title: "پیامک رومینگ",
      primary: "SMS",
    },
    {
      category: 3,
      type: 25,
      title: "پیام چندرسانه ای درون شبکه",
      primary: "SMS",
    },
    {
      category: 3,
      type: 26,
      title: "پیام چندرسانه ای برون شبکه",
      primary: "SMS",
    },
    {
      category: 3,
      type: 27,
      title: "پیام چندرسانه ای بین الملل",
      primary: "SMS",
    },
    {
      category: 3,
      type: 29,
      title: "پیام چندرسانه ای رومینگ",
      primary: "SMS",
    },
    {
      category: 4,
      type: 0,
      title: "سرویس ارزش افزوده",
      primary: "OTHER",
    },
    {
      category: 6,
      type: 5,
      title: "محتوا",
      primary: "OTHER",
    },
    {
      category: 6,
      type: 62,
      title: "دولت الکترونیک",
      primary: "OTHER",
    },
    {
      category: 7,
      type: 0,
      title: "هزینه دوره ای",
      primary: "OTHER",
    },
    {
      category: 8,
      type: 0,
      title: "هزینه سرویس",
      primary: "OTHER",
    },
    {
      category: 9,
      type: 0,
      title: "تعدیل",
      primary: "OTHER",
    },
    {
      category: 10,
      type: 150,
      title: "شارژ فیزیکی",
      primary: "OTHER",
    },
    {
      category: 10,
      type: 151,
      title: "شارژ نقدی",
      primary: "OTHER",
    },
    {
      category: 10,
      type: 152,
      title: "شارژ الکترونیکی",
      primary: "OTHER",
    },
    {
      category: 10,
      type: 153,
      title: "بازگشت شارژ نقدی",
      primary: "OTHER",
    },
    {
      category: 14,
      type: 0,
      title: "وام",
      primary: "OTHER",
    },
    {
      category: 0,
      type: 120,
      title: "دریافت شارژ",
      primary: "OTHER",
    },
    {
      category: 0,
      type: 121,
      title: "ارسال شارژ",
      primary: "OTHER",
    },
    {
      category: 5,
      type: 31,
      title: "اینترنت",
      primary: "INTERNET",
    },
    {
      category: 5,
      type: 33,
      title: "اینترنت رومینگ",
      primary: "INTERNET",
    },
    {
      category: 0,
      type: 1361,
      title: "اینترنت",
      primary: "INTERNET",
    },
    {
      category: 0,
      type: 1362,
      title: "اینترنت رومینگ",
      primary: "INTERNET",
    },
  ],
  serviceSummaryCategories: [
    {
      category: 1,
      type: 0,
      name: "CALL",
    },
    {
      category: 0,
      type: 1110,
      name: "CALL",
    },
    {
      category: 0,
      type: 1170,
      name: "CALL",
    },
    {
      category: 0,
      type: 1160,
      name: "CALL",
    },
    {
      category: 2,
      type: 0,
      name: "SMS",
    },
    {
      category: 0,
      type: 1320,
      name: "SMS",
    },
    {
      category: 0,
      type: 1322,
      name: "SMS",
    },
    {
      category: 3,
      type: 0,
      name: "SMS",
    },
    {
      category: 5,
      type: 0,
      name: "INTERNET",
    },
    {
      category: 0,
      type: 1361,
      name: "INTERNET",
    },
    {
      category: 0,
      type: 1362,
      name: "INTERNET",
    },
  ],
  primaryService: {
    acls: [
      {
        id: "4ab2e218-9b47-49f0-88b7-d2a37df2d66b",
        type: "INTERNET",
      },
      {
        id: "05d2a934-414f-4fdf-97a4-27298d05d28c",
        type: "VOICE",
      },
      {
        id: "db05a4b6-43b0-4aad-830b-54f215dc9e21",
        type: "SMS",
      },
    ],
    otps: [
      {
        id: "5ea70cc-30b8-4e8c-9fc1-26033e9b06bb",
        type: "VOICE",
      },
      {
        id: "590da669-63c4-45e7-b0fa-7b841adda6c4",
        type: "SMS",
      },
    ],
  },
  summaryInternetType: [
    { value: 10, title: "IXP" },
    { value: 11, title: "IMS" },
    { value: 99, title: "FREE" },
    { value: 100, title: "FREE" },
  ],
};

module.exports = { ...mciAdapters };
