var greeting;
greeting = 'hello';
greeting = "안녕~~"
greeting = `잘가!`

console.log(typeof greeting);

var str = '그는 나에게 "안녕" 이라고 말했다';
console.log(str);

var str2 = "Let's Go!"
console.log(str2);

var str3 = "그는| 나에게 \"안녕\"이라고 말했다.";
console.log(str3);

var str4 = 'Let\'s Go! "together"';
console.log(str4);

//탈출 문자
var str5 = '멍멍이\n\n\n야옹이'
console.log(str5);

var str6 = '멍멍이\t\t\t야옹이'
console.log(str6);

var filePath = `D:\\temp\\new.png`;
console.log(filePath);

//템플릿 리터럴 (ES6+ 문법)
// var tag = '<ul><li><a href="#">네이버링크</a></li></ul>';

var tag = `
<ul>
    <li>
        <a href="#">네이버링크</a>
    </li>
</ul>`

console.log(tag);

var month = 12;
var day = 25;
var anniversary = '크리스마스'

var asdf = month + '월 ' + day + '일은 ' + anniversary + '입니다.';
// ` 백틱 등장

var qwer = `${month}월 ${day}일은 ${anniversary}입니다.`
console.log(qwer);


console.log(asdf);