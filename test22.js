const arr1 = [
  {
    offerId: 111,
    offerName: "",
    shortName: "",
    confirmText: "",
    price: 172000,
    reservedOfferId: "",
    category: "1",
  },
  {
    offerId: 222,
    offerName: "",
    shortName: "",
    confirmText: "",
    price: 198000,
    reservedOfferId: "",
    category: "2",
  },
];

const arr2 = [
  {
    offerId: 111,
    offerName: "",
    shortName: "",
    confirmText: "",
    price: 172000,
    reservedOfferId: "",
    category: "1",
  },
  {
    offerId: 222,
    offerName: "",
    shortName: "",
    confirmText: "",
    price: 198000,
    reservedOfferId: "",
    category: "2",
  },
  {
    offerId: 6584,
    offerName: "",
    shortName: "",
    confirmText: "",
    price: 198000,
    reservedOfferId: "",
    category: "2",
  },
  {
    offerId: 651,
    offerName: "",
    shortName: "",
    confirmText: "",
    price: 198000,
    reservedOfferId: "",
    category: "2",
  },
];

const offerIds = new Set(arr1.map((p) => p.offerId));

const offers = [...arr1, ...arr2.filter((val) => !offerIds.has(val.offerId))];

const maped = offers.map((val) => {
  val.price = val.price - 10000;
  return val;
});


const arr3 =[2,3,4,5]


let price

[,,,price]=arr3


price= 4    
console.log(1000* 1.09)

