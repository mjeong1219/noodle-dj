// dom (html 태그 로딩 완료 후 실행)
$(document).ready(function () {

    // 클래스 nav의 li를 찾아라
    // 저장한다. 재활용하기 위해서
    // var, const, let = 변수를 만들거에요
    const navLis = $(".nav ul li"); // 찾을 때는 const쓰기

});
// 멀티미디어 리소스 로딩 완료 후 실행
window.onload = function(){
    const navLis = document.querySelectorAll(".nav ul li");
}