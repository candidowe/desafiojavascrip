class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        switch (this.tipo) {
            case "Mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "Necromanger":
                ataque = "usou magia negra";
                break;
            case "estrategista":
                ataque = "usando inteligencia";
                break;
            default:
                ataque = "não tem um ataque definido";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe Hero
const heroi = new Hero("Aivar", 22, "estrategista");
heroi.atacar(); // Saída: "O guerreiro atacou usando espada"
