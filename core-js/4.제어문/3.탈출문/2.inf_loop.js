

// 사용자에게 반복해서 숫자를 입력받을 건데 100보다 큰 수를 입력할때까지
// 입력 받을 것이다.
var i = 0;
while (i < 3) {
    var num = +prompt(`숫자를 입력!`)
    if (num > 100) {
        break;
    }
}

alert(`반복문 끗`)