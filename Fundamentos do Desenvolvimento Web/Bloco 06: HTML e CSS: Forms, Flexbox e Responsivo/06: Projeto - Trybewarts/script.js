const btnentrar = document.querySelector('.btnentrar');
const email = document.getElementById('email');
const senha = document.getElementById('password');

function loginValidation() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
btnentrar.addEventListener('click', loginValidation);

const btnenviar = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

function checkboxValidation() {
  if (checkbox.checked === true) {
    btnenviar.disabled = false;
  } else {
    btnenviar.disabled = true;
  }
}
checkbox.addEventListener('click', checkboxValidation);

const contador = document.getElementById('counter');
const areaTexto = document.getElementById('textarea');
contador.innerText = 500;

function characterCount() {
  const texto = areaTexto.value.length;
  contador.innerText = 500 - texto;
}
areaTexto.addEventListener('keyup', characterCount);

const formResultado = document.getElementById('form-data');

function printInfos() {
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const familia = document.querySelector('input[name=\'family\']:checked').value;
  const conteudo = document.querySelectorAll('.subject:checked');
  const avaliacao = document.querySelector('input[name=\'rate\']:checked').value;
  const dados = document.createElement('div');
  dados.id = 'dados';
  const materias = [...conteudo].map((conteudos) => conteudos.value).join(', ');
  dados.innerHTML = `<h3>Resultado do Formulário:</h3>
    <p><strong>Nome:</strong> ${nome} ${sobrenome}</p>
    <p><strong>Email:</strong> ${document.getElementById('input-email').value}</p>
    <p><strong>Casa:</strong> ${document.getElementById('house').value}</p>
    <p><strong>Família:</strong> ${familia}</p>
    <p><strong>Matérias:</strong> ${materias}</p>
    <p><strong>Avaliação:</strong> ${avaliacao}</p>
    <p><strong>Observações:</strong> ${document.getElementById('textarea').value}</p>`;
  formResultado.appendChild(dados);
}

btnenviar.addEventListener('click', (event) => {
  event.preventDefault();
  const infos = document.querySelector('main');
  infos.style.display = 'none';
  printInfos();
});
