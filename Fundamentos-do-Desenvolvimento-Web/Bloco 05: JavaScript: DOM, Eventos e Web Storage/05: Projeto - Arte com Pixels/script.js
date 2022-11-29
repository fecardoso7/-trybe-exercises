// Cores iniciais da paleta de cores.
let colorElementsArr = ['black', 'red', 'green', 'blue'];

// Função cria paleta de (4) cores;
const criaPaletaDeCores = () => {
	const colorPalette = document.createElement('div');
	colorPalette.id = 'color-palette';
	document.body.appendChild(colorPalette);

	for (let i = 0; i < 4; i += 1) {
		const color = document.createElement('div');
		color.className = 'color';
		color.style.backgroundColor = colorElementsArr[i];
		colorPalette.appendChild(color);
	}
};
criaPaletaDeCores();

// Elemento paleta de Cores.
const colorPalette = document.querySelector('#color-palette');

// Função cria section que abriga buttons e input.
const criaSectionMeio = () => {
	const sectionMeio = document.createElement('section');
	sectionMeio.id = 'section-meio';
	document.body.appendChild(sectionMeio);
};
criaSectionMeio();

// Função cria botão de cores aleatórias.
const criaBotao = () => {
	const btnAleatorio = document.createElement('button');
	btnAleatorio.id = 'button-random-color';
	btnAleatorio.innerHTML = 'Cores aleatórias';
	colorPalette.appendChild(btnAleatorio);
};
criaBotao();

// Elemento 4 cores da paleta de Cores.
let coresPaleta = document.querySelectorAll('.color');

// Função altera cores de bg do título.
const mudaCorBgTitulo = (arrayDeCoresAleatorias) => {
	const titulo = document.querySelector('#title');
	let cor1 = arrayDeCoresAleatorias[0];
	let cor2 = arrayDeCoresAleatorias[1];
	let cor3 = arrayDeCoresAleatorias[2];
	console.log(cor1, cor2, cor3);
	titulo.style.backgroundImage = `linear-gradient(to right, ${cor1},${cor2},${cor3})`;
};

// Função gera as cores aleatoriamente na paleta.
const geraCoresAleatorias = () => {
	coresPaleta[0] = 'rgb(0,0,0)';
	let aleatoriasArr = [];

	for (let i = 1; i < colorElementsArr.length; i += 1) {
		let color1 = Math.floor(Math.random() * 256);
		let color2 = Math.floor(Math.random() * 256);
		let color3 = Math.floor(Math.random() * 256);
		let aleatorias = `rgb(${color1},${color2},${color3})`;

		if (color1 !== color2 && color2 !== color3 && color1 !== color3) {
			coresPaleta[i].style.backgroundColor = aleatorias;
		}
		aleatoriasArr.push(aleatorias);
	}
	mudaCorBgTitulo(aleatoriasArr);
	localStorage.setItem('colorPalette', JSON.stringify(aleatoriasArr));
};

// Elemento botão Cores aleatórias.
const btnCoresAleatorias = document.querySelector('#button-random-color');

// EVENTO GERA CORES ALEATÓRIAS.
btnCoresAleatorias.addEventListener('click', geraCoresAleatorias);

// Função cria botão limpar.
const criaBtnClearBoard = () => {
	const sectionMeio = document.querySelector('#section-meio');
	const btnClearBoard = document.createElement('button');
	btnClearBoard.id = 'clear-board';
	btnClearBoard.innerHTML = 'Limpar';
	// document.body.appendChild(btnClearBoard);
	sectionMeio.appendChild(btnClearBoard);
};
criaBtnClearBoard();

// Função cria elemento input board-size.
const criaInputBoardSize = () => {
	const sectionMeio = document.querySelector('#section-meio');
	const inputBoardSize = document.createElement('input');
	inputBoardSize.id = 'board-size';
	inputBoardSize.placeholder = 'Largura do quadro';
	inputBoardSize.type = 'number';
	inputBoardSize.min = 1;
	// document.body.appendChild(inputBoardSize);
	sectionMeio.appendChild(inputBoardSize);
};
criaInputBoardSize();

// Função cria botão 'VQV' para ativar input.
const criaBtnVqv = () => {
	const sectionMeio = document.querySelector('#section-meio');
	const btnVqv = document.createElement('button');
	btnVqv.id = 'generate-board';
	btnVqv.innerHTML = 'VQV';
	// document.body.appendChild(btnVqv);
	sectionMeio.appendChild(btnVqv);
};
criaBtnVqv();

// Elemento botão Limpar.
const btnClearBoard = document.querySelector('#clear-board');

// Função cria Pixel Board.
const criaPixelBoard = () => {
	const pixelBoard = document.createElement('div');
	pixelBoard.id = 'pixel-board';
	document.body.appendChild(pixelBoard);
};
criaPixelBoard();

// Elemento pixel Board.
const pixelBoard = document.querySelector('#pixel-board');

// Variável quantidade pixels do Pixel Board.
let totalPixels = 25;

// Função cria pixels dentro do Pixel Board.
const criaPixels = () => {
	const pixelBoard = document.querySelector('#pixel-board');

	for (let i = 0; i < totalPixels; i += 1) {
		const pixel = document.createElement('div');
		pixel.className = 'pixel';
		pixelBoard.appendChild(pixel);
	}
};
criaPixels();

// Função remove pixels do Pixel Board.
const removePixels = () => {
	const pixel = document.querySelectorAll('.pixel');

	for (let i = 0; i < pixel.length; i += 1) {
		// console.log(pixel[i]);
		pixel[i].remove();
	}
};

// Função limpa Pixel Board.
const clearPixelBoard = () => {
	const pixel = document.querySelectorAll('.pixel');

	for (let i = 0; i < pixel.length; i += 1) {
		pixel[i].style.backgroundColor = 'white';
		console.log(pixel[i].className);
	}
	localStorage.removeItem('pixelBoard');
};
// EVENTO
btnClearBoard.addEventListener('click', clearPixelBoard);

// Função muda quantidade de pixels de acordo com o input;
const mudaTamanhoPixelBoard = (inputNum) => {
	// const inputBoardSize = document.querySelector('#board-size');
	// const btnVqv = document.querySelector('#generate-board');
	const pixelBoard = document.querySelector('#pixel-board');
	let qtd = inputNum;

	pixelBoard.style.gridTemplateColumns = `repeat(${qtd}, 40px)`;
	pixelBoard.style.gridTemplateRows = `repeat(${qtd}, 40px)`;

	totalPixels = qtd * qtd;
	localStorage.setItem('boardSize', inputNum);
	removePixels();
	criaPixels();
	console.log('criei a tabela de tantos pixels');
};

// Função testa se input passa nas condições;
const testaInput = () => {
	const inputBoardSize = document.querySelector('#board-size');
	let inputNum = inputBoardSize.value;

	if (inputBoardSize.value.length <= 0) {
		return window.alert('Board inválido!');
	}
	if (inputBoardSize.value < 5) {
		inputNum = 5;
	}
	if (inputBoardSize.value > 50) {
		inputNum = 50;
	}
	mudaTamanhoPixelBoard(inputNum);
};

// Elemento botão VQV.
const btnVqv = document.querySelector('#generate-board');
// EVENTO
btnVqv.addEventListener('click', testaInput);


// Função atribui class 'selected' ao elemento clicado na paleta.
const selectColor = (event) => {
	for (let i = 0; i < coresPaleta.length; i += 1) {
		// console.log(coresPaleta[i].className)
		coresPaleta[i].classList.remove('selected');
	}
	if (event.target.className !== 'selected') {
		event.target.classList.add('selected');
	}
};
// EVENTO
colorPalette.addEventListener('click', selectColor);

// Função pinta o pixel com a cor selecionada.
const paintPixel = (event) => {
	const selectedElement = document.querySelector('.selected');
	const pixel = document.querySelectorAll('.pixel');

	let colorPicked = selectedElement.style.backgroundColor;
	event.target.style.backgroundColor = colorPicked;
	let pixelInfoArr = [];

	for (let i = 0; i < pixel.length; i += 1) {
		const pixelColor = pixel[i].style.backgroundColor;
		pixelInfoArr.push(pixelColor);
	}
	localStorage.setItem('pixelBoard', JSON.stringify(pixelInfoArr));
};
// EVENTO
pixelBoard.addEventListener('click', paintPixel);

// Função recupera ultima paleta de cores;
const recuperaPaletaDeCores = () => {
	let coresPaleta = document.querySelectorAll('.color');

	if (localStorage.getItem('colorPalette')) {
		const localColors = localStorage.getItem('colorPalette');
		const coresSalvas = JSON.parse(localColors);
		// let coresPaleta = document.querySelectorAll('.color');
		coresPaleta[0] = 'rgb(0,0,0)';

		for (let i = 1; i < coresPaleta.length; i += 1) {
			coresPaleta[i].style.backgroundColor = coresSalvas[i - 1];
		}
	}
};

// Função recupera pixel pintados.
const recuperaPixelsPintados = () => {
	const pixel = document.querySelectorAll('.pixel');

	if (localStorage.getItem('pixelBoard')) {
		const pixelInfo = JSON.parse(localStorage.getItem('pixelBoard'));
		for (let i = 0; i < pixel.length; i += 1) {
			pixel[i].style.backgroundColor = pixelInfo[i];
		}
		console.log('carreguei pixel color abaixo');
		console.log(pixelInfo);
	}
};

// Função recupera tamanho do Pixel Board.
const recuperaTamanhoPixelBoard = () => {
	if (localStorage.getItem('boardSize')) {
		mudaTamanhoPixelBoard(localStorage.getItem('boardSize'));
		// inputBoardSize.value = localStorage.getItem('boardSize');
		console.log('carreguei board size');
	}
};

// Função gera botão mudança de background.
const criaBtnMudaBg = () => {
	const btnBg = document.createElement('button');
	btnBg.id = 'btn-muda-bg';
	btnBg.innerHTML = 'Cor de fundo';
	document.body.appendChild(btnBg);
};
criaBtnMudaBg();

// Função muda cor do background.
const mudaCorBg = () => {
	// const bg = document.body;
	document.body.classList.toggle('muda-bg');
};

// EVENTO
const btnBg = document.querySelector('#btn-muda-bg');
btnBg.addEventListener('click', mudaCorBg);

window.addEventListener('load', () => {
	coresPaleta[0].classList.add('selected');

	recuperaTamanhoPixelBoard();
	recuperaPixelsPintados();
	recuperaPaletaDeCores();
});