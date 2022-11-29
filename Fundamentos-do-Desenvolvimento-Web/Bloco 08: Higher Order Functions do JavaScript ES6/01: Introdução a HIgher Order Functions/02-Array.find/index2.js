const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Adicione seu código aqui

const findNameWithFiveLetters = () => {
	return names.find((name) => name.length === 5);
  };
  
console.log(findNameWithFiveLetters()); // Irene