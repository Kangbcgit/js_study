//객체 생성 (if문, 조건문 {}는 블럭이라고 부름)
// {} 뒤에 ; 붙으면 객체
//객체는 키값의 순서가 바뀌어도 상관이 없음.(배열은 순서 바꾸면 인덱스가 바뀜)
var dog = {
    name: '뽀삐',
    kind: '진돗개',
    age: 3,
    injection: true,
    favorite: ['산책', '간식']
};

var cat = {
    name: '콩순이',
    kind: '블랙러시안',
    age: 2,
    injection: true,
    favorite: ['낮잠', '캣타워']
};

console.log(typeof cat);

//객체에 저장된 데이터 참조
console.log(dog.name);
console.log(cat.age);
console.log(cat.favorite);
console.log(dog.favorite[0]);

//프로퍼티 참조 2
console.log('========================');
console.log(dog.injection);
//대괄호 참조시에는 문자열형태로 key를 사용
console.log(dog['injection']);
console.log(cat['age']);

//프로퍼티 값 수정
dog.age = 4;

cat.favorite.splice(1, 0, '실뭉치');
console.log(cat.favorite);

//프로퍼티 동적 추가 (존재하지 않는 key로 새로운 값 할당)
cat.owner = '김철수';
console.log(cat);

//프로퍼티 삭제
delete cat.owner;
console.log(cat);