//================ 함수, 전역변수 정의부 =================//

//게임 데이터 변수 (정답, 선택한숫자, 최소값, 최대값)
const $numbers = document.querySelector('#numbers');
const gameDatas = {
    secret: Math.floor(Math.random() * 100) + 1,
    min: 1,
    max: 100,
    answer: null //사용자가 클릭한 아이콘 숫자
};
//숫자 아이콘 생성 함수


let $makeIcons = () => {
    for (let i = 1; i <= 100; i++) {
        const $div = document.createElement('div');
        $div.classList.add('icon');
        $div.textContent = i;
        $numbers.appendChild($div);
    }
}

//UP,DOWN에게 selected 클래스 부여
let processUpDownCase = (target, isUp) => {
    const $em1 = document.querySelector('#begin');
    const $em2 = document.querySelector('#end');
    const $up = document.querySelector('#up');
    const $down = document.querySelector('#down');
    if (isUp) {
        $up.classList.add('selected');
        $down.classList.remove('selected');
        gameDatas.min = gameDatas.answer + 1;
        $em1.textContent = gameDatas.min;
        clearIcons(target, isUp);
    } else {
        $down.classList.add('selected');
        $up.classList.remove('selected');
        gameDatas.max = gameDatas.answer - 1;
        $em2.textContent = gameDatas.max;
        clearIcons(target, isUp);
    }
}
//UP,DOWN 공 제거
let clearIcons = (target, isUp) => {
    const $em1 = document.querySelector('.select-number > em:first-child');
    const $em2 = document.querySelector('.select-number > em:last-child');
    const $numbersChildren = [...$numbers.children];

    let number_filter;
    if (isUp) {
        number_filter = (a, b) => { return a >= b; };
        gameDatas.min = gameDatas.answer + 1;
        $em1.textContent = gameDatas.min;
    }
    else {
        number_filter = (a, b) => { return a <= b; };
        gameDatas.max = gameDatas.answer - 1;
        $em2.textContent = gameDatas.max;
    }
    
    for (let prop of $numbersChildren) {
        if (number_filter(+target.textContent, +prop.textContent))
            $numbers.removeChild(prop);
    }    
}

//정답인 경우 처리할 일
const processCorrect = (target) => {
    const $finish = document.querySelector('#finish');
    $finish.classList.add("show");

    //2. target에 id='move' 부여
    target.setAttribute('id', 'move')
}


//정답을 검증하는 함수
let checkAnswer = target => {

    //객체 디스트럭쳐링
    const {
        secret,
        answer
    } = gameDatas;


    if (secret === answer) {
        //정답인 경우
        processCorrect(target);
    } else if (secret > answer) {
        //UP인 경우
        processUpDownCase(target, true);
    } else {
        //DOWN인 경우
        processUpDownCase(target, false);
    }
}


//================ 메인 실행부 =================//
(() => {
    $makeIcons();

    //아이콘 클릭 이벤트 부여
    $numbers.addEventListener('click', e => {

        if (!e.target.matches('#numbers .icon')) return;

        //사용자가 선택한 숫자를 객체에 저장
        gameDatas.answer = +e.target.textContent;
        console.log(gameDatas)

        //정답 검증
        checkAnswer(e.target);
    });

})();