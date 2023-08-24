// dom (html 태그 로딩 완료 후 실행)
$(document).ready(function () {
    // 각 섹션의 위치값(세로스크롤 위치)
    const sectionYpos = [500, 1000, 1500, 2000, 3500];

    // 클래스 nav 의 li 를 찾아라
    // 저장한다. 재활용하기 위해서
    const navLis = $(".nav ul li");
    // li 에 a 태그를 클릭을 해서 스크롤을 이동
    const navLisA = $(".nav ul li a");

    // li 에 a 태그를 클릭시  li 에 focus-active 적용하기
    // 클릭 기능 구현
    $.each(navLisA, function(index, item){ // .??????
        // item은 a태그를 말한다. item을 클릭을 할 겁니다.
        // item은 html태그여서 jq에서 활용하려면 $를 사용해야함.
        // 아래코드에서는 item이 아니라 this를 써도 됨. this는 item을 가리킴.
        $(this).click(function(event){ // jq에서는 on을 쓰지 않음.
            // a태그의 href 막기
            event.preventDefault();
            // li의 모든 클래스 제거
            navLis.removeClass("focus-active");
            // 클릭된 li에 focus-active 추가하기
            navLis.eq(index).addClass("focus-active"); // jq에서는 배열이 []가 아니라 eq임.
            // 클릭하면 스크롤바 움직인다.
            $("html, body").animate({
                scrollTop: sectionYpos[index]
            }, "slow");
        })
    })
});

/*


// 멀티미디어 리소스 로딩 완료 후 실행
window.onload = function(){
    // 각 섹션의 위치값(세로 스크롤 위치)
    const sectionYpos = [500, 1000, 1500, 2000, 3500]
    // 클래스 nav의 li를 찾아라
    // 저장한다. 재활용하기 위해서
    // var, const, let = 변수를 만들거에요
    // 찾을 때는 const쓰기
    const navLis = document.querySelectorAll(".nav ul li");
    // li에 a 태그를 클릭을 해서 스크롤을 이동
    const navLisA = document.querySelectorAll(".nav ul li a");
    // li에 a 태그를 클릭시 li에 focus-active 적용하기
    // 클릭 기능 구현
    // navLisA가 배열임을 콘솔로 확인했다면 forEach를 사용할 줄 알아야 함.
    // forEach(function(매개변수=재료, 매개변수, 매개변수){}) = 한번 만들고 없어지는 익명함수.
    // 계속 사용하려면 선언을 해야함. var 등으로.
    // 위의 코드를 forEach(()=>{}) 로 바꿀 수 있음.
    // navLisA.forEach((변수1=item=배열 각 요소, 변수2=index=순서번호, 변수3=arr=원본배열)=>{
    //     console.log(item); // 콘솔로 하나씩 넣어보면 item, index, arr임을 알 수 있음.
    // })
    navLisA.forEach((item, index, arr)=>{
        // item은 a태그를 말한다. item을 클릭을 할 겁니다.
        item.addEventListener("click", function(event){
            // a 태그의 기본 기능 href를 막기
            // 방법1, return false
            // 방법2, event(e)를 재료자리에 넣고 event.preventDefault 적기.
            event.preventDefault(); // 이벤트가 생성되면 preventDefault된다.
            // 1. 클릭하면 li에 focus-active가 적용되어야한다.
            // 일단 모두 포커스 클래스 제거
            for(let i = 0; i<5; i++){
                navLis[i].classList.remove("focus-active");
            }
            // 위에서 forEach를 사용하지 않는 이유는 이름이 item으로 똑같기때문에
            // 그리고 하나만 포커스가 되게 한다.
            
            navLis[index].classList.add("focus-active");
            // 2. 클릭하면 스크롤바가 움직인다.
            window.scrollTo({
                top: sectionYpos[index], // 각 세션의 스크롤 위치값이 들어감.
                behavior: "smooth"
            })
        });
    });
    // for(let i = 0; i<navLisA.length; i++){} 위와 같기 때문에 그냥 navLisA.forEach를 씀.=
}

/*

// const bt = document.querySelector("button");
// bt.onclick = function(){}
// window.onload = function(){1}
// window.onload = function(){2}
// window.onload = function(){3} // 남는건 아래만 남기 때문에 window.onload는 팀장만 사용.

// window.addEventListener("load", function(){1})
// window.addEventListener("load", function(){2})
// window.addEventListener("load", function(){3}) // addeventlistner로 load를 하는 거기때문에 이렇게쓰면 됨.
// // addeventlistner을 쓸때는 on빼고 load만.
