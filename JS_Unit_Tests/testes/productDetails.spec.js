const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toEqual([
      {
        name: 'Alcool gel',
        details: {
          productId: 'Alcool gel123'
        }
      },
      {
        name: 'Máscara',
        details: {
          productId: 'Máscara123'
        }
      }
    ])
  });
  
  it('Teste se productDetails é uma função.', () => {
    expect(typeof productDetails).toBe('function');
  });

  it('Teste se o retorno da função é um array.', () => {
    expect(Array.isArray(productDetails('Alcool Spray', 'Máscara'))).toBe(true)
  });
  
  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails('Alcool Spray', 'Máscara').length).toBe(2);
  });
  
  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof productDetails('Alcool Spray', 'Máscara')[0]).toBe('object');
    expect(typeof productDetails('Alcool Spray', 'Máscara')[1]).toBe('object');
  });
  
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(productDetails('Alcool Spray', 'Máscara')[0]).not.toEqual(productDetails('Alcool Spray', 'Máscara')[1]);
  });
  
  it('Teste se os dois productIds terminam com 123.', () => {
    const stringId1 = Object.values(productDetails('Alcool gel', 'Máscara')[0].details)
    expect(stringId1[0].endsWith('123')).toEqual(true);

    const stringId2 = Object.values(productDetails('Alcool gel', 'Máscara')[1].details)
    expect(stringId2[0].endsWith('123')).toEqual(true);
  });
  
});
