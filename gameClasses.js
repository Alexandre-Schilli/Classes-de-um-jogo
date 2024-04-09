class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago" || "Mago":
        ataque = "magia";
        break;
      case "guerreiro" || "Guerreiro":
        ataque = "espada";
        break;
      case "monge" || "Monge":
        ataque = "artes marciais";
        break;
      case "ninja" || "Ninja":
        ataque = "shuriken";
        break;
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

const personagemUm = new Heroi("Saix", 20, "guerreiro");
personagemUm.atacar();
const personagemDois = new Heroi("Gabiru", 22, "mago");
personagemDois.atacar();
