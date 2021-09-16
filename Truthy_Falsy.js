//Truthy & Falsy

// Truthy : true 같은것
// Falsy  : false 같은것

// Truthy
// function print(person) {
//     console.log(person.name);
// }

// const person = {
//     name: 'John',
// };

// print(person);

// // 결과 : John

// return;

// Falsy
function print(person) {
    console.log(person.name);
}

const person = {
    name: 'John',
};

print();

return;
