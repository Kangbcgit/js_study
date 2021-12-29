/*
//가로길이
var width = +prompt('한 변(1): ');
//세로길이
var height = +prompt('한 변(2): ');

//가로 세로 보정
if (width < height) {
    var t = width;
    width = height;
    height = t;
}


var result = '';

for (var y = 1; y <= height; y++) {
    for (var x = 1; x <= width; x++) {
        result += `* `;
    }
    result += '\n';
}
alert(result);
*/

var x = +prompt(`한 변(1): `),
    y = +prompt(`한 변(2): `),
    result = ``;

if (x > y) {
    for (var i = 1; i <= y; i++) {
        for (var j = 1; j <= x; j++) {
            if (j === x) {
                result += `*\n`;
            } else {
                  result += `*   `;
            }
        }
    }
} else {
    for (var i = 1; i <= x; i++) {
        for (var j = 1; j <= y; j++) {
            if (j === y) {
                result += `*\n`;
            } else {
                result += `*   `;
            }
        }
    }
}
alert(result);