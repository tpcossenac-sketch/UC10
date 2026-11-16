// Importa as funções que serão testadas
const { validateTaskInput } = require('../../src/validation');
const { normalizeTitle } = require('../../src/validation');

// Agrupa os testes da função normalizeTitle
describe('Validação de tarefas', () => {

    // Verifica e remove os espaços do início e do fim do título
    test('Remove espaços do inicio e do fim do título', () => {
        expect(normalizeTitle('   Teste Unitário   ')).toBe('Teste Unitário');
    });

    // Verifica se retorna uma string vazia quando o título é um número
    test('Retorna uma string vazia se o título for um número', () => {
        expect(normalizeTitle(12415844)).toBe('');
    });

    // Verifica se retorna uma string vazia quando o título é null
    test('Retorna uma string vazia se o título for null', () => {
        expect(normalizeTitle(null)).toBe('');
    });

    // Verifica se retorna uma string vazia quando o título é undefined
    test('Retorna uma string vazia r o título for undefined', () => {
        expect(normalizeTitle(undefined)).toBe('');
    });
});

 // Agrupa os testes da função validateTaskInput
describe('Validação de entrada de tarefas', () => {

    // Verifica se lança erro quando o título está vazio
    test('Lança erro se o título estiver vazio', () => {
        expect(() => validateTaskInput({ title: '   ' }))
            .toThrow('O título da tarefa é obrigatório.');
    });

    // Verifica se lança erro quando o título ultrapassa 120 caracteres
    test('Lança erro se o título tiver mais de 120 caracteres', () => {
        expect(() => validateTaskInput({ title: 'a'.repeat(121) }))
            .toThrow('O título deve ter no máximo 120 caracteres.');
    });

    // Verifica se aceita um título válido
    test('Aceita um título válido', () => {
        expect(validateTaskInput({ title: 'Estudar JavaScript' }).data.title)
            .toBe('Estudar JavaScript');
    });

});