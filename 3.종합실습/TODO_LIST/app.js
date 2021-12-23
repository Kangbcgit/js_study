//================ 함수, 전역변수 정의부 =================//

// 할 일 목록 데이터
const todos = [{
        id: 1,
        text: '할 일 1',
        done: false
    },
    {
        id: 2,
        text: '할 일 2',
        done: false
    },
    {
        id: 3,
        text: '할 일 3',
        done: false
    }
];
//새 할 일의 아이디값을 생성하는 함수
const makeNewId = () => {
    //기존의 맨 마지막 데이터 할일의 id값 + 1
    if (todos.length >= 1) {
        const newId = todos[todos.length - 1].id + 1;
        return newId;
    } else {
        return 1;
    }

};
//새로운 할 일을 화면에 렌더링하는 함수
const renderNewTodo = (newTodo) => {
    const $newLi = document.createElement('li');
    $newLi.setAttribute('class', 'todo-list-item');
    $newLi.dataset.id = newTodo.id;

    $newLi.innerHTML = `
        <label class="checkbox">
            <input type="checkbox">
            <span class="text">${newTodo.text}</span>
        </label>
        <div class="modify">
            <span class="lnr lnr-undo"></span>
        </div>
        <div class="remove">
            <span class="lnr lnr-cross-circle"></span>
        </div>`

    const $todoList = document.querySelector('.todo-list').appendChild($newLi);
};

const insertToDoData = () => {
    //1. 데이터 처리
    const $todoText = document.querySelector('#todo-text');
    const newTodo = {
        id: makeNewId(),
        text: $todoText.value,
        done: false
    };
    if ($todoText.value === '') {
        $todoText.classList.add('again');
        $todoText.setAttribute('placeholder', '필수 입력사항입니다!')

    } else {
        todos.push(newTodo);

        //2. 화면에 데이터 렌더링
        renderNewTodo(newTodo);
    
        //3. 입력창 비우기
        $todoText.value = '';    
        $todoText.classList.remove('again');
        $todoText.setAttribute('placeholder', '할 일을 입력하세요')
    }
    
}

//data-id를 통해 해당 id를 가진 객체의 인덱스번호 찾기
const findIndexById = dataId => {
    for (let i = 0; i < todos.length; i++) {
        if (+dataId === todos[i].id) {
            return i;
        }
    }
    return null; //못찾았따~
}

const changeCheckState = $label => {
    /*
        # CSS 렌더링 처리
        1. 지금 내가 체크한ㅊ ㅔ크박스를 포함하고 있는 label 태그를 찾아서 클래스 checked를 부여해야합니다.
        2. 그러면 이 함수는 지금 클릭한 체크박스가 누구인지 알아야 합니다. 그러면 label을 찾아낼 수 있습니다.
        3. 그런데 이 함수는 어디가 클릭되었는지 모릅니다.
    */
    $label.classList.toggle('checked');
    /*
         #데이터 변동 처리
         1. 지금 css만 변했지 실제 데이터는 변하지 않았음.
         2. todos배열에 있는 변동된 객체를 찾아서 done프로퍼티의 값을
         반대로 바꿔주는 처리가 필요함.
         3. 지금 체크한 태그의 정보를 화긴해서 실제 배열에서 해당 객체를 찾아낸 후 done을 수정해야함.
         4. 그러면 어떻게 지금 클릭한 체크박스정보를 가진 객체를 탐색할 수있을까?
         5.id 정보를 알면 가능하다
    */
    //클릭한 체크박스의 data-id값 확보
    const dataId = +$label.parentElement.dataset.id;

    const idx = findIndexById(dataId);
    todos[idx].done = !todos[idx].done;
    /* 내가 한 것 인덱스번호 부재
    for (let prop of [...todos]) {
        if (prop.id === +$label.parentElement.dataset.id) {
            prop.done = !prop.done;
            console.log(prop.done);
        }
    }
    */
};
const removeTodoData = (target) => {
    const $todoList = document.querySelector('.todo-list');
    const deleteTarget = findIndexById(+target.dataset.id);
    $todoList.removeChild(target);
    todos.splice(deleteTarget, 1);
};
// 처음 버튼눌렀을때 작동
const replaceInput = e => {

    const $todoList = document.querySelector('.todo-list');
    const text = e.target.parentElement.previousElementSibling.lastElementChild;
    const textParent = text.parentElement;
    if (e.target.classList.contains('lnr-undo')) {
        const input = document.createElement('input');
        input.value = text.textContent;
        input.classList.toggle('modify-input');
        textParent.replaceChild(input, text);
    } else {
        const newText = document.createElement('span');
        newText.classList.add('text');
        newText.textContent = textParent.lastElementChild.value;
        textParent.replaceChild(newText, textParent.lastElementChild);
        const index = findIndexById(+textParent.parentElement.dataset.id);
        todos[index].text = newText.textContent;
    }
    e.target.classList.toggle('lnr-undo');
    e.target.classList.toggle('lnr-checkmark-circle');
}



//================ 메인 실행부 =================//
(() => {
    //할 일 추가 이벤트
    const $addBtn = document.querySelector('#add');
    $addBtn.addEventListener('click', e => {
        e.preventDefault();

        insertToDoData();
    });

    //할 일 완료이벤트
    const $todoList = document.querySelector('.todo-list');
    $todoList.addEventListener('change', e => {
        // !e.target.matches('.checkbox input[type=checkbox]')
        if (!e.target.matches('label.checkbox input:first-child')) {
            return;
        }
        changeCheckState(e.target.parentElement);
    });

    //할 일 삭제버튼 클릭 이벤트
    $todoList.addEventListener('click', e => {

        // console.log(e.target);
        if (!e.target.matches('div.remove span.lnr-cross-circle')) return;

        removeTodoData(e.target.parentElement.parentElement); //삭제 처리
    });
    $todoList.addEventListener('click', e => {
        if (!e.target.matches('.lnr')) return;
        replaceInput(e);
    })
})();