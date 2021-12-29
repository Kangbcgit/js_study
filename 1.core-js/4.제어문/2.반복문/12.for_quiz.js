var input = +prompt(`정숫값: `),
    measure = ``,
    result = 0;

for (var i = 1; i <= input; i++) {
    if (input % i === 0) {
        measure += `${i}\n`;
        result += 1;
    }
}
alert(`${measure}약수는 ${result}개입니다.`);
