const arr = [
  {
    initial: 9,
    currnet: 1,
    serviceName: "INTERNET",
    unit: "Bytes",
    usageCategory: "NORMAL",
  },
  {
    initial: 1,
    currnet: 12,
    serviceName: "INTERNET",
    unit: "Bytes",
    usageCategory: "NORMAL",
  },
  {
    initial: 3,
    currnet: 12,
    serviceName: "INTERNET",
    unit: "Bytes",
    usageCategory: "ROAMING",
  },
  {
    initial: 3,
    currnet: 12,
    serviceName: "INTERNET",
    unit: "Bytes",
    usageCategory: "ROAMING",
  },
  {
    initial: 3,
    currnet: 6,
    serviceName: "SMS",
    unit: "Count",
    usageCategory: "ONNET",
  },
  {
    initial: 4,
    currnet: 6,
    serviceName: "SMS",
    unit: "Count",
    usageCategory: "ONNET",
  },
  {
    initial: 4,
    currnet: 6,
    serviceName: "SMS",
    unit: "Count",
    usageCategory: "NORMAL",
  },
  {
    initial: 4,
    currnet: 5,
    serviceName: "SMS",
    unit: "Count",
    usageCategory: "NORMAL",
  },
  {
    initial: 5,
    currnet: 5,
    serviceName: "VOICE",
    unit: "Second",
    usageCategory: "ROAMING",
  },
  {
    initial: 5,
    currnet: 5,
    serviceName: "VOICE",
    unit: "Second",
    usageCategory: "ROAMING",
  },
  {
    initial: 6,
    currnet: 2,
    serviceName: "VOICE",
    unit: "Second",
    usageCategory: "ROAMING",
  },
  {
    initial: 3,
    currnet: 3,
    serviceName: "VOICE",
    unit: "Second",
    usageCategory: "ONNET",
  },
  {
    initial: -1,
    currnet: -1,
    serviceName: "VOICE",
    unit: "Second",
    usageCategory: "ONNET",
  },
  {
    initial: 2,
    currnet: 2,
    serviceName: "VOICE",
    unit: "Second",
    usageCategory: "ONNET",
  },{
    initial: -1,
    currnet: -1,
    serviceName: "VOICE",
    unit: "Second",
    usageCategory: "ONNET",
  },
  {
    initial: 2,
    currnet: 2,
    serviceName: "VOICE",
    unit: "Second",
    usageCategory: "ONNET",
  },
];

arr.map((val) => {
  if (val.initial === -1 && val.currnet === -1) {
    val.unlimited = true;
  } else val.unlimited = false;
  return val;
});

// console.log(arr)

const reduced = arr.reduce((result, val) => {
  const prop = result.find(
    (p) =>
      p.serviceName === val.serviceName && p.usageCategory === val.usageCategory
  );
  if (prop) {
    if (prop.unlimited && val.unlimited) {
      result.splice(
        result.findIndex(
          (x) =>
            x.serviceName === prop.serviceName &&
            x.usageCategory === prop.usageCategory
        ),
        1
      );
      prop.unlimited = true;
      result.push(prop);

      return result;
    } else if (prop.unlimited && !val.unlimited) {
      prop.initial = val.initial;
      prop.currnet = val.currnet;
      result.splice(
        result.findIndex(
          (x) =>
            x.serviceName === prop.serviceName &&
            x.usageCategory === prop.usageCategory
        ),
        1
      );
      prop.unlimited = false;
      result.push(prop);

      return result;
    } else if (!prop.unlimited && val.unlimited) {
      result.splice(
        result.findIndex(
          (x) =>
            x.serviceName === prop.serviceName &&
            x.usageCategory === prop.usageCategory
        ),
        1
      );
      prop.unlimited = false;
      result.push(prop);

      return result;
    } else if (!prop.unlimited && !val.unlimited) {
      prop.initial += val.initial;
      prop.currnet += val.currnet;
      result.splice(
        result.findIndex(
          (x) =>
            x.serviceName === prop.serviceName &&
            x.usageCategory === prop.usageCategory
        ),
        1
      );
      prop.unlimited = false;
      result.push(prop);

      return result;
    }
  } else if (!prop) {
    result.push(val);

    return result;
  }
}, []);

console.log(reduced);
