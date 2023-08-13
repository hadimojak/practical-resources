db.movies.aggregate([
  { $match: { size: "medium" } },
  { $group: { _id: "$name", quant: { $sum: "$quantity" } } },
  { $project: { name: "$_id", quantity: "$quant", _id: false } },
  { $sort: { quantity: 1 } },
]);

db.movies.aggregate([
  { $project: { date: { $substr: ["$date", 0, 10] }, price: 1, quantity: 1 } },
  {
    $group: {
      _id: "$date",
      totalOrderVal: { $sum: { $multiply: ["$price", "$quantity"] } },
      avgOrderInq: { $avg: "$quantity" },
    },
  },
]);

db.zipcode.aggregate([
  { $group: { _id: "$state", population: { $sum: "$pop" } } },
  { $match: { population: { $gt: 10000000 } } },
]);
