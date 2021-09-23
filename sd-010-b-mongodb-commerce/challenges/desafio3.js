db.produtos.updateMany(
  { avaliacao: { $exists: false } },
  { 
    $set: { avaliacao: NumberInt("0") },
  },
);
db.produtos.updateMany(
  { tags: { $exists: true, $in: ["bovino"] } },
  { 
  $set: { avaliacao: NumberInt("5") },
  },
);
db.produtos.updateMany(
  { tags: { $exists: true, $in: ["ave"] } },
  { 
  $set: { avaliacao: NumberInt("3") },
  },
);
db.produtos.find({}, { _id: false, nome: true, avaliacao: true });
