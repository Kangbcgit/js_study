// 중첩 반복문

// for (var i = 1; i <= 3; i++) {
//     for (var j = 1; j <= 4; j++) {

//     }
// }

//단수 저장
for (var level = 1; level <= 9; level++) {
    for (var line = 1; line <= 9; line++) {
        console.log(`${level} x ${line} = ${level * line}`);
    }
    console.log(`==========================================`);0
}