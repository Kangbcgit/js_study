// splice(a, b, 'c') : a = 시작 지점 , b 지우는 개수, c = 지운 자리에 문자열 삽입 /배열의 특정 요소 제거 --유사 요소 pop()맨뒤 제거, shift()맨앞제거
var pets = ['멍멍이', '야옹이', '짹짹이', '고라니'];

console.log(pets);

pets.splice(1, 2);
console.log(pets);

pets.splice(0, 1, '어흥이');
console.log(pets);

// 1번 위치에 꽥꽥이 삽입
pets.splice(1, 0, '꽥꽥이');
console.log(pets);

// 1번부터 끝까지 삭제
pets.splice(1);
console.log(pets);

pets.push('야옹이', '징징이', '깔깔이');
console.log(pets);

// 삭제 
var deleteTarget = '어d이';
if (pets.includes(deleteTarget)) {
    pets.splice(pets.indexOf(deleteTarget), 1);
} else {
    console.log(`${deleteTarget}은 존재하지 않는 데이터입니다.`);
}
console.log(pets);