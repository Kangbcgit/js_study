

//매개변수 x : 지역 스코프
var outer = x => {
    var y = 'outer local y';
    console.log(x);
    console.log(y);

    var inner = () => {
        var x = 'inner local x';
        var z = 'inner local z';
        console.log(x);
        console.log(y);
        console.log(z);
    }
    inner();
}

var x = 'global x';


outer('outer param x');



