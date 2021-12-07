//성능 필요시 이것 엑세스 런타임 에러시 아래것
class Reader {
    constructor(__input) {
        this.__input = __input;
        this.__index = 0;
    }

    read() {
        const output = this.__input[this.__index++];
        return output;
    }
}

const __input = require('fs').readFileSync('/dev/stdin').toString().split(/ |\n/).map(v => Number(v));
var __reader = new Reader(__input);
// 코드 작성~~
/*
class Reader {
    constructor(__input) {
        this.__input = __input;
        this.__index = 0;
    }

    read() {
        const output = this.__input[this.__index++];
        return output;
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl
    .on('line', function (line) {
        input.push(line)
    })
    .on('close', function () {
        var __input = input;
        var __reader = __convert(__input);
        __action(__reader);
        process.exit();
    });

function __convert(__input_string) {
    var __input = [];
    for (var __line of __input_string) {
        var __value_list = __line.split(/ |\n/).map(v => Number(v));
        for (var __value of __value_list) {
            __input.push(__value);
        }
    }
    var __reader = new Reader(__input);

    return __reader;
}

function __action(__reader) {
    
} */
// 최근
class Reader {
    constructor(__input) {
        this.__input = __input;
        this.__index = 0;
    }

    read() {
        if (this.__index == this.__input.length) return undefined;
        else {
            const output = this.__input[this.__index++];
            return output;
        }
    }

    is_eof() {
        if (this.__index == this.__input.length) return true;
        else return false;
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl
    .on('line', function (line) {
        input.push(line)
    })
    .on('close', function () {
        var __input = input;
        var __reader = __convert(__input);
        __action(__reader);
        process.exit();
    });

function __convert(__input_string) {
    var __input = [];
    for (var __line of __input_string) {
        var __value_list = __line.split(/ |\n/).map(v => Number(v));
        for (var __value of __value_list) {
            __input.push(__value);
        }
    }
    var __reader = new Reader(__input);

    return __reader;
}



function __action(__reader) {
    var N = __reader.read();
    var num = __reader.read();
    var result = [];
    var max = +result[0];
    var min = +result[0];
    for (var i = 0; i < N; i++) {
        result.push(num);
    }
    for (var j = 1; j < result.length; j++) {
        if (max < result[j]) {
            max += +result[j]
        } else if (min > result[j]) {
            min += +result[j]
        }
    }

    console.log(`${min} ${max}`);
}