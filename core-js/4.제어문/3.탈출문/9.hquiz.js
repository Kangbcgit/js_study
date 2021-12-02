/* quiz 1
// 유저 입력 부분.
var userInput = +prompt(`넓이: `);

// 반복적으로 약수를 추출
var i = 1,
    num = ``
while (i <= userInput) {
    if (userInput % i === 0) {
        if (i < userInput / i) {
            num += `${i} x ${userInput / i}\n`;
        }
    }
    i++;
}
alert(num)
*/


/* quiz2
var userInputStar = +prompt(`몇 개의 *를 표시할까요?`),
    userInputEnter = +prompt(`몇 개마다 줄 바꿈할까요?`);

var i = 0,
    j = 0,
    star = ``;
while (i < userInputStar) {
    if (++j % userInputEnter === 0) {
        star += `*\n`
    } else {
        star += `*`
    }
    i++;
}

alert(star);
*/

class Reader
{
    constructor(__input)
    {
        this.__input = __input;
        this.__index = 0;
    }

    read() {
        const output = this.__input[this.__index++];
        return output;
    }
}

const __input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(v => Number(v));
var __reader = new Reader(__input);

var a = __reader.read();
var b = __Reader.read();

if (a > b) {
    console.log(`>`);
} else if (a < b) {
    console.log(`<`);
} else if (a === b) {
    console.log(`==`);
}