
var first = +prompt(`첫번째 숫자를 입력해주세요.`),
    last = +prompt(`두번째 숫자를 입력해주세요.`),
    start = first,
    result = 0;

while (start <= last) {
    result += start;
    start += 1;
}
alert(`${first} ~ ${last}까지의 총합: ${result}`)