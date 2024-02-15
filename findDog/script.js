/*
  05
 
  - Encontre no array abaixo o cão com o nome "Zequinha" e exiba esse objeto  
    no console;
 
  Dica: procure pelo método find, no MDN.
*/

const dogs = [
     { name: 'Olivia', age: 3, gender: 'Female', breed: 'Maltês' },
     { name: 'Zé', age: 2, gender: 'Male', breed: 'Pug' },
     { name: 'Jade', age: 4, gender: 'Female', breed: 'Shiba inu' },
     { name: 'Zequinha', age: 7, gender: 'Male', breed: 'Poodle' },
     { name: 'Xica', age: 6, gender: 'Female', breed: 'Chihuahua' }
]

const found = dogs.find(dog => {
     dog.name === 'Zequinha'
})

console.log('csdcsd')