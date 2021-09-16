// const a = 1;
// const b = 2;
// const sum = a + b;
// console.log(sum);
// // 결과 : 3

// function add(a, b) {
//     return a + b;
// }

// const sum = add(1, 2);
// console.log(sum);
// // 결과 : 3

//

// ES6 prevVersion
// function hello(name) {
//     console.log('Hello, ' + name + '!');
// }
// hello('WhyJ');
// // 결과 : Hello, WhyJ!

// function 이라는 키워드로 선언한다.
// function 에는 이름이 필요하다.
// 이름 옆에는 파라미터(함수로 받을 값) 을 ()둥근괄호 안에 선언한다.
// {} 중괄호 안에서는 실행구문 을 선언한다.

// ES6 Version
// 리터럴(Template Literal)
// ` ` (백틱) 사용
// function hello(name) {
//     console.log(`Hello ${name}!`);
// }
// hello('WhyJ');
// // 결과 : Hello WhyJ!

// return 을 사용 할 수도 있다.
// function hello(name) {
//     return `Hello ${name}!`;
// }
// const result = hello('WhyJ');
// console.log(result);
// // 결과 : Hello WhyJ!

// 다만, return 을 사용하게 되면 함수(function) 은 종료된다.
function hello(name) {
    return `Hello ${name}!`;
}
const result = hello('WhyJ');
console.log(result);

//
//
//
