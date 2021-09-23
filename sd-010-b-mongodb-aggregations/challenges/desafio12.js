db.trips.aggregate([{ $match: {
  startTime: { $exists: true },
} }, { $addFields: {
  weekDay: { $dayOfWeek: "$startTime" },
} }, { $group: {
  _id: { dia: "$weekDay", station: "$startStationName" },
  total: { $sum: 1 },
} }, { $sort: {
  total: -1,
} }, { $limit: 1 }, { $project: {
  _id: 0,
  nomeEstacao: "$_id.station",
  total: "$total",
} }]);
