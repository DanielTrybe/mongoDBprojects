db.produtos.updateMany(
  {},
  { 
    $push: { valoresNutricionais: { $each: [], $sort: { percentual: -1 } } },
  },
);
db.produtos.find({}, { _id: false, nome: true, valoresNutricionais: true });
// https://docs.mongodb.com/manual/reference/operator/update/sort/
