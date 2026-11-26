# Tayla Prado Cabral de Oliveira Suares

## Desafio 1 -- O Cofre dos Valores Seguros

### a)

A função `calcularAcrescimo` foi criada para fazer o cálculo de acréscimo. Primeiro, verifica se o valor é maior que 0 e se o percentual é maior ou igual a 0 e menor ou igual a 100. Se o valor for menor ou igual a zero, ou se o percentual for menor que zero ou maior que 100, aparece a mensagem de erro. Caso contrário, passa para o cálculo, mostrando que o acréscimo é o resultado do valor multiplicado pelo percentual e dividido por 100. Após isso, retorna o valor somado com o acréscimo.

### b)

| Caso de teste | Entrada | Saída esperada |
| ------------- | -------- | -------------- |
| Deve passar se valor for maior que 0, percentual maior que 0 e menor que 100. | 1000, 50 | 1500 |
| Deve aparecer mensagem de erro caso valor seja menor que 0 | -600, 30 | "Dados inválidos" |
| Deve aparecer mensagem de erro caso percentual seja maior que 100 | 1500, 200 | "Dados inválidos" |
| Deve passar se o percentual for igual a 0 | 1000, 0 | 1000 |

### c)

```javascript
describe("DESAFIO 1 -- O Cofre dos Valores Seguros", () => {

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
```

### d)

A importância de testar valores próximos aos limites é para garantir que a classificação aconteça de forma correta, principalmente quando estão próximos de trocar de faixa.

## Desafio 2 - O Portal da Classificação

### a)

A função `classificarDesempenho` foi criada para verificar as notas dos alunos. Primeiro, a função verifica se as notas estão entre 0 e 10. Se estiverem fora desse intervalo, aparece um erro. Caso contrário, passa para o próximo teste.

Logo após, verifica se a nota é maior ou igual a 9 (9 e 10). Se passar, aparece a mensagem "Excelente". Caso não entre nessa verificação, vai verificar se a nota é igual ou maior que 7 (7 e 8). Se passar, aparece a mensagem "Bom". Se, de novo, não passar nessa verificação, irá verificar se a nota é maior ou igual a 5 (5 e 6), retornando a mensagem "Regular". Por fim, se não entrar em nenhuma dessas opções, irá retornar "Insuficiente".

### b)

| Caso de teste | Entrada | Saída esperada |
| ------------- | -------- | -------------- |
| Deve passar se nota for maior ou igual que 9 | 10 | "Excelente" |
| Deve retornar Insuficiente caso a nota seja menor que 5 | 3 | "Insuficiente" |
| Deve aparecer mensagem de erro caso nota seja maior que 10 | 11 | "Nota inválida" |
| Deve passar se nota for igual a 5 | 5 | "Regular" |
| Deve passar se nota for maior que 7 | 8 | "Bom" |

### c)

```javascript
describe("Desafio 2 - O Portal da Classificação", () => {

    test("Deve passar se nota for maior ou igual que 9", () => {
        expect(classificarDesempenho(10)).toBe("Excelente")
    });

    test("Deve retornar Insuficiente caso nota seja menor que 5", () => {
        expect(classificarDesempenho(3)).toBe("Insuficiente")
    });

    test("Deve aparecer mensagem de erro caso nota seja maior que 10", () => {
        expect(() => classificarDesempenho(11)).toThrow("Nota inválida")
    });

    test("Deve passar se nota for igual a 5", () => {
        expect(classificarDesempenho(5)).toBe("Regular")
    });

    test("Deve passar se nota for maior que 7", () => {
        expect(classificarDesempenho(8)).toBe("Bom")
    });

});
```

### d)

A importância de testar valores próximos aos limites é para garantir que a classificação aconteça de forma correta, principalmente quando estão próximos de trocar de faixa classificatória.

## Desafio 3 - A Validação dos Dados do Herói

### a)

A função `validarJogador` verifica se os dados do jogador são válidos. Primeiro, verifica se o nome de usuário foi preenchido e se não contém apenas espaços. Depois, verifica se a idade está entre 13 e 80 anos. Por último, verifica se a pontuação é maior ou igual a 0. Se todos os dados forem válidos, retorna `true`. Caso algum deles seja inválido, retorna `false`.

### b)

```javascript
describe("Desafio 3 - A Verificação dos Dados do Herói", () => {

    test("Todos os dados são válidos.", () => {
        expect(validarJogador("Rafael", 20, 500)).toBe(true);
    });

    test("O nome de usuário está vazio.", () => {
        expect(validarJogador("", 20, 500)).toBe(false);
    });

    test("O nome de usuário contém apenas espaços.", () => {
        expect(validarJogador("   ", 20, 500)).toBe(false);
    });

    test("A idade está abaixo do limite permitido.", () => {
        expect(validarJogador("Rafael", 10, 100)).toBe(false);
    });

    test("A idade está acima do limite permitido.", () => {
        expect(validarJogador("Rafael", 85, 10000)).toBe(false);
    });

    test("A pontuação é negativa.", () => {
        expect(validarJogador("Rafael", 20, -1000)).toBe(false);
    });

    test("A pontuação é igual a 0.", () => {
        expect(validarJogador("Rafael", 20, 0)).toBe(true);
    });

    test("A idade está exatamente no limite mínimo permitido.", () => {
        expect(validarJogador("Rafael", 13, 300)).toBe(true);
    });

    test("A idade está exatamente no limite máximo permitido.", () => {
        expect(validarJogador("Rafael", 80, 8000)).toBe(true);
    });

});
```

### c)

Mesmo que apenas um dos três dados seja inválido, a função retorna `false`, pois todos precisam estar corretos para que o resultado seja `true`.

### d)

Não. A função apenas verifica se a pontuação é menor que 0. Como não utiliza `typeof`, não consegue garantir que o valor informado seja numérico.

## Desafio 4 - O Transporte das Mercadorias

### a)

```javascript
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
```

### b)

Pois entra primeiro na condição de compra maior ou igual a 300, que retorna 0.

### c)

Se a condição `valorCompra >= 300` fosse alterada para `valorCompra > 300`, uma compra de exatamente 300 deixaria de ter entrega grátis. Como a distância é 5, o valor da entrega seria 10.

## Desafio 5 - O Conversor de Moedas

### a)

```javascript
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
```

### b)

Pois está em formato de string e, como tem o `typeof`, ele verifica se é número ou não.

### c)

Na verificação numérica, usa o `typeof`. Já na verificação de valor positivo, apenas observa se é maior que 0 ou não.

## Desafio 6 - O Laboratório dos Testes

### a)

Os testes unitários são testes automatizados que verificam partes pequenas e isoladas do código. Têm sua importância, pois ajudam a detectar bugs e são testes rápidos e práticos.

### b)

```javascript
describe("Desafio 6 - O Laboratório dos Testes", () => {

    // Passa, pois irá calcular a quantidade com o preço
    test("deve calcular o valor total corretamente", () => {
        expect(calcularPedido(4, 20)).toBe(80);
    });

    // Passa, pois só daria erro caso o precoUnitario fosse menor que 0. Como é igual a 0, ele aceita.
    test("deve retornar zero quando o preço for zero", () => {
        expect(calcularPedido(3, 0)).toBe(0);
    });

    // Passa, pois o erro deve ser lançado quando quantidade for igual ou menor que 0
    test("deve lançar erro quando a quantidade for zero", () => {
        expect(() => calcularPedido(0, 10))
            .toThrow("Dados inválidos");
    });

    // Erro: precoUnitario não pode ser menor que 0
    test("deve calcular o pedido com preço negativo", () => {
        expect(calcularPedido(2, -5)).toBe(-10);
    });

});
```

### c)

O último teste apresenta uma expectativa incompatível, pois espera o resultado -10, mas a função lança um erro quando o preço unitário é negativo.

### d)

Igual a 0 sim, pois verifica que se for menor que 0 aparece erro, não se for igual a 0.

## Desafio 7 - O Guardião das Senhas

### a)

```javascript
describe("Desafio 7 - O Guardião das Senhas", () => {

    // Passa, pois ele diz que se for MENOR que 6, acontece o erro. Ou seja, mesmo que seja igual a 6, passa.
    test("deve aceitar senha com 6 caracteres", () => {
        expect(validarTamanhoSenha("abc123")).toBe(true);
    });

    // Passa, pois se tem menos de 6 caracteres, retorna falso.
    test("deve rejeitar senha com 5 caracteres", () => {
        expect(validarTamanhoSenha("abc12")).toBe(false);
    });

    // Falha, pois mesmo que tenha 12 caracteres, ele aceita. Só daria erro caso fosse maior que 12.
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
```

### b)

O problema do teste C é que ele espera `false` para uma senha com 12 caracteres. Porém, a função só retorna `false` quando a senha tem menos de 6 ou mais de 12 caracteres. Portanto, uma senha com exatamente 12 caracteres é aceita e retorna `true`.

### c)

Não. A função verifica somente a quantidade de caracteres, não verifica se a senha contém letras, números ou outros tipos de caracteres. Também não valida se o valor recebido é uma string.

### d)

```javascript
test("deve aceitar senha com apenas números", () => {
    expect(validarTamanhoSenha("1234567")).toBe(true);
});

test("deve aceitar senha com apenas letras", () => {
    expect(validarTamanhoSenha("abcdefg")).toBe(true);
});
```

## Desafio 8 - O Controle do Inventário

### a)

Teste A: PASSA. A quantidade solicitada é 5 e o estoque é 20. Como há estoque suficiente, a função retorna "Retirada autorizada".

Teste B: PASSA. A quantidade solicitada é 10 e o estoque é 5. Como a quantidade é maior que o estoque, a função retorna "Estoque insuficiente".

Teste C: PASSA. A quantidade solicitada é igual ao estoque disponível (10). Como a função só considera insuficiente quando a quantidade é maior que o estoque, retorna "Retirada autorizada".

Teste D: FALHA. A quantidade solicitada é 0. A função verifica primeiro se a quantidade é menor ou igual a zero e lança o erro "Quantidade inválida", em vez de retornar "Estoque insuficiente".

Teste E: PASSA. O estoque é negativo. A função lança o erro "Estoque inválido", como esperado.

Teste F: PASSA. A quantidade solicitada é negativa. A função lança o erro "Quantidade inválida", como esperado.

### b)

Porque a função só retorna "Estoque insuficiente" quando a quantidade solicitada é maior que o estoque. Quando os dois valores são iguais, a condição não é verdadeira e a função retorna "Retirada autorizada".

### c)

O problema do teste D é que ele espera a mensagem "Estoque insuficiente" para uma quantidade igual a zero. Porém, a função não aceita quantidade menor ou igual a zero e lança o erro "Quantidade inválida".

### d)

Não. A função não utiliza `typeof` para verificar se os valores são números. Ela verifica apenas as condições de quantidade menor ou igual a zero, estoque negativo e quantidade maior que o estoque.

## Desafio 9 - A Auditoria Final dos Algoritmos

### a)

Teste 1: PASSA. A função soma 6 e 8 e divide por 2, retornando 7.

Teste 2: PASSA. A soma de 10 e 10 dividida por 2 resulta em 10.

Teste 3: PASSA. A nota 0 é válida, pois a função só rejeita notas menores que 0. A média entre 0 e 8 é 4.

Teste 4: PASSA. A nota -2 está abaixo do limite permitido, então a função lança o erro "Notas inválidas", como esperado.

Teste 5: PASSA. A nota 12 está acima do limite permitido, então a função lança o erro "Notas inválidas", como esperado.

### b)

```javascript
describe("Testes adicionais - calcularMediaFinal", () => {

    test("deve calcular a média quando as duas notas são iguais", () => {
        expect(calcularMediaFinal(7, 7)).toBe(7);
    });

    test("deve aceitar nota mínima igual a zero nas duas avaliações", () => {
        expect(calcularMediaFinal(0, 0)).toBe(0);
    });

    test("deve rejeitar nota acima de 10 na primeira avaliação", () => {
        expect(() => calcularMediaFinal(11, 8))
            .toThrow("Notas inválidas");
    });

});
```

### c)

É importante testar valores válidos para verificar se a função realiza o cálculo corretamente e valores inválidos para garantir que ela identifica entradas fora do intervalo permitido e apresenta o erro esperado.

### d)

Não. A função verifica se as notas estão entre 0 e 10, mas não utiliza `typeof` para confirmar se os valores recebidos são numéricos.