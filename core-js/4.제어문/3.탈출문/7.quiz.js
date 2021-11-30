// 난이도 선택 문구 입력
while (true) {
    var difficulty = +prompt(`난이도를 설정하세요~~~!\n [ 1. 상 (기회 3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번)]`);
    if (0 < difficulty && difficulty < 4) {
        var min = +prompt(`최솟 범위를 선택해주세요!`);
        var max = +prompt(`최대 범위를 선택해주세요!`);
        break;
    } else {
        alert(`난이도를 1, 2, 3 중에서 고르셔야합니다. 다시 선택해주세요.`);
    }
}

// 난이도 선택 문구 출력
if (difficulty === 1) {
    var i = 3;
    alert(`Up & Down 게임 - ${min} ~ ${max} 사이의 무작위 숫자를 ${i}번 안에 맞춰보세요!!!`);
} else if (difficulty === 2) {
    var i = 6
    alert(`Up & Down 게임 - ${min} ~ ${max} 사이의 무작위 숫자를 ${i}번 안에 맞춰보세요!!!`);
} else if (difficulty === 3) {
    var i = 10;
    alert(`Up & Down 게임 - ${min} ~ ${max} 사이의 무작위 숫자를 ${i}번 안에 맞춰보세요!!!`);
}

// 랜덤 값 할당
var random = Math.floor(Math.random() * (max - min + 1)) + min;

// 카운트
while (i > 0) {
    var input = +prompt(`숫자를 입력하세요`);
    if (input === random) {
        alert(`딩 동 댕 ~~~~ !!`);
        break;
    } else if (input < random) {
        alert(`Up!!!!`);
    } else if (input > random) {
        alert(`DOWN!!!!`);
    }
    i--
    alert(`기회가 ${i}번 남았습니다.`)
    if (i === 0) {
        alert(`기회를 모두 소진했습니다. GAME OVER!!`)
    }
}