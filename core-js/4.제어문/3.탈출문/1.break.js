
for (var i = 0; i <= 10; i++) {
    console.log(i);
    if (i === 5) {
        break;
    }
}

console.log(`반복문 끝!`);

console.log(`==========================`);

for (var i = 0; i < 3; i++) {
    for (var j = 0; j <2; j++) {
        console.log(`${i}, ${j}`);
    }
}