//Truthy & Falsy

// Truthy : true 같은것
// Falsy  : false 같은것

// // Truthy
//  function print(person) {
//      console.log(person.name);
//  }

//  const person = {
//      name: 'John',
//  };

//  print(person);

//  // 결과 : John

//

// // Falsy
// function print(person) {
//     console.log(person.name);
// }

// const person = {
//     name: 'John',
// };

// print();

// // 결과 : undifined

//

// // Nothing
// function print(person) {
//     if (person === undefined) {
//         return;
//     }
//     console.log(person.name);
// }

// const person = {
//     name: 'John',
// };

// print();

// // 결과 :

//

// null
function print(person) {
    if (person === undefined) {
        return;
    }
    console.log(person.name);
}

const person = null;

print(person);

// 결과 : null
