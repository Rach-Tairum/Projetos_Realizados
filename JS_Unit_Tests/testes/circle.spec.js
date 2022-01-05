/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    expect(circle(1)).toMatchObject({radius: 1, area: 3.14, circumference: 6.28});
  });

  test('Teste se circle retorna undefined, caso o parâmetro passado não seja um número.', () => {
    expect(circle('ola')).toBe(undefined);
  });
  
  test('Teste se circle retorna um objeto.', () => {
    expect(typeof circle(5)).toBe('object');
  });
    
  test('Teste se o objeto retornado tem 3 propriedades.', () => {
    const chaves = Object.keys(circle(7)).length
    expect(chaves).toBe(3)
  });
  
  test('Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.', () => {
    expect(circle()).toBeUndefined();
  });
  
  test('Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.', () => {
    const circunferência = Object.values(circle(2))[2];
    expect(circunferência).toBeCloseTo(12.56, 2);
  });

  test('Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.', () => {
    const area = Object.values(circle(3))[1];
    expect(area).toBeCloseTo(28.26, 2);
  });
  
  test('Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.', () => {
    const raio = Object.values(circle(3))[0];
    expect(raio).toBeCloseTo(3, 0);

    const area = Object.values(circle(3))[1];
    expect(area).toBeCloseTo(28.26, 2);

    const circunferência = Object.values(circle(3))[2];
    expect(circunferência).toBeCloseTo(18.84, 2);
  });
  });

