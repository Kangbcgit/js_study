var user = {
    kim1234: 'kkk1234',
    lee4567: 'lll4567',
    park9876: 'ppp9876'
}
while (true) {
var id = prompt(`아이디를 입력하세요`);
    if (id in user) {
        if (user[id] === prompt('비밀번호를 입력해주세요.')) {
            alert('로그인에 성공하셨습니다.')
            break;
        } else {
            alert('비밀번호가 틀렸습니다.')
        }
    } else {
        alert('존재하지 않는 회원입니다.')
    }
}