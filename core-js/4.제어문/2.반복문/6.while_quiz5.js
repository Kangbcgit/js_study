var n = +prompt(`n의 값: `),
    i = 1,
    result = ``;


while (i < n) {
    result += `${i}의 제곱은${i ** 2}다\n`;
    i++;
}

alert(result);