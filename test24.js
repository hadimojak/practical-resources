const obj = {
  resultCode: "0",
  resultDescription: "Operation successfully.",
  invoiceInfo: {
    acctKey: "8010032011015914",
    custKey: "8010012042483185",
    subKey: "8010022011015914",
    primaryIdentity: "9123116646",
    invoiceId: "1975073761",
    invoiceNo: "14011200-63399055",
    billCycleId: "20230201",
    billCycleBeginTime: "20230220000000",
    billCycleEndTime: "20230321000000",
    invoiceDate: "20230323040636",
    dueDate: "20230404000000",
    status: "C",
    invoiceSummary: {
      crmCostCodeList: [
        {
          packageCode: "22",
          desc: "InternetPackage",
        },
        {
          packageCode: "22",
          desc: "InternetPackage",
        },
        {
          packageCode: "44",
          desc: "InternetPackage",
        },
        {
          packageCode: "44",
          desc: "InternetPackage",
        },
      ],
      specialServiceCodeList: [],
      packageCodeList: [
        {
          packageCode: "87",
          desc: "InternetPackage",
        },
        {
          packageCode: "87",
          desc: "InternetPackage",
        },
        {
          packageCode: "87",
          desc: "InternetPackage",
        },
        {
          packageCode: "88",
          desc: "InternetPackage",
        },
        {
          packageCode: "88",
          desc: "InternetPackage",
        },
        {
          packageCode: "88",
          desc: "InternetPackage",
        },
        {
          packageCode: "88",
          desc: "InternetPackage",
        },
      ],
    },
  },
};

let counts = obj.invoiceInfo.invoiceSummary.packageCodeList.reduce(
  (result, val) => {
    if (!result[val.packageCode]) {
      result[val.packageCode] = 1;
      return result;
    } else if (result[val.packageCode]) {
      result[val.packageCode]++;
      return result;
    }
  },
  {}
);

counts = {
  ...counts,
  ...obj.invoiceInfo.invoiceSummary.crmCostCodeList.reduce((result, val) => {
    if (!result[val.packageCode]) {
      result[val.packageCode] = 1;
      return result;
    } else if (result[val.packageCode]) {
      result[val.packageCode]++;
      return result;
    }
  }, {}),
};



console.log(txt)