/* eslint-disable max-lines-per-function */
function botaoEntrar() {
  const email = document.querySelector('#email');
  const senha = document.getElementById('senha');
  const botao = document.getElementById('botao1');
  botao.addEventListener('click', () => {
    if (email.value === 'tryber@teste.com' && senha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}
botaoEntrar();
const textArea = document.querySelector('textarea');
function limiteTextarea() {
  const quant = 500;
  const total = textArea.value.length;
  const counter = document.getElementById('counter');
  if (total <= quant) {
    counter.innerText = quant - total;
  }
}
textArea.addEventListener('keyup', limiteTextarea);
function botaoSubmit() {
  const submit = document.getElementById('submit-btn');
  const checkbox = document.getElementById('agreement');
  checkbox.addEventListener('click', () => {
    submit.disabled = false;
  });
}
botaoSubmit();
// Referência:
// https://pt.stackoverflow.com/questions/25753/como-fazer-um-contador-de-caracteres-de-uma-textarea

const submit = document.getElementById('submit-btn');
const form = document.querySelector('#evaluation-form');
const nome = document.getElementById('input-name');
const ultimoNome = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const casas = document.getElementById('house');
const conteudo = document.getElementsByClassName('subject');
const comentario = document.getElementById('textarea');

const escolhaConteudos = () => {
  const selecionado = [];
  // eslint-disable-next-line sonarjs/no-one-iteration-loop
  for (let i = 0; i < conteudo.length; i += 1) {
    if (conteudo[i].checked === true) {
      selecionado.push(conteudo[i].value);
    }
  }
  const string = selecionado.join(', ');
  return string;
};

function apresentaBloco1(nomeSobrenome, emailValue, escolhaCasa) {
  const bloco1 = document.createElement('section');
  bloco1.id = 'dados iniciais';
  form.appendChild(bloco1);

  const name = document.createElement('p');
  name.className = 'dados_texto';
  name.innerText = `Nome: ${nomeSobrenome}`;
  bloco1.appendChild(name);

  const contato = document.createElement('p');
  contato.className = 'dados_texto';
  contato.innerText = `Email: ${emailValue}`;
  bloco1.appendChild(contato);

  const casa = document.createElement('p');
  casa.className = 'dados_texto';
  casa.innerText = `Casa: ${escolhaCasa}`;
  bloco1.appendChild(casa);
}

function apresentaBloco2(escolhaFamilia, string, nota) {
  const bloco2 = document.createElement('section');
  bloco2.id = 'escolhas';
  form.appendChild(bloco2);

  const familia = document.createElement('p');
  familia.className = 'dados_texto';
  familia.innerText = `Família: ${escolhaFamilia}`;
  bloco2.appendChild(familia);

  const conteudos = document.createElement('p');
  conteudos.className = 'dados_texto';
  conteudos.innerText = `Matérias: ${string}`;
  bloco2.appendChild(conteudos);

  const avaliacao = document.createElement('p');
  avaliacao.className = 'dados_texto';
  avaliacao.innerText = `Avaliação: ${nota}`;
  bloco2.appendChild(avaliacao);
}

function apresentaBloco3(observa) {
  const bloco3 = document.createElement('section');
  bloco3.id = 'observacoes';
  form.appendChild(bloco3);

  const observacao = document.createElement('article');
  observacao.className = 'dados_texto';
  observacao.innerText = `Observações: ${observa}`;
  bloco3.appendChild(observacao);
}

function textoCompleto() {
  submit.addEventListener('click', (event) => {
    event.preventDefault();
    const nomeValor = nome.value;
    const sobrenomeValue = ultimoNome.value;
    const nomeSobrenome = `${nomeValor} ${sobrenomeValue}`;
    const emailValue = email.value;
    const escolhaCasa = casas.options[casas.selectedIndex].value;
    const escolhaFamilia = form.family.value;
    const string = escolhaConteudos();
    const nota = form.rate.value;
    const observa = comentario.value;

    form.innerHTML = '';

    apresentaBloco1(nomeSobrenome, emailValue, escolhaCasa);
    apresentaBloco2(escolhaFamilia, string, nota);
    apresentaBloco3(observa);
  });
}
textoCompleto();
// Referência:
// https://pt.stackoverflow.com/questions/104041/como-saber-qual-option-do-select-foi-selecionado
// https://pt.stackoverflow.com/questions/219949/pegar-o-valor-do-input-radio-com-javascript
