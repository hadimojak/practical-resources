const arr = [
  {
    AcctKey: 2611000001073013,
    BalanceResult: {
      BalanceType: "C_MAIN_ACCOUNT_18",
      BalanceTypeName: "Prepaid_Balance_Subaccount",
      TotalAmount: 1510472,
      CurrencyID: 1069,
      BalanceDetail: {
        BalanceInstanceID: 701,
        Amount: 1510472,
        InitialAmount: 1510472,
        UsedAmount: 0,
        EffectiveTime: 20200304105655,
        ExpireTime: 20370101033000,
      },
    },
    AccountCredit: {
      TotalCreditAmount: 0,
      TotalUsageAmount: 0,
      TotalRemainAmount: 0,
      CurrencyID: 1069,
    },
  },
  {
    AcctKey: 2611000001073013,
    BalanceResult: {
      BalanceType: "C_MAIN_ACCOUNT_18",
      BalanceTypeName: "Prepaid_Balance_Subaccount",
      TotalAmount: 1510472,
      CurrencyID: 1069,
      BalanceDetail: {
        BalanceInstanceID: 701,
        Amount: 1510472,
        InitialAmount: 1510472,
        UsedAmount: 0,
        EffectiveTime: 20200304105655,
        ExpireTime: 20370101033000,
      },
    },
    AccountCredit: {
      TotalCreditAmount: 0,
      TotalUsageAmount: 0,
      TotalRemainAmount: 0,
      CurrencyID: 1069,
    },
  },
  {
    AcctKey: 2611000001073013,
    BalanceResult: {
      BalanceType: "C_MAIN_ACCOUNT_18",
      BalanceTypeName: "Prepaid_Balance_Subaccount",
      TotalAmount: 1510472,
      CurrencyID: 1069,
      BalanceDetail: {
        BalanceInstanceID: 701,
        Amount: 1510472,
        InitialAmount: 1510472,
        UsedAmount: 0,
        EffectiveTime: 20200304105655,
        ExpireTime: 20370101033000,
      },
    },
    AccountCredit: {
      TotalCreditAmount: 0,
      TotalUsageAmount: 0,
      TotalRemainAmount: 0,
      CurrencyID: 1069,
    },
  },
];

const getTime = (time) =>
  new Date(
    `${time.toString().slice(0, 4)}-${time.toString().slice(4, 6)}-${time
      .toString()
      .slice(6, 8)}T${time.toString().slice(8, 10)}:${time
      .toString()
      .slice(10, 12)}:${time.toString().slice(12, 14)}`
  );

const { BalanceResult } = arr.find((val) => {
  const EffectiveTime = getTime(val.BalanceResult.BalanceDetail.EffectiveTime);
  const ExpireTime = getTime(val.BalanceResult.BalanceDetail.ExpireTime);

  if (
    val.BalanceResult.BalanceTypeName === "Prepaid_Balance_Subaccount" &&
    EffectiveTime < new Date() < ExpireTime
  ) {
    return val;
  }
});

console.log(BalanceResult.BalanceDetail.Amount);

// if (getTime(20200304105655) < new Date() < getTime(20300304105655))
//   console.log(true);
