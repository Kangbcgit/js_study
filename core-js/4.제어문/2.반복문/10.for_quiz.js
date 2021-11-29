// 선생님이 하신거
// var n = +prompt(`양의 정수를 입력하세요.`);

// var result = ``;

// for (var i = 2; i <= n; i *= 2) {
//     result += (i + ` `);
// }




var num = +prompt(`양의 정수를 입력하세요.`),
    result = ``;

for (var i = 1; 2 ** i <= num; i++) {
    result += `${2 ** i} `;
}

alert(result)