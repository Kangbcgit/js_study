var question = +prompt(`정수를 입력해주세요`);

if (question > 0) {
    alert(`이 수는 양수입니다`);
} else if (question === 0) {
    alert(`이 수는 0입니다`);
} else if (question < 0) {
    alert(`이 수는 음수입니다.`);
} 
