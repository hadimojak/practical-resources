const { summaryInternetType } = require("./adapters");
const fs = require("fs");

const cdrSumery = JSON.parse(fs.readFileSync("./test1.json"));

const { QueryCDRResultMsg } = cdrSumery.Envelope.Body;

const { CDRInfo } = QueryCDRResultMsg.QueryCDRResult;

const sortByDay = CDRInfo.reduce((result, val) => {
  if (result[val.EndTime.toString().slice(0, 8)]) {
    result[val.EndTime.toString().slice(0, 8)].push(val);
    return result;
  } else {
    result[val.EndTime.toString().slice(0, 8)] = [val];
    return result;
  }
}, {});

for (const key in sortByDay) {
  const eachDaySortByService = sortByDay[key].reduce((result, val) => {
    if (result[val.ServiceTypeName]) {
      result[val.ServiceTypeName].push(val);
      return result;
    } else {
      result[val.ServiceTypeName] = [val];
      return result;
    }
  }, {});
  sortByDay[key] = eachDaySortByService;
}

let lastArr = [];
for (const key in sortByDay) {
  const date = `${key.slice(0, 4)}-${key.slice(4, 6)}-${key.slice(6, 8)}`;
  const innerObj = sortByDay[key];
  for (const name in innerObj) {
    const innerArr = innerObj[name];

    const usage = innerArr.reduce((result, usage) => {
      return result + usage.VolumeInfo.ActualVolume;
    }, 0);

    const amount = innerArr.reduce((result, amount) => {
      return result + amount.TotalChargeInfo.ActualChargeAmt;
    }, 0);

    const ServiceCategory = innerArr[0].ServiceCategory;
    const SeriveType = innerArr[0].SeriveType;
    const ServiceTypeName = innerArr[0].ServiceTypeName;

    let type = "NORMAL";
    if (ServiceCategory === 5) {
      const { value } = innerArr[0]?.AdditionalProperty?.find(
        (q) => q.Code === "RATINGGROUP"
      );
      if ([10, 11, 99, 100].includes(value)) {
        const { title } = summaryInternetType.find((x) => x.value === value);
        type = title;
      } else {
        type = "INT";
      }
    }

    let serviceName = null;
    if ([0].includes(ServiceCategory)) serviceName = "CALL";
    if ([1110, 1170, 1160].includes(SeriveType)) serviceName = "CALL";

    if ([2, 3].includes(ServiceCategory)) serviceName = "SMS";
    if ([1320, 1322].includes(SeriveType)) serviceName = "SMS";

    if ([5].includes(ServiceCategory)) serviceName = "INTERNET";
    if ([1361, 1362].includes(SeriveType)) serviceName = "INTERNET";

    lastArr.push({
      date,
      serviceName,
      type,
      usage,
      amount
    });
  }
}

lastArr=lastArr.filter(val=>val.serviceName)

// console.log(sortByDay['20230215']['Internet access'][0]);
// console.log('--------------------------------');
// console.log(sortByDay['20230215']['Internet access'][5]);

console.log(lastArr.filter(val=>val.serviceName));
