
var x = +prompt(`양의 정수를 입력해주세요.`),
    n = 1,
    star = ``;

while (n <= x) {
    star += `*\n`;
    n++;
}
alert(star);