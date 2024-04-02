const userInfo = [
  ["Saix", 45, 40],
  ["Gabiru", 80, 45],
  ["Nick", 55, 43],
];

function rankCalculator(userInfo) {
  let result = "";

  for (i = 0; i < userInfo.length; i++) {
    let userName = userInfo[i][0];
    let balance = userInfo[i][1] - userInfo[i][2];

    if (balance <= 10) {
      result += "O jogador " + userName + " esta no rank Ferro\n";
    } else if (11 <= balance && balance <= 20) {
      result += "O jogador " + userName + " esta no rank Bronze\n";
    } else if (21 <= balance && balance <= 50) {
      result += "O jogador " + userName + " esta no rank Prata\n";
    } else if (51 <= balance && balance <= 80) {
      result += "O jogador " + userName + " esta no rank Ouro\n";
    } else if (81 <= balance && balance <= 90) {
      result += "O jogador " + userName + " esta no rank Diamante\n";
    } else if (91 <= balance && balance <= 100) {
      result += "O jogador" + userName + "esta no rank Lendario\n";
    } else if (balance <= 101) {
      result += "O jogador " + userName + "esta no rank Imortal\n";
    }
  }
  return result;
}

let phrase = rankCalculator(userInfo);
console.log(phrase);
