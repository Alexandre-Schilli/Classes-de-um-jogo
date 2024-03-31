let heroInfo = [
  ["Saix", 5000],
  ["Gabiru", 8500],
  ["Nick", 7850],
];

for (i = 0; i < heroInfo.length; i++) {
  let nomeDoHeroi = heroInfo[i][0];
  let xpDoHeroi = heroInfo[i][1];

  if (xpDoHeroi <= 1000) {
    console.log("O Herói de nome", nomeDoHeroi, "está no nível de Ferro");
  } else if (xpDoHeroi > 1000 && xpDoHeroi <= 2000) {
    console.log("O Herói de nome", nomeDoHeroi, "está no nível de Bronze");
  } else if (xpDoHeroi > 2000 && xpDoHeroi <= 5000) {
    console.log("O Herói de nome", nomeDoHeroi, "está no nível de Prata");
  } else if (xpDoHeroi > 5000 && xpDoHeroi <= 7000) {
    console.log("O Herói de nome", nomeDoHeroi, "está no nível de Ouro");
  } else if (xpDoHeroi > 7000 && xpDoHeroi <= 8000) {
    console.log("O Herói de nome", nomeDoHeroi, "está no nível de Platina");
  } else if (xpDoHeroi > 8000 && xpDoHeroi <= 9000) {
    console.log("O Herói de nome", nomeDoHeroi, "está no nível Ascendente");
  } else if (xpDoHeroi > 9000 && xpDoHeroi <= 10000) {
    console.log("O Herói de nome", nomeDoHeroi, "está no nível de Imortal");
  } else if (xpDoHeroi > 10000) {
    console.log("O Herói de nome", nomeDoHeroi, "está no nível de Radiante");
  }
}
