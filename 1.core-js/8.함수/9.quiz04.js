// 2개의 숫자를 전달받아 작은 수를 리턴

function min2(num1, num2) {
    var result = 0;
    if (num1 < num2) {
        result += num1;
    } else if (num1 > num2) {
        result += num2;
    }
    return result;
}

function min3(num1, num2, num3) {
    result = 0;
    if (num1 > num2) {
        num2 > num3 ? result += num3 : result += num2;
    } else {
        num1 > num3 ? result += num3 : result += num1;
    }
    return result;
}

function minAll(...nums) {
    var min = nums[0]
    for (var i = 1; i < num.length; i++) {

        if (min > nums[i]) {
            min = nums[i]
        }
    }
    return min;
}

// function isEven(num) {
//     return num % 2 === 0;
// }
var isEven = num => num % 2 === 0;


// 숫자 1개를 전달하면  해당 숫자가 짝수인지 판별하는 함수
// 24를 전달하면 true 리턴, 홀수를 전달하면 false리턴,
// 단, 0은 짝수취급
var result = isEven(24);



// n개의 숫자중 최소갑승ㄹ 가져와야 함.
// var result = minAll(55, 6, 71, 94, 100, 999, 3, 56, 877);



// 셋중에 가장 작은 수 50이 result에 저장되어야 함.
// var result = min3(120, 50, 99);

// var result = min2(34, 56);

//result에는 34가 리턴되어야 함.
console.log(`result: ${result}`);