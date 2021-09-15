// Truthy
function print(person) {
    console.log(person.name);
}

const person = {
    name: 'john',
};

print(person);
// john 이라는 이름 확인

//

// Falsy
function print2(person2) {
    console.log(person2.name2);
}

const person2 = {
    name2: 'peter',
};

print();
// undefined

return;
