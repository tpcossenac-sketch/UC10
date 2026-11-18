# Tayla Prado Cabral de Oliveira Suares

## DESAFIO 1 – O Cofre dos Valores Seguros

### a) 

A função `calcularAcrescimo` foi criada para fazer o cálculo de acréscimo. Primeiro, verifica se o valor é maior que 0 e se o percentual é maior ou igual a 0 e menor que 100. Se 1 ou mais possibilidades passarem, aparece a mensagem de erro. Caso contrário, sai da verificação e passa para o cálculo, mostrando que acréscimo é o resultado de valor multiplicado por percentual e dividido por 100. Após isso, retorna valor somado com o acréscimo. 

### b)

| Caso de teste |  Entrada | Saída esperada |
| ------------- | -------- | -------------- |
| Deve passar se valor for maior que 0, percentual maior que 0 e menor que 100. | 1000, 50 | 1500 |  
| Deve aparecer mensagem de erro caso valor seja menor que 0 | -600, 30 | "Dados inválidos" |  
| Deve aparecer mensagem de erro caso percentual seja maior que 100| 1500, 200 | "Dados inválidos" |  
| Deve passar se o percentual for igual a 0 | 1000, 0 | 1000 |

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

### d) 

A importância de testar valores próximos aos limites é para garantir que a classificação aconteceria de forma correta, principalmente quando próximos de trocar de setor classificatório. 

## Desafio 3 - A Validação dos Dados do Herói

### a) 

Precisa ter o nome cadastrado, a idade ser entre 13 e 80 e a pontuação maior que 0.

### b) 

| Caso de teste | Entrada | Saída esperada |
| ------------- | ------- | -------------- |
| Todos os dados são válidos. | "Rafael", 20, 500 | True | 
| O nome de usuário está vazio. | "",  20, 500 | False |
| O nome de usuário contém apenas espaços. | "    ", 20, 500 | False |
| A idade está abaixo do limite permitido. | "Rafael", 10, 100 | False |
| A idade está acima do limite permitido. | "Rafael", 85, 10000 | False |
| A pontuação é negativa. | "Rafael", -20, 1000 | False |
| A pontuação é igual a zero. | "Rafael", 20, 0 | False | 
| A idade está exatamente no limite mínimo permitido. | "Rafael", 13, 300 | True |
| A idade está exatamente no limite máximo permitido. | "Rafael", 80, 8000 | True |

### c)

Mesmo que seja apenas um dos três dados inválidos, vai dar falso (false) todo o teste, pois os três precisam passar para que retorne true (verdade).

### d) 

Não, apenas verifica se é menor que 0, pois não usa o `typeof`.