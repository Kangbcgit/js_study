var result = [];
var text1 = {
    a: 10,
    b: 20,
    c: {
        ca: 20,
        cb: 30
    }
}
var inCopy = (...target) => {
    for (let i = 0; i < target.length; i++) {
        result[i] = target[i];
        if (result[i].length > 0) {
            inCopy(...target[i])
        }
    }

    return result;
}

var copy = (...target) => {
    inCopy(...target);
    Object.assign({}, result);
    return result;
}

var text2 = copy(text1);
// text2.c.ca = 50;
console.log(text1);
console.log('========================');
console.log(text2);
text2[0].c.ca = 50;
console.log(text1.c.ca);
console.log(text2[0].c.ca);
