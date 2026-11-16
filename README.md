# UC10 - Realizar Testes nas Aplicações Desenvolvidas
## Tayla Prado Cabral de Oliveira Suares 

## Descrição e Funcionalidades

- Aplicação de controle de tarefas.
- Cadastra tarefas: Insert -> Create.
- Consultar/listar tarefas: Select -> Read.
- Atualizar tarefas: Update -> Update.
- Excluir tarefas: Delete -> Delete.

## Tecnologias

| Tecnologias | Função | Versão | Comando |
| ----------- | ------ | ------ | ------- |
| HTML | Estrutura/esqueleto da página web | HTML5 |||
| CSS | Estilização/design da página | CSS3 |||
| JavaScript | Interatividade/Comportamento | 12.4.254.14-node.12 | node -p "process.versions.v8" |||
| Node.js | Permite executar o JS no servidor | v22.2.0 | node -v |||
| Jest | Framework de testes automatizados | 30.5.2 | npx jest --version |||
| SQLite | Banco de dados relacional | 6.0.1 | npm list sqlite3 better-sqlite3 |||
| Express | Framework back-end que recebe requisições do front-end | 4.22.3 | npm list express |||
| Supertest | Ferramenta que simula requisições HTTP para testar a sua API | 7.3.1 | npm list supertest |||

# Testes
## Testes Unitários

| Caso de Teste | Entrada | Saída esperada | 
| ------------- | ------- | -------------- |
| 1 | "segunda-feira" | "segunda-feira" | 
| 2 | "      segunda-feira      " | "segunda-feira" | 
| 3 | null | Erro: O título da tarefa é obrigatório.| 
