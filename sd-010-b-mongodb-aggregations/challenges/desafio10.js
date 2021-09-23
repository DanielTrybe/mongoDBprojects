db.trips.aggregate([{ $match: {
  startTime: { $exists: true },
  stopTime: { $exists: true },
} }, { $addFields: {
  tempo: { $subtract: ["$stopTime", "$startTime"] },
} }, { $group: {
  _id: "$usertype",
  duracaoMedia: { $avg: { $divide: ["$tempo", 60 * 60 * 1000] } },
} }, { $project: {
  _id: 0,
  tipo: "$_id",
  duracaoMedia: { $round: ["$duracaoMedia", 2] },
} }, { $sort: {
  duracaoMedia: 1,
} }]);
// // grato a ajuda do Pedro Henrique
