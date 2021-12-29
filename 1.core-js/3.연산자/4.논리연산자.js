
// && : AND연산
var t = true, f = false;

console.log(t && t); // true
console.log(t && f); // false
console.log(f && t); // false
console.log(f && f); // false

// || : OR 연산 
console.log('=====================');

console.log(t || t); // true
console.log(t || f); // true
console.log(f || t); // true
console.log(f || f); // false

// NOT 연산 (!) : 논리 반전
console.log('=====================');

console.log(!t);
console.log(!f);

var money = 1000;
if (money) {
    console.log('나는 돈이 있어요~');
} else {
    console.log('나는 그지에요~~');
}