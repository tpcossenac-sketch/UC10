# Tayla Prado Cabral de Oliveira Suares

## Desafio 1 – O Cofre dos Valores Seguros

### a) 

A função `calcularAcrescimo` foi criada para fazer o cálculo de acréscimo. Primeiro, verifica se o valor é maior que 0 e se o percentual é maior ou igual a 0 e menor que 100. Se 1 ou mais possibilidades passarem, aparece a mensagem de erro. Caso contrário, sai da verificação e passa para o cálculo, mostrando que acréscimo é o resultado de valor multiplicado por percentual e dividido por 100. Após isso, retorna valor somado com o acréscimo. 

### b)

| Caso de teste |  Entrada | Saída esperada |
| ------------- | -------- | -------------- |
| Deve passar se valor for maior que 0, percentual maior que 0 e menor que 100. | 1000, 50 | 1500 |  
| Deve aparecer mensagem de erro caso valor seja menor que 0 | -600, 30 | "Dados inválidos" |  
| Deve aparecer mensagem de erro caso percentual seja maior que 100| 1500, 200 | "Dados inválidos" |  
| Deve passar se o percentual for igual a 0 | 1000, 0 | 1000 |

### c)

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

## Desafio 2 - O Portal da Classificação

### a) 

A função `classificarDesempenho` foi criada para verificar as notas dos alunos. Primeiro, a função verifica se as notas estão entre 0 e 10, se estiver fora desse intervalo, aparece erro. Caso contrário, passa para o próximo teste. 
Logo após, verifica se a nota é maior ou igual a 9 (9 e 10), se passar, aparece a mensagem "Excelente". Caso não entre nessa verificação, vai verificar se a nota é igual ou maior que 7 (7 e 8), se passar, aparece a mensagem "Bom". Se, de novo, não passar nessa verificação, irá verificar se a nota é maior ou igual que 5 (5 e 6), retornando a mensagem "Regular". Por fim, se não entrar em nenhuma dessas opções, irá retornar "Insuficiente". 

### b)

| Caso de teste |  Entrada | Saída esperada |
| ------------- | -------- | -------------- |
| Deve passar se nota for maior ou igual que 9 | 10 | "Excelente" |  
| Deve aparecer mensagem de erro caso nota seja menor que 5 | 3 | "Insuficiente" |  
| Deve aparecer mensagem de erro caso nota seja maior que 10 | 11 | "Nota inválida" |  
| Deve passar se nota for igual a 5 | 5 | "Regular" |
| Deve passar se nota for maior que 7 | 8 | "Bom" |

### c)

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

### d) 

A importância de testar valores próximos aos limites é para garantir que a classificação aconteceria de forma correta, principalmente quando próximos de trocar de setor classificatório. 

## Desafio 3 - A Validação dos Dados do Herói

### a) 

Precisa ter o nome cadastrado, a idade ser entre 13 e 80 e a pontuação maior que 0.

### b) 

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

    test("A idade está abaixo do limite permitido.", () => {
        expect(() => validarJogador("Rafael", 10, 100)).toThrow(false)
    });

    test("A idade está acima do limite permitido.", () => {
        expect(() => validarJogador("Rafael", 85, 10000)).toThrow(false)
    });

    test("A pontuação é negativa.", () => {
        expect(() => validarJogador ("Rafael", 20, -1000)).toThrow(false)
    });

    test("A pontuação é igual a 0.", () => {
        expect(() => validarJogador ("Rafael", 20, 0)).toThrow(false)
    });

    test("A idade está exatamente no limite mínimo permitido.", () => {
        expect(() => validarJogador ("Rafael", 13, 300)).toThrow(false)
    });

    test("A idade está exatamente no limite máximo permitido.", () => {
        expect(() =>  validarJogador("Rafael", 80, 8000)).toThrow(false)
    });

});

### c)

Mesmo que seja apenas um dos três dados inválidos, vai dar falso (false) todo o teste, pois os três precisam passar para que retorne true (verdade).

### d) 

Não, apenas verifica se é menor que 0, pois não usa o `typeof`.

## Desafio 4 - O Transporte das Mercadorias

### a) 

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

### b) 

Pois entra primeiro na condição de se compra maior ou igual a 300 retorna 0.

### c) 

O valor da entrega automaticamente iria para 10, pois entraria na outra condição de que, se distância é maior ou igual a 5, a entrega passa a ser 10.

## Desafio 5 - O Conversor de Moedas

### a) 

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

### b) 

Pois está em formato de string e, como tem o typeof, ele verifica se é número ou não.

### c) 

Na verificação numérica, usa o typeof. Já na verificação de valor positivo, apenas observa se é maior que 0 ou não.

## Desafio 6 - O Laboratório dos Testes

### a) 

Os testes unitários são testes automatizados que verificam partes pequenas e isoladas do código. Tem sua importância pois ajuda a detectar bugs e são testes rápidos e práticos. 

### b)

describe("Desafio 6 - O Laboratório dos Testes", () => {

    //Passa, pois irá calcular a quantidade com o preço
    test("deve calcular o valor total corretamente", () => {
        expect(calcularPedido(4, 20)).toBe(80);
    });

    //Passa, pois só iria dar erro caso o precoUnitario fosse menor que 0, como é igual, ele aceita.
    test("deve retornar zero quando o preço for zero", () => {
        expect(calcularPedido(3, 0)).toBe(0);
    });

    //Passa, pois o erro deve ser lançado quando quantidade for igual ou menor que 0
    test("deve lançar erro quando a quantidade for zero", () => {
        expect(() => calcularPedido(0, 10))
            .toThrow("Dados inválidos");
    });

    //Erro: precoUnitario não pode ser menor que 0
    test("deve calcular o pedido com preço negativo", () => {
        expect(calcularPedido(2, -5)).toBe(-10);
    });

});

### c)

A última questão, pois espera que retorne -10 mas a função não permite número negativo.

### d) 

Igual a 0 sim, pois verifica que SE for menor que 0, aparece erro, não se for igual a 0. 

## Desafio 7 - O Guardião das Senhas

### a) 

describe("Desafio 7 - O Guardião das Senhas", () => {

    // Passa, pois ele diz que se for MENOR que 6, acontece o erro. Ou seja, mesmo que seja igual a 6, passa.
    test("deve aceitar senha com 6 caracteres", () => {
        expect(validarTamanhoSenha("abc123")).toBe(true);
    });

    // Passa, pois se tem menos de 6 caracteres, retorna falso.
    test("deve rejeitar senha com 5 caracteres", () => {
        expect(validarTamanhoSenha("abc12")).toBe(false);
    });

    // Falha, pois mesmo que tenha 12 caracteres, ele aceita. Só daria erro caso fosse maior que 12 (13 para cima).
    test("deve rejeitar senha com 12 caracteres", () => {
        expect(validarTamanhoSenha("abc123456789")).toBe(false);
    });

    // Passa, pois tem menos de 12 e mais de 6
    test("deve aceitar senha com 10 caracteres", () => {
        expect(validarTamanhoSenha("abc1234567")).toBe(true);
    });

    // Passa, pois retorna false para mais de 12 caracteres
    test("deve rejeitar senha com 13 caracteres", () => {
        expect(validarTamanhoSenha("abc1234567890")).toBe(false);
    });

});

### b) 

O problema do teste C é porque o resultado esperado dele era que fosse false, mas só daria false caso a função colocasse que era maior ou igual a 12. Ou seja, aceita até 12 caracteres, o que faz com que o teste C também dê true.

### c) 

Não, apenas verifica se tem menos de 6 e mais de 12 caracteres.

### d) 

    test("deve aceitar senha com apenas números", () => {
        expect(validarTamanhoSenha(abcdefg)).toBe(true);
    });

    test("deve aceitar senha com apenas letras", () => {
        expect(validarTamanhoSenha(1234567890)).toBe(true);
    });

## Desafio 8 - O Controle do Inventário

### a) 

describe("Desafio 8 - O Controle do Inventário", () => {

});