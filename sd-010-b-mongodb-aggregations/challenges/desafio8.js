db.air_alliances.aggregate([{ $unwind: {
  path: "$airlines",
} }, { $lookup: {
  from: "air_routes",
  localField: "airlines",
  foreignField: "airline.name",
  as: "routes",
} }, { $unwind: {
  path: "$routes",
} }, { $match: {
  "routes.airplane": { $in: ["747", "380"] },
} }, { $group: {
  _id: "$name",
  totalRotas: { $sum: 1 },
} }, { $project: {
  _id: 1,
  totalRotas: { $max: "$totalRotas" },
} }, { $sort: {
  totalRotas: -1,
} }, {
  $limit: 1,
}]);
