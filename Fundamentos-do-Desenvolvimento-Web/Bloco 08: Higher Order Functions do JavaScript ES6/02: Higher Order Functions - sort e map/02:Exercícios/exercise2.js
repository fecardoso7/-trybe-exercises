const expectedResult = [
	{
	  author: 'Isaac Asimov',
	  age: 31,
	},
	{
	  author: 'H. P. Lovecraft',
	  age: 38,
	},
	{
	  author: 'Stephen King',
	  age: 39,
	},
	{
	  author: 'George R. R. Martin',
	  age: 43,
	},
	{
	  author: 'Frank Herbert',
	  age: 45,
	},
	{
	  author: 'J. R. R. Tolkien',
	  age: 62,
	},
  ];
  
  const nameAndAge = () => {
	// escreva seu código aqui
	return books
    .map((book) => (
      {
        author: book.author.name,
        age: book.releaseYear - book.author.birthYear,
      }
    ))
    .sort((obj1, obj2) => obj1.age - obj2.age);
  }