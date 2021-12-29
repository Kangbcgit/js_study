var last = +prompt(`양의 정수를 입력해주세요.`),
    n = 1,
    text =``;

while (n <= last) {
    if (n % 2 === 1) {
        text +=`+`
    }else {
        text +=`-`
    }
    n++;
}
alert(text);