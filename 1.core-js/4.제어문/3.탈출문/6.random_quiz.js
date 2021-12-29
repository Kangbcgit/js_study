var num = Math.floor(Math.random() * 8) + 2;
var text = ``

for (var i = 1; i < 10; i++) {
    text += `${num} x ${i} = ${num * i}\n`
}
console.log(`==================`);
console.log(`랜덤 구구단 ${num}단`);
console.log(`==================`);
console.log(text);