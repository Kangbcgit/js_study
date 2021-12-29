/* 내코드
var numbers = [];
var result = 0;
var j = -1;

while (true) {
    numbers.push(prompt(`숫자를 입력하세요.\n그만두려면 '그만'이라고 입력해주세요. `));
    j++;
    if (numbers[j] === '그만') {
        numbers.pop();
        for (var i = 0; i < numbers.length; i++) {
            result += Number(numbers[i]);
        }
        alert(`입력한 값의 총합: ${result}`)
        break;
    }
}
*/
/* 형코드
var numbers = [];
var result = 0;

while (true) {
    var input = prompt(`숫자를 입력하세요.\n그만두려면 '그만'이라고 입력해주세요. `);
    
    if (input === "그만") break;
    else numbers.push(Number(input));    
}

for (var value of number) result += value;

alert(`입력한 값의 총합: ${result}`)
*/

// 선생님 코드
// var numbers = [];

// while (true) {

//     var num = prompt(`숫자를 입력하세요.\n그만두려면 '그만'이라고 입력하세요!`);

//     if (num === '그만') break;

//     //기존에 입력한 숫자들을 순차적으로 저장
//     numbers.push(+num);
// }


// //총합 계산
// var total = 0;
// for (var n of numbers) {
//     total += n;
// }
// alert(`입력한 숫자 총합: ${total}`);
