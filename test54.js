const billResult = {
  resultCode: "0",
  resultDescription: "Operation successfully.",
  invoiceInfo: {
    acctKey: "8411000252918881",
    custKey: "8411000169991473",
    subKey: "8411000221610719",
    primaryIdentity: "9123143243",
    invoiceId: "2062265753",
    invoiceNo: "14020400-92543430",
    billCycleId: "20230601",
    billCycleBeginTime: "20230622000000",
    billCycleEndTime: "20230723000000",
    invoiceDate: "20230725042717",
    dueDate: "20230806000000",
    status: "O",
    invoiceSummary: {
      specialServiceCodeList: [],
      packageCodeList: [],
      totalVoiceCallsDuration: "47.933",
      subscriptionFee: "840.0",
      localVoiceCalls: "28711.108",
      internationVoiceCalls: "0.0",
      internationalRoamingCharges: "0.0",
      sms: "5734.0",
      vms: "0.0",
      mms: "0.0",
      internet: "0.0",
      vas: "0.0",
      packages: "0.0",
      specialServices: "0.0",
      crmCosts: "250000.0",
      totalAmount: "285285.108",
      discount: "0.0",
      tax: "25675.664",
      exemptionFee: "0.0",
      charity: "0.0",
      governmentGeneralIncome: "1350.0",
      sum: "312310.772",
      crmCostCodeList: [
        {
          crmCostCode: "33",
          desc: "Transfer of Ownership Fee",
        },
      ],
      totalOldDebts: "0.0",
      totalOldCredit: "0.0",
      unconfirmedPayment: "0.0",
      rounding: "310",
      payable: "312000",
      billId: "8916856430158",
      paymentId: "31222479",
      advancePayment: "0",
      egov: "0.0",
      onnetAmount: "28631.244",
      offnetAmount: "79.864",
      onnetDuration: "48",
      offnetDuration: "0",
      totatRatingDiscount: "0.0",
      voiceRatingDiscount: "0.0",
      smsRatingDiscount: "0.0",
      gprsRatingDiscount: "0.0",
      postToPreBt: "0",
    },
  },
};

let counts;
let crmCounts;
if (billResult.invoiceInfo?.invoiceSummary?.packageCodeList) {
  counts = billResult.invoiceInfo.invoiceSummary.packageCodeList.reduce(
    (result, val) => {
      if (!result[val?.packageCode]) {
        result[val?.packageCode] = 1;
        return result;
      } else if (result[val?.packageCode]) {
        result[val?.packageCode] += 1;
        return result;
      } else return result;
    },
    {}
  );
  crmCounts = billResult.invoiceInfo.invoiceSummary.crmCostCodeList.reduce(
    (result, val) => {
      if (!result[val?.crmCostCode]) {
        result[val?.crmCostCode] = 1;
        return result;
      } else if (result[val?.crmCostCode]) {
        result[val?.crmCostCode] += 1;
        return result;
      } else return result;
    },
    {}
  );
  console.log(counts, crmCounts);
}

let packagesStr = "";
for (const key in counts) {
  packagesStr += `${key}(${counts[key]} بار),`;
}
for (const key in crmCounts) {
  packagesStr += `${key}(${crmCounts[key]} بار),`;
}

console.log(packagesStr);
