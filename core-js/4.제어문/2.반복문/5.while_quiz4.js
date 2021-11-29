// var last = +prompt(`양의 정수를 입력해주세요.`),
//     n = 1,
//     ten = 0,
//     text = ``;

// while (n <= last) {
//     if (ten <10) {
//         text +=`${ten + 1}`;
//         ten++;
//     }else {
//         ten -= 10;
//         text +=`${ten}`;
//     }
//     n++;
// }
// alert(text);


var max = +prompt(`양의 정수를 입력해주세요`),
    text = ``,
    n = 1;


while (n <= max) {
    text += `${n % 10}`
    n++;
}

alert(text);
