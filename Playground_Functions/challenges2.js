// Desafio 10
function techList(techs, nomes) {
  
  let alfabetica = [];
  alfabetica = techs.sort();

  let enteresses = [];

  if (alfabetica.length === 0){
    return 'Vazio!';
  } else {
    for (let i = 0; i < alfabetica.length; i+= 1){
      enteresses.push ({
        tech: alfabetica[i],
        name: nomes,
      },);
    }
  }
return enteresses;
}


// Desafio 11
function generatePhoneNumber(telefone) {
  let numeroTelefone = '';
  
  if (telefone.length !== 11){
    return 'Array com tamanho incorreto.';
  } else {
    for (let index in telefone){
      let numero = [];
      if (telefone[index] < 0 || telefone[index] > 9){
        return 'não é possível gerar um número de telefone com esses valores'; // OK
      } else {
        for (let i in telefone) {
          if (telefone[index] === telefone[i]){
            numero.push (telefone[i])
          }
          if (numero.length >= 3){
            return 'não é possível gerar um número de telefone com esses valores';
          }
        }
      }
    }
  } 
  numeroTelefone = '('+ telefone[0] + telefone[1] + ') ' + telefone[2] + telefone[3] + telefone[4] + telefone[5] + telefone[6] + '-' + telefone[7] + telefone[8] + telefone[9] + telefone[10];
  return numeroTelefone
}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let veriLineA = lineB +lineC;
  let veriLineB = lineA + lineC;
  let veriLineC = lineA + lineB;
  let diferencaA = Math.abs(lineB - lineC);
  let diferencaB = Math.abs(lineA - lineC);
  let diferencaC = Math.abs(lineA - lineB)


  if (lineA < veriLineA && lineB < veriLineB && lineC < veriLineC && lineA > diferencaA && lineB > diferencaB && lineC > diferencaC) {
    return true;
  } else {
    return false;
  }
}


// Desafio 13. Referências:
// https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match
// https://www.alura.com.br/artigos/convertendo-string-para-numero-em-javascript?gclid=Cj0KCQiA4b2MBhD2ARIsAIrcB-R2hm1KcxYiAZq8Q91pzYSSDTnhDYvN-Jfhbciy-TFAp07y9RQaIqYaAum2EALw_wcB

function hydrate(pedido) {
  let quantiBebidas = /\d/g; // declaro o que eu quero capturar na string, no caso os digitos (d) que nela aparecem o g após a expressão diz q a analise será feita de forma global em toda a string e que retornará todas as correspondências da busca.
  let array = pedido.match (quantiBebidas) // retorna a correspondencia entre a string e a expressão regular

  let numeroBebidas = [];
  for (let a in array){
    numeroBebidas.push (parseInt(array[a])) //transforma strings em números
  }
  
  let sum = 0;
  for (let i in numeroBebidas){
    sum = sum + numeroBebidas[i];
  }
  if (sum === 1){
    return sum + ' copo de água'
  } else {
    return sum + ' copos de água'
  }
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
