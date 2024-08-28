function calcularRank(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determina o nível do jogador com base no número de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Exibe a mensagem com o saldo de vitórias e o nível do jogador
    console.log(`O Herói tem de saldo de: ${saldoVitorias} está no nível: ${nivel}`);
}

// Exemplo de uso da função
calcularRank(50, 20); // O Herói tem de saldo de 65 está no nível de Diamante