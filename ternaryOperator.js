//
//
// 삼항 연산자

// condition ? true : false
// aespa ? nextLevel : rollin

// // 삼항 연산자를 사용하지 않은 코드
// const array = [1, 2];
// let text = '';

// if (array.length === 0) {
//     text = '배열이 비어있습니다.';
// } else {
//     text = '배열이 비어있지 않습니다.';
// }

// console.log(text);
// // 결과 : 배열이 비어있지 않습니다.

// // const array = []; 라면, 배열이 비어있습니다. 출력

//

// // 삼항 연산자를 사용한 코드

// const array = [1, 2];
// let text = array.length === 0 ? '배열이 비어있습니다.' : '배열이 비어있지 않습니다.';

// console.log(text);
// // 결과 : '배열이 비어있지 않습니다.'

// // const array = []; 라면, 배열이 비어있습니다. 출력

//

// // 중첩해서 사용하는 삼항 연산자

// const condition1 = false;
// const condition2 = false;

// const value = condition1 ? '와우!' : condition2 ? 'blabla' : 'foo';

// console.log(value);
// // 결과 : foo

//

// 중첩해서 사용하는 삼항 연산자는 가급적 잘 사용하지 않는다.
// 이럴때에는 if 를 사용하는 것이 더 좋을 수 있다.
//
//
