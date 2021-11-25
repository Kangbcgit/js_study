var integerA = +prompt(`첫번째 정수를 입력하세요`),
    integerB = +prompt(`두번째 정수를 입력하세요.`);

if(integerA < integerB){
    var integerC = +prompt(`세번째 정수를 입력하세요.`);
    if(integerA < integerC){
        alert(`최솟값은 ${integerA}입니다.`)
    }else {
        alert(`최솟값은 ${integerC}입니다.`)
    }
}else {
    var integerC = +prompt(`세번째 정수를 입력하세요.`);
    if(integerB < integerC){
        alert(`최솟값은 ${integerB}입니다.`)
    }else {
        alert(`최솟값은 ${integerC}입니다.`)
    }
}
// 모범답안
// var min = a;
// if (b < min) min = b;
// if (c < min) min = c;
