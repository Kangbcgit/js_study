//배열의 생성
//배열 변수이름 관레 : 복수형(s), -List (ex: fruitList)

var fruits = [`사과`, `포도`, `오렌지`, `복숭아`, `자몽`, `레몬`];

console.log(`배열의 길이: ${fruits.length}개`);

//배열의 요소(element) 참조
console.log(`배열의 3번째 데이터 참조: ${fruits[2]}`);

var apple = fruits[0];
console.log(`apple: ${apple}`);

//배열 요소 수정
fruits[4] = `파인애플`;
console.log(fruits[4]);

//배열 내부 데이터 전체 참조(전체 순회)
console.log(`====================`);

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits[10] = '용과'
console.log(fruits[8]);
console.log(fruits[10]);