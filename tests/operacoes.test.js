
const { calcularAcrescimo, classificarDesempenho, validarJogador, calcularEntrega, converterRealParaDolar, calcularPedido, validarTamanhoSenha, verificarDisponibilidade, calcularMediaFinal } = require("../src/operacoes");

describe("Desafio 8 - O Controle do Inventário", () => {

    test("deve autorizar retirada quando há estoque suficiente", () => {
        expect(verificarDisponibilidade(20, 5))
            .toBe("Retirada autorizada");
    });

    test("deve informar estoque insuficiente", () => {
        expect(verificarDisponibilidade(5, 10))
            .toBe("Estoque insuficiente");
    });

    test("deve autorizar retirada de toda a quantidade disponível", () => {
        expect(verificarDisponibilidade(10, 10))
            .toBe("Retirada autorizada");
    });

    test("deve informar estoque insuficiente para quantidade zero", () => {
        expect(verificarDisponibilidade(10, 0))
            .toBe("Estoque insuficiente");
    });

    test("deve lançar erro para estoque negativo", () => {
        expect(() => verificarDisponibilidade(-5, 2))
            .toThrow("Estoque inválido");
    });

    test("deve lançar erro para quantidade negativa", ()  => {
        expect(() => verificarDisponibilidade(10, -3))
            .toThrow("Quantidade inválida");
    });

});