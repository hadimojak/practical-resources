const arr = [
  {
    id: "5a64697b-6353-4919-9d41-4a10c040dc23",
    clientId: "9f740bf9-817a-4539-bb1d-43790fc93b75",
    code: "400610",
    title: "بسته هدیه انارستان 30 روزه 1 گیگ 20 دقیقه 200 پیامک ",
    type: "PACKAGE",
    amount: 0,
    displayAmount: 0,
    effts: "2020-10-01T00:00:00",
    expts: "2037-01-01T00:00:00",
    status: "ACTIVE",
    topupCode: "",
    view: false,
    supportedSimTypes: ["ANARESTAN"],
    info: {
      packageCategory: "NORMAL",
      packageType: "COMBINED",
      durationType: "MONTHLY",
      duration: 1,
      durationStr: "ماهانه",
      durationTypeStr: "ماهانه",
      packageContents: [
        {
          primaryService: "INTERNET",
          usageCategory: "ONNET",
          volume: 1,
          unit: "GB",
        },
        {
          primaryService: "VOICE",
          usageCategory: "NORMAL",
          volume: 20,
          unit: "MINUTE",
        },
        {
          primaryService: "SMS",
          usageCategory: "NORMAL",
          volume: 200,
          unit: "COUNT",
        },
      ],
      activationType: "SERVICE",
      renewal: false,
      reservable: false,
      activable: false,
      purchasable: false,
    },
    createdts: "2021-01-27T23:03:00.000Z",
  },
];

arr.map((val) => {
  val.data = [];
  val.info.packageContents.map((item) => {
    const data = {
      initial: -1,
      currnet: -1,
      serviceName: item.primaryService,
      type: item.usageCategory,
      unit: item.unit,
    };
    val.data = [...val.data, data];
    item.unlimited = true;
  });
});

console.log(arr[0]);
console.log(arr[0].info.packageContents);
