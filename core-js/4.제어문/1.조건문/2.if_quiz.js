

var userHeight = +prompt(`당신의 키는 몇cm입니까?`),
    userAge = +prompt(`당신의 나이는 몇 살 입니까?`);

if (userHeight >= 140 && userAge >= 8 ){
    alert(`놀이기구에 탑승하실 수 있습니다`)
} else {
    alert(`놀이기구에 탑승하실 수 없습니다.`)
}
alert(`오늘 하루 즐거운 시간되세요!`)
