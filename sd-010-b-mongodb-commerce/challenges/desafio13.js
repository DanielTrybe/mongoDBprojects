db.produtos.updateMany(
  { valoresNutricionais: { $elemMatch: { tipo: "sódio", percentual: { $gte: 40 } } } },
  { 
    $push: { tags: "muito sódio" },
  },
);
db.produtos.find({}, { _id: false, nome: true, tags: true });
// https://docs.mongodb.com/manual/reference/operator/query/elemMatch/
// https://app.betrybe.com/course/back-end/mongodb-updates-simples-e-complexos/updates-complexos-arrays-parte-2/4fd2d65a-b343-43a7-adb2-fc06227153f7/conteudos/02fbc3d8-a067-4634-950d-bdd4e84b9bfc/operador-elemmatch/e543c1cc-d430-445d-a655-23a5c12211eb?use_case=side_bar
