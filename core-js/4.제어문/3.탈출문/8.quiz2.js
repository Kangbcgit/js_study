// alert(`~~~~~~~~ 재미있는 사칙연산 게임 ~~~~~~~~\n[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~\n============================]`)


// while (true) {
//     var selectLevel = +prompt(`~~~~~~~~~~~~~~~ 난이도를 설정합니다. ~~~~~~~~~~~~~~~\n [ 1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20) ]`)
//     if (selectLevel === 1) {
//         var level = 1;
//         break;
//     } else if (selectLevel === 2) {
//         var level = 2;
//         break;
//     } else if (selectLevel === 3) {
//         var level = 3;
//         break;
//     } else {
//         alert(`1~3중에 골라주세요`);
//     }
// }
// var tNY = 0,
//     tNN = 0;
// var qNumber = 1;
// while (true) {
//     if (level === 1) {
//         var numMin = Math.floor(Math.random() * 100) + 1,
//             numMax = Math.floor(Math.random() * 100) + 1;
//     } else if (level === 2) {
//         var numMin = Math.floor(Math.random() * 50) + 1,
//             numMax = Math.floor(Math.random() * 50) + 1;
//     } else if (level === 3) {
//         var numMin = Math.floor(Math.random() * 20) + 1,
//             numMax = Math.floor(Math.random() * 20) + 1;
//     }
//     if (numMin < numMax) {
//         var numEx = numMin;
//         numMin = numMax;
//         numMax = numEx;
//     }
//     var operator = Math.floor(Math.random() * 3) + 1;
//     // 연산자 1 +, 2 -, 3 *
//     if (operator === 1) {
//         var userAnswer = +prompt(`Q${qNumber}. ${numMin} + ${numMax} = ??`);
//         if (userAnswer === numMin + numMax) {
//             alert(`정답입니다!`);
//             tNY++;
//         } else if (userAnswer === 0) {
//             alert(`게임을 종료합니다!`);
//             break;
//         } else {
//             alert(`틀렸어요~`);
//             tNN++;
//         }
//     } else if (operator === 2) {
//         var userAnswer = +prompt(`Q${qNumber}. ${numMin} - ${numMax} = ??`);
//         if (userAnswer === numMin - numMax) {
//             alert(`정답입니다!`);
//             tNY++;
//         } else if (userAnswer === 0) {
//             alert(`게임을 종료합니다!`);
//             break;
//         } else {
//             alert(`틀렸어요~`);
//             tNN++;
//         }
//     } else if (operator === 3) {
//         var userAnswer = +prompt(`Q${qNumber}. ${numMin} X ${numMax} = ??`);
//         if (userAnswer === numMin * numMax) {
//             alert(`정답입니다!`);
//             tNY++
//         } else if (userAnswer === 0) {
//             alert(`게임을 종료합니다!`);
//             break;
//         } else {
//             alert(`틀렸어요~`);
//             tNN++;
//         }
//     }
//     qNumber++
// }
// alert(`정답횟수: ${tNY}회, 틀린횟수 : ${tNN}`)







/*
    시스템은 1~20사이의 무작위 정수 2개를 생성하여
    덧셈 문제를 출제해야한다.

    사용자는 출제된 문제의 정답을 입력할 수 있어야 한다.

    시스템은 사용자의 입력값을 확인해서 정답인지 오답인지를
    알려줘야 한다.

    시스템은 지속적으로 다른 문제를 출제하여 사용자가 0을 입력할 때까지
    답을 계속 입력받아야 한다.
*/


alert(`~~~~~~~~~~ 재미있는 사칙연산 게임 ~~~~~~~~~~~\n[즐겁게 문제를 풀다가 지겨우면 0을 누르세요~]`);

//정답 검증

var qNum = 1; //문제 번호
//정오답횟수를 저장할 변수
var okCount = 0,
    wrongCount = 0;

while (true) {

    var first = Math.floor(Math.random() * 20) + 1,
        second = Math.floor(Math.random() * 20) + 1;

    //랜덤으로 3개의 숫자를 나오도록 변수 선언
    var markNum = Math.floor(Math.random() * 3);
    
    //실제 정답
    var realAnswer;
    var mark;
    if (markNum === 0){
        mark= `+`;
        realAnswer = first + second;
    } else if (markNum === 1) {
        mark = `-`;
        if (first === second) {
            second--;
        }
        if (first < second) {
            var t = first;
            first = second;
            second = t;
        }
        realAnswer = first - second;
    } else if (markNum === 2) {
        mark = `x`;
        realAnswer = first * second;
    }

    //사용자의 입력값
    var userAnswer = +prompt(`Q${qNum++}. ${first} + ${second} = ??`);

    //종료 조건
    if (userAnswer === 0) {
        alert(`게임을 종료합니다!\n----------------------\n정답횟수: ${okCount}회, 틀린횟수: ${wrongCount}회`);
        break;
    }

    if (realAnswer === userAnswer) {
        alert(`정답입니다!`);
        okCount++;
    } else {
        alert(`틀렸습니다!`);
        wrongCount++;
    }
}