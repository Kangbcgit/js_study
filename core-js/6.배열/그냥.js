let n = 5;
let lost = [2, 4];
let reserve = [1, 3, 5];
let lostBackup = lost;
let answer = 0;

for (let i of lostBackup) {
    let minus = reserve.includes(+i - 1);
    let plus = reserve.includes(+i + 1);
    if (minus) {
        let lostInReserve = reserve.indexOf(+i - 1);
        reserve.splice(lostInReserve, 1);
        lost.splice(lostBackup.indexOf(i), 1);


        console.log(i);
        console.log(reserve);
        console.log('lenght' + lostBackup.length);
    } else if (plus) {
        let lostInReserve = reserve.indexOf(+i + 1);
        reserve.splice(lostInReserve);
        lost.splice(lostBackup.indexOf(i), 1);


        console.log('lenght' + lostBackup.length);
    }
    answer = n - lost.length;
}
console.log(answer);