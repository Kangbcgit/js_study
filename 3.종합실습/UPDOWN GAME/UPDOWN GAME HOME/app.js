//================ 함수, 전역변수 정의부 =================//

//게임 데이터 변수 (정답, 선택한숫자, 최소값, 최대값)
const $numbers = document.querySelector('#numbers');
const gameDatas = {
    secret: Math.random(Math.floor() + 1) * 100,
    min: 1,
    max: 100,
    answer: null
};
console.log(gameDatas.secret);
//숫자 아이콘 생성 함수


let $makeIcons = () => {
    for (let i = 1; i <= 100; i++) {
        const $div = document.createElement('div');
        $div.classList.add('icon');
        $div.textContent = i;
        $numbers.appendChild($div);
    }
}


//================ 메인 실행부 =================//
(() => {
    $makeIcons();
    $numbers.addEventListener('click', e => {
        if (+e.target.textContent > gameDatas.secret) {
            for (let i of [...$numbers.children]) {
                if (+e.target.textContent < +i.textContent) {
                    $numbers.removeChild(i)
                }
            }
        }
    });

})();