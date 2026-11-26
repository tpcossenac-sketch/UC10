
const { calcularAcrescimo, classificarDesempenho, validarJogador, calcularEntrega, converterRealParaDolar, calcularPedido, validarTamanhoSenha, verificarDisponibilidade, calcularMediaFinal } = require("../src/operacoes");

describe("DESAFIO 1 – O Cofre dos Valores Seguros", () => {

    test("Deve passar se valor for maior que 0, percentual maior que 0 e menor que 100.", () => {
        expect(calcularAcrescimo(1000, 50)).toBe(1500)
    });

    test("Deve aparecer mensagem de erro caso valor seja menor que 0", () => {
        expect(() => calcularAcrescimo(-600, 30)).toThrow("Dados inválidos")
    });

    test("Deve aparecer mensagem de erro caso percentual seja maior que 100", () => {
        expect(() => calcularAcrescimo(1500, 200)).toThrow("Dados inválidos")
    });

    test("Deve passar se o percentual for igual 0", () => {
        expect(calcularAcrescimo(1000, 0)).toBe(1000)
    });
});

describe("Desafio 2 - O Portal da Classificação", () => {

    test("Deve passar se nota for maior ou igual que 9", () => {
        expect(classificarDesempenho(10)).toBe("Excelente")
    });

    test("Deve aparecer mensagem de erro caso nota seja menor que 5", () => {
        expect(() => classificarDesempenho(3)).toThrow("Insuficiente")
    });

    test("Deve aparecer mensagem de erro caso nota seja maior que 10", () => {
        expect(() => classificarDesempenho(11)).toThrow("Nota inválida!")
    });

    test("Deve passar se nota for igual a 5", () => {
        expect(classificarDesempenho(5)).toBe("Regular")
    });

    test("Deve passar se nota for maior que 7", () => {
        expect(classificarDesempenho(8)).toBe("Bom")
    });
});

describe("Desafio 3 - A Verificação dos Dados do Herói", () => {

    test("Todos os dados são válidos.", () => {
        expect(validarJogador("Rafael", 20, 500)).toBe(true)
    });

    test("O nome de usuário está vazio.", () => {
        expect(validarJogador("", 20, 500)).toBe(false)
    });

    test("O nome de usuário contém apenas espaços.", () => {
        expect(validarJogador("   ", 20, 500)).toBe(false)
    });

    test("A idade está abaixo do limite permitido.", () => {
        expect(validarJogador("Rafael", 10, 100)).toBe(false)
    });

    test("A idade está acima do limite permitido.", () => {
        expect(validarJogador("Rafael", 85, 10000)).toBe(false)
    });

    test("A pontuação é negativa.", () => {
        expect(validarJogador("Rafael", 20, -1000)).toBe(false)
    });

    test("A pontuação é igual a 0.", () => {
        expect(validarJogador("Rafael", 20, 0)).toBe(false)
    });

    test("A idade está exatamente no limite mínimo permitido.", () => {
        expect(validarJogador("Rafael", 13, 300)).toBe(false)
    });

    test("A idade está exatamente no limite máximo permitido.", () => {
        expect(validarJogador("Rafael", 80, 8000)).toBe(false)
    });
});

describe("Desafio 4 - O Transporte das Mercadorias", () => {

    test("Deve retornar 0 quando o valor da compra for maior ou igual a 300", () => {
        expect(calcularEntrega(350, 10)).toBe(0)
    });

    test("Deve calcular o valor da entrega quando a distância for menor ou igual a 5 e a compra for menor que 300", () => {
        expect(calcularEntrega(100, 3)).toBe(10)
    });

    test("Deve multiplicar a entrega quando for acima de 5", () => {
        expect(calcularEntrega(100, 8)).toBe(16)
    });

    test("Deve retornar 0 quando o valor da compra for maior ou igual a 300", () => {
        expect(calcularEntrega(300, 5)).toBe(0)
    });

    test("Deve multiplicar a entrega quando valor de compra for 0", () => {
        expect(calcularEntrega(0, 5)).toBe(10)
    });

    test("Deve retornar erro para compra negativa", () => {
        expect(() => calcularEntrega(-50, 10)).toThrow("Valores inválidos.")
    });

    test("Deve retornar mensagem de erro para entrega negativa", () => {
        expect(() => calcularEntrega(100, -2)).toThrow("Valores inválidos.")
    });

});

describe("Desafio 5 - O Conversor de Moedas", () => {

    test("Deve retornar 20 para 100 de valor e 5 de cotação", () => {
        expect(converterRealParaDolar(100, 5)).toBe(20)
    });

    test("Deve retornar 50 para 250 de valor e 5 de cotação", () => {
        expect(converterRealParaDolar(250, 5)).toBe(50)
    });

    test("Deve retornar 0 para 0 de valor.", () => {
        expect(converterRealParaDolar(0, 5)).toBe(0)
    });

    test("Deve retornar 25 para 100 de valor e 4 de cotação", () => {
        expect(converterRealParaDolar(100, 4)).toBe(25)
    });

    test("Deve retornar erro para valor em formato de string", () => {
        expect(() => converterRealParaDolar("100", 5)).toThrow("Os valores devem ser numéricos.")
    });

    test("Deve retornar erro para cotação em formato de string", () => {
        expect(() => converterRealParaDolar(100, "5")).toThrow("Os valores devem ser numéricos.")
    });

    test("Deve retornar erro para valor negativo.", () => {
        expect(() => converterRealParaDolar(-50, 5)).toThrow("Valores inválidos.")
    });

    test("Deve retornar erro para cotação 0", () => {
        expect(() => converterRealParaDolar(100, 0)).toThrow("Valores inválidos.")
    })

});

describe("Desafio 6 - O Laboratório dos Testes", () => {

    test("deve calcular o valor total corretamente", () => {
        expect(calcularPedido(4, 20)).toBe(80);
    });

    test("deve retornar zero quando o preço for zero", () => {
        expect(calcularPedido(3, 0)).toBe(0);
    });

    test("deve lançar erro quando a quantidade for zero", () => {
        expect(() => calcularPedido(0, 10))
            .toThrow("Dados inválidos");
    });

    test("deve calcular o pedido com preço negativo", () => {
        expect(calcularPedido(2, -5)).toBe(-10);
    });

});

describe("Desafio 7 - O Guardião das Senhas", () => {

    test("deve aceitar senha com 6 caracteres", () => {
        expect(validarTamanhoSenha("abc123")).toBe(true);
    });

    test("deve rejeitar senha com 5 caracteres", () => {
        expect(validarTamanhoSenha("abc12")).toBe(false);
    });

    test("deve rejeitar senha com 12 caracteres", () => {
        expect(validarTamanhoSenha("abc123456789")).toBe(false);
    });

    test("deve aceitar senha com 10 caracteres", () => {
        expect(validarTamanhoSenha("abc1234567")).toBe(true);
    });

    test("deve rejeitar senha com 13 caracteres", () => {
        expect(validarTamanhoSenha("abc1234567890")).toBe(false);
    });

    test("deve aceitar senha com apenas números", () => {
        expect(validarTamanhoSenha("abcdefg")).toBe(true);
    });

    test("deve aceitar senha com apenas letras", () => {
        expect(validarTamanhoSenha(1234567890)).toBe(true);
    });

});

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

    test("deve lançar erro para quantidade negativa", () => {
        expect(() => verificarDisponibilidade(10, -3))
            .toThrow("Quantidade inválida");
    });

});

describe("Desafio 9 - A Auditoria Final dos Algoritmos", () => {

    test("deve calcular a média corretamente", () => {
        expect(calcularMediaFinal(6, 8)).toBe(7);
    });

    test("deve retornar média máxima", () => {
        expect(calcularMediaFinal(10, 10)).toBe(10);
    });

    test("deve calcular média com nota zero", () => {
        expect(calcularMediaFinal(0, 8)).toBe(4);
    });

    test("deve rejeitar nota negativa", () => {
        expect(() => calcularMediaFinal(-2, 8))
            .toThrow("Notas inválidas");
    });

    test("deve rejeitar nota superior a 10", () => {
        expect(() => calcularMediaFinal(8, 12))
            .toThrow("Notas inválidas");
    });

});