
// 상수: 불변의 고정값
const SALE_RATE = 0.2; //할인율 20%

const PI = 3.14159265; // 원주율 같은것들~

// sale_rate = 0.3; //값 변경 불가하다~

console.log(`sale_rate : ${SALE_RATE}`);

// const 와 객체(배열(객체), 객체, 함수(객체))
const PERSON = {
    name: '김철수',
    age: 30
};

//통쨰로 변경은 불가능, 이름.프로퍼티 변경은 가능
// PERSON = {
//     name: '박영희',
//     age: 20
// };

PERSON.name = '유가영'
console.log(PERSON.name);


for (let i = 0; i < 5; i++) {
    console.log(i);
}

document.getElementById('')