
var integerA = +prompt(`첫번째 정수를 입력하세요.`),
    integerB = +prompt(`두번째 정수를 입력하세요.`),
    formula = integerA - integerB;

if(formula<0){
    alert(`두 값의 차이는 ${-formula}입니다.`);
}else{
    alert(`두 값의 차이는 ${formula}입니다.`);
}

