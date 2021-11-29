var n = +prompt('정사각형을 그립니다.\n높이는 얼마입니까?');

var i = 1;
var result = '';
while (i <= n) {
    var j = 1;
    while (j <= n) {
        result += '*   ';
        j++;
    }
    result += '\n';
    i++;
}
alert(result);