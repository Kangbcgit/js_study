// 1번 문제
var user = {};

user.name = 'John';
user.surname = 'Smith';

user.name = 'Pete';
console.log(user.name);
// 2번 문제

var salaries = {
    kim: 1000000,
    park: 1600000,
    lee: 1300000
}

var total = 0;

for(var plus in salaries) {
    total += salaries[plus];
}
console.log(total);