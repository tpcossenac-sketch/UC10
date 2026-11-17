function calcularAcrescimo(valor, percentual) {
    if (valor <= 0 || percentual < 0 || percentual > 100) {
        throw new Error("Dados inválidos");
    }
    const acrescimo = valor * (percentual / 100);
    return valor + acrescimo;
}

function classificarDesempenho(nota) {
    if (nota < 0 || nota > 10) {
        throw new Error("Nota inválida");
    }
    if (nota >= 9) {
        return "Excelente";
    }
    if (nota >= 7) {
        return "Bom";
    }
    if (nota >= 5) {
        return "Regular";
    }
    return "Insuficiente";
}

function validarJogador(usuario, idade, pontuacao) {
    if (!usuario || usuario.trim() === "") {
        return false;
    }
    if (idade < 13 || idade > 80) {
        return false;
    }
    if (pontuacao < 0) {
        return false;
    }
    return true;
}

function calcularEntrega(valorCompra, distancia) {
    if (valorCompra < 0 || distancia < 0) {
        throw new Error("Valores inválidos");
    }
    if (valorCompra >= 300) {
        return 0;
    }
    if (distancia <= 5) {
        return 10;
    }
    return distancia * 2;
}

function converterRealParaDolar(valorReal, cotacao) {
    if (typeof valorReal !== "number" || typeof cotacao !== "number") {
        throw new Error("Os valores devem ser numéricos");
    }
    if (valorReal < 0 || cotacao <= 0) {
        throw new Error("Valores inválidos");
    }
    return valorReal / cotacao;
}

function calcularPedido(quantidade, precoUnitario) {
    if (quantidade <= 0 || precoUnitario < 0) {
        throw new Error("Dados inválidos");
    }
    return quantidade * precoUnitario;
}

function validarTamanhoSenha(senha) {
    if (senha.length < 6 || senha.length > 12) {
        return false;
    }
    return true;
}

function verificarDisponibilidade(estoque, quantidade) {
    if (quantidade <= 0) {
        throw new Error("Quantidade inválida");
    }

    if (estoque < 0) {
        throw new Error("Estoque inválido");
    }
    if (quantidade > estoque) {
        return "Estoque insuficiente";
    }
    return "Retirada autorizada";
}

function calcularMediaFinal(nota1, nota2) {
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        throw new Error("Notas inválidas");
    }
    return (nota1 + nota2) / 2;
}
