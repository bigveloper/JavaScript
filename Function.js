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
// function hello(name) {
//     return `Hello ${name}!`;
//     console.log(name)
//     return
// }
// const result = hello('WhyJ');
// console.log(result);

// return 으로 종료되었기 때문에, return 아래 {} 블록 안에선 어떠한 기능도 수행하지 않는다.

//
//
//

function getGrade(score) {
    if (score === 100) {
        return 'A+';
    } else if (score >= 90) {
        return 'A';
    } else if (score === 89) {
        return 'B+';
    } else if (score >= 80) {
        return 'B';
    } else if (score === 79) {
        return 'C+';
    } else if (score >= 70) {
        return 'C';
    } else if (score === 69) {
        return 'D+';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

const grade = getGrade(30);
console.log(grade);

// 결과 : 30
