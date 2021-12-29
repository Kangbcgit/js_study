/* 쌤이하신거
var n = +prompt('몇 개의 *를 출력할까요?');

var i = 1;
var result = '';
while (i <= n) {
    result += '*';
    if (i % 5 === 0) {
        result += '\n';
    }
    i++;
}
alert(result);
*/

var output = +prompt(`*을 몇개 그릴까요?`),
    n = 1,
    star = ``;

while (n <= output) {
    if (n % 5 === 0) {
        star += `*\n`;
    } else {
        star += `*`;
    }
    n++
}

alert(star);
