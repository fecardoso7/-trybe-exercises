let status = 'desligado';

const ligarDesligar = () => {
  if (status === 'desligado') {
	return status = 'ligado';
  } else {
	return status = 'desligado';
  }
}

console.log(`O motor está ${ligarDesligar()}`); //  O motor está ligado
console.log(`O motor está ${ligarDesligar()}`); // O motor está desligado
console.log(`O motor está ${ligarDesligar()}`); // O motor está ligado