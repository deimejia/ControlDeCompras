const arrayPrueba = [
  { tomate: "pasta", limon: "acido" },
  { peras: "dulce", kiwi: "exotico" },
  { manzanas: "suero", papaya: "digestivo" },
];

const arrayenfind = arrayPrueba.find((e) => e.tomate === "pasta");
console.log(arrayPrueba[0].limon);
console.log(arrayPrueba[0].limon.replace(arrayenfind.limon, "otroooo"));
