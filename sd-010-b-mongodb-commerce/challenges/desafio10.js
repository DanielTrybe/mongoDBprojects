db.produtos.updateMany(
  {},
  { 
    $push: { vendasPorDia: { $each: [0, 0, 0, 0, 0, 0, 0] } },
  },
);
db.produtos.updateOne(
  { nome: "Big Mac" },
  {
    $inc: { "vendasPorDia.3": 60 },
  },
);
db.produtos.updateOne(
  { tags: { $in: ["bovino", "pão"] } },
  {
    $inc: { "vendasPorDia.6": 120 },
  },
);
db.produtos.find({}, { _id: false, nome: true, vendasPorDia: true });
// grato ao denis pela ajuda
// https://docs.mongodb.com/manual/reference/operator/update/inc/
