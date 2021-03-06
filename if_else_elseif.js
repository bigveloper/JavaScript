//
//
//

// 조건문

// if
// const a = 1;
// if (a + 1 === 2) {
//     console.log('a + 1 이 2 입니다.');
// }
// // 결과 : a + 1 이 2 입니다.

// const a = 5;
// if (a + 1 === 2) {
//     console.log('a + 1 이 2 입니다.');
// }
// // 결과 : (아무 내용도 나오지 않는다.)

// 특정 조건이 만족 될 때 특정 코드가 실행 된다.
// 실행 될 특정 코드는 {} 중괄호 안에 작성한다.
// 실행 될 특정 코드는 꼭 한줄이 아닐 수 있다.

// const a = 1;
// if (a + 1 === 2) {
//     console.log('a + 1 이 2 입니다.');
//     console.log('두줄이 나올 수 도 있지');
//     console.log('세줄도 가능하지');
// }
// // 결과 :
// // a + 1 이 2 입니다.
// // 두줄이 나올 수 도 있지
// // 세줄도 가능하지

// {} 중괄호의 영역 안과 밖에서는 같은 변수명을 사용 할 수 있다.

// const a = 1;
// if (a + 1 === 2) {
//     const a = 2;
//     console.log('if문 안의 a 값은' + a);
// }
// console.log('if문 밖의 a 값은' + a);

// // 결과 :
// // if문 안의 a 값은2
// // if문 밖의 a 값은1

// {} 중괄호 내부와 외부는 다른 영역이다.

// // 그러나 var 를 사용했을 때는 다르다. var 를 사용하지 않는 이유!!
// var a = 1;
// if (a + 1 === 2) {
//     var a = 2;
//     console.log('if문 안의 a 값은' + a);
// }
// console.log('if문 밖의 a 값은' + a);

// // 결과 :
// // if문 안의 a 값은2
// // if문 밖의 a 값은2

// 이러한 속성의 이유 때문에 var 를 사용하지 않는다.

// if 문은 어떠한 특정 조건에 부합 했을 때 특정 명령이 실행 된다.

//

// if-else
// if 문 같은 경우 특정 조건이 부합하면 특정 명령을 실행 하라 였다.
// if-else 같은 경우는 특정 조건이 부합하면 특정 명령을 하고, 아니면 다른 특정 명령을 하라 이다.
// const a = 10;
// if (a > 15) {
//     console.log('a가 15보다 큽니다.');
// } else {
//     console.log('a가 15보다 크지 않습니다.');
// }
// // 결과 : a가 15보다 크지 않습니다.
// 특정 조건에 부합하지 않았다.(= a 가 15 보다 크지 않았다.) 그래서 else 다음 특정 명령을 실행 한 것이다.

//

// else if

// const a = 10;

// if (a === 5) {
//     console.log('5 입니다!');
// } else if (a === 10) {
//     console.log('10 입니다!');
// } else {
//     console.log('5도 아니고 10도 아닙니다!');
// }
// // 결과 : 10 입니다!
// if 에서 특정 조건에 부합하지 않아, else if 문이 실행 되었고 특정 조건에 부합하여 '10 입니다!' 가 출력 되었다.

// 5 도 아니고 10 도 아닌 7 이란 숫자를 넣어 보자.

// const a = 7;

// if (a === 5) {
//     console.log('5 입니다!');
// } else if (a === 10) {
//     console.log('10 입니다!');
// } else {
//     console.log('5도 아니고 10도 아닙니다!');
// }
// // 결과 : 5도 아니고 10도 아닙니다!
// if 와 else if 의 특정 조건들이 모두 부합되지 않아 else 가 실행 되어 '5도 아니고 10도 아닙니다!' 가 출력 되었다.

// else if 는 여러번 사용 할 수 있다.

// const a = 7;

// if (a === 5) {
//     console.log('5 입니다!');
// } else if (a === 10) {
//     console.log('10 입니다!');
// } else if (a === 7) {
//     console.log('7 입니다!');
// } else {
//     console.log('5도 아니고 10도 아닙니다!');
// }
// // 결과 : 7 입니다!
// 위와 같이 else if 는 특정 조건 을 위해 여러번 사용 가능하다.

//
//
//
