const { calcularAcrescimo, classificarDesempenho, validarJogador, calcularEntrega, converterRealParaDolar, calcularPedido, validarTamanhoSenha, verificarDisponibilidade, calcularMediaFinal } = require("../src/operacoes");

/* ======================== QUESTÃO 1 ======================== */

describe("DESAFIO 1 – O Cofre dos Valores Seguros", () => {

    test("Deve passar se valor for maior que 0, percentual maior que 0 e menor que 100.", () => {
        expect(calcularAcrescimo(1000, 50)).toBe(1500)
    });

    test("Deve aparecer mensagem de erro caso valor seja menor que 0", () =>{
        expect(() => calcularAcrescimo(-600, 30)).toThrow("Dados inválidos")
    });

    test("Deve aparecer mensagem de erro caso percentual seja maior que 100", () => {
        expect(() => calcularAcrescimo(1500, 200)).toThrow("Dados inválidos")
    });

    test("Deve passar se o percentual for igual 0", () =>{
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
})

describe("Desafio 3 - A Verificação dos Dados do Herói", () => {
    
    test("Todos os dados são válidos.", () => {
        expect(validarJogador("Rafael", 20, 500)).toBe(true)
    });

    test("O nome de usuário está vazio.", () => {
        expect(() => validarJogador("", 20, 500)).toThrow(false)
    }); 

    test("O nome de usuário contém apenas espaços.", () => {
        expect(() => validarJogador("   ", 20, 500)).toThrow(false)
    });

})