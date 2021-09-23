db.movies.aggregate([{ $addFields: {
  favoritos: [
    "Sandra Bullock",
    "Tom Hanks",
    "Julia Roberts",
    "Kevin Spacey",
    "George Clooney",
  ],
} }, { $match: {
  cast: { $exists: true },
  countries: { $in: ["USA"] },
  "tomatoes.viewer.rating": { $gte: 3 },
} }, { $addFields: {
  fav: { $size: { $setIntersection: ["$favoritos", "$cast"] } },
} }, { $sort: {
  fav: -1,
  "tomatoes.viewer.rating": -1,
  title: -1,
} }, { $project: {
  _id: 0,
  title: 1,
} }, { $skip: 24 }, { $limit: 1 }, { $project: {
  _id: 0,
  title: 1,
} }]);

// https://docs.mongodb.com/manual/reference/operator/aggregation/setIntersection/
// https://docs.mongodb.com/manual/reference/operator/query/size/
// Agradecido ao Lucas Portela por ajudar no entendimento desta questão
