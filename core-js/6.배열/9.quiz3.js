var names = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

while (true) {
    var nameDelete = prompt(`[${names}] 중에 삭제할 이름을 입력하세요`);
    if (names.includes(nameDelete) === true) {
        names.splice(names.indexOf(nameDelete), 1);
    } else if (names.includes(nameDelete) === false) {
        alert(`${nameDelete}는 잘못된 이름입니다`);
    }

    if (names.length === 0) {
        alert(`전체 멤버의 이름을 삭제하였습니다`);
        break;
    }
}