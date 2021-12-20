//================ 함수, 전역변수 정의부 =================//
    
//게임 데이터 변수 (정답, 선택한숫자, 최소값, 최대값)
const gameDatas = {
    secret: Math.random(Math.floor() + 100) +1,
    min: 1,
    max: 100,
    answer: null
};

//숫자 아이콘 생성 함수


let $makeIcons = () => {
    for (let i = 1; i <= 100; i++) {
        const $numbers = document.querySelector('#numbers');

        const $div = document.createElement('div');
        $div.classList.add('icon');
        $div.textContent = i;
        $numbers.appendChild($div);
    }
}

let onclickIcons = () => {
    
}


//================ 메인 실행부 =================//
(() => {
    $makeIcons();
    const randomNumber = $makeRandomNumber();

})();