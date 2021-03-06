const { reverse } = require("dns");

var foods = ['김말이', '닭꼬치', '어묵', '볶음밥', '짜장면', '짬뽕'];

// indexOf() : 배열 데이터의 인덱스번호를 알려줌.
var index = foods.indexOf('어묵'); // 탐색실패시 -1 반환

console.log(`찾은 인덱스: ${index}`);

// slice() : 배열을 일정 부분 잘라내어 새로운 사본 배열 반환
console.log('===========================');
// 2번 이상 5번 미만 추출
var sliced = foods.slice(2, 5); // 0 < 2;

console.log(sliced);
console.log(foods);

var sliced2 = foods.slice(4); // 4번 배열요소부터 끝 요소까지
console.log(sliced2);

console.log('=====================');

var nums = [10, 20, 30, 40, 50];

// reverse(): 배열을 역순으로 재배치, 원본이 변화함
// for (var i = 0; i < Math.floor(nums.length / 2); i++) {
//     var temp;
//     temp = nums[i];
//     nums[i] = nums[nums.length - i - 1];
//     nums[nums.length - i - 1] = temp;
// }
// 위 주석과 같은말
nums.reverse();

console.log(nums);

console.log('=====================');

var arr1 = [10, 20, 30];
var arr2 = [100, 80, 60, 40];

//concated 라는 사본을 생성
var concated = arr1.concat(arr2);
console.log(concated);

// includes() : 배열에 특정 요소가 저장되어있는지 여부 확인
console.log('===================================');

var result = foods.includes('닭꼬치');
console.log(result);

console.log('===========================');

var file_name = 'D:/isec/image/gold_fish.jpg'

// 이미지확장자 : jpg, gif, png, svg(화갣해도 안꺠지는 이미지 확장자)
// indexOf(): 특정 요소의 인덱스를 반환
// substring(): 배열의 slice와 같은 효과
console.log(file_name.substring(file_name.indexOf('.') + 1));