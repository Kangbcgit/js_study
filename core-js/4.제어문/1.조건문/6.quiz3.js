
var integerA = +prompt(`숫자A를 입력하세요`);

var integerB = +prompt(`숫자B를 입력하세요`);

if(integerA === integerB){
    var integerC = +prompt(`숫자C를 입력하세요`);
    if(integerA === integerB === integerC){
        alert(`3개 값이 모두 같습니다.`);
    }else {
        alert(`2개 값이 같습니다.`);
    }
}else {
    var integerC = +prompt(`숫자C를 입력하세요`);
    if(integerA === integerC || integerB === integerC){
        alert(`2개의 값이 같습니다.`);
    }else{
        alert(`값이 모두 다릅니다.`)
    }
}
