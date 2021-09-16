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

// // null
// function print(person) {
//     if (person === undefined) {
//         return;
//     }
//     console.log(person.name);
// }

// const person = null;

// print(person);

// // 결과 : null

//

// // Nothing
// function print(person) {
//     if (person === undefined || person === null) {
//         return;
//     }
//     console.log(person.name);
// }

// const person = null;

// print(person);

// // 결과 :

// 비교 할때마다 undefined 와 null 을 같이 이런식으로 비교하는 방법보다 간단한 방법이 있다.

//

// // Nothing
// function print(person) {
//     if (!person) {
//         return;
//     }
//     console.log(person.name);
// }

// const person = null;

// print(person);

// // 결과 :

// // { undefined || null } 을 사용했을 때와 같은 기능을 해준다.
// // 앞에 ! 가 붙었을때는 true 는 false 로 false 는 true 로 바뀐다.
// console.log(!undefined);
// // true
// console.log(!null);
// // true
// console.log(!0);
// // true
// console.log(!'');
// // true
// console.log(!NaN); // NaN = Not a Number
// // true
// // NaN 이란 예를 들어 숫자를 문자로 나눴을 때 더이상 숫자가 아닌것으로 간주한다.
// const value = 1 / 'a';
// console.log(value);
// // NaN : 숫자가 아닌것
// console.log(!false);
// // true

// // 즉 undefined, null, 0, '', NaN 이 다섯가지는 false 와 같은 개념으로 Falsy 이다.

// // 그 외 나머지는 다 Truthy 다.

// // 예를 들어
// console.log(!3);
// // false
// console.log(!'hello');
// // false
// console.log(!['array']);
// // false
// console.log(![]);
// // false
// console.log(!{});
// // false

// 꼭 !(느낌표) 를 쓰지 않고도 작성해 볼 수 있다.
// 예를 들어
// const value = { a: 1 };
// if (value) {
//     console.log('value 가 Truthy 하네요.');
// }
// // 결과 : value 가 Truthy 하네요.

// // value 에 null 을 넣어 보자

// const value = null;
// if (value) {
//     console.log('value 가 Truthy 하네요.');
// }
// // 결과 : Nothing (아무값도 나타나지 않음)

// value 값이 Truthy 하면 true 로, Falsy 하면 False 로 바꾸어 보자
// 삼항연산자 ? : 를 사용할 것이다.

// const value = null;

// const truthy = value ? true : false;
// console.log(truthy);
// // 결과 : false

// const value = []; // 숫자, 객체, 문자 등등

// const truthy = value ? true : false;
// console.log(truthy);
// // 결과 : true

// 꼭 삼항연산자를 사용하지 않아도 된다.

// const value = []; // 숫자, 객체, 문자 등등

// const truthy = !!value; // !!(느낌표 두개) 를 붙혀주면 된다. 앞에
// console.log(truthy);
// // 결과 : true

const value = 0;

const truthy = !!value;
console.log(truthy);
// 결과 : true
