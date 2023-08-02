
/*
let POSTs = [
    {
        title: "세차 초보를 위한 디테일링 가이드! (용어편)",
        contents: "안녕하세요. 세차 초보자 분들이 블로그나 유튜브 등에서 디테일링 고나련",
    },
    {
        title: "세차 초2222보를 위한 디테일링 가이드! (용어편)",
        contents: "안녕하세요. 22222222세차 초보자 분들이 블로그나 유튜브 등에서 디테일링 고나련",

    },
    {
        title: "세차 초333333332222보를 위한 디테일링 가이드! (용어편)",
        contents: "안녕하세요. 2333333332222222세차 초보자 분들이 블로그나 유튜브 등에서 디테일링 고나련",

    },
    {
        title: "2444444444422일링 가이드! (용어편)",
        contents: "44444444444그나 유튜브 등에서 디테일링 고나련",
    }
]
let list_t  = document.querySelector("#post_title");
let list_c  = document.querySelector("#post_contents");

for(let i = 0; i < 4; i++){
    let post1 = document.createElement("div");
    let post2 = document.createElement("div");


    let titletag = document.createElement("div");
    titletag.innerHTML = POSTs[i].title;



    let contentstag = document.createElement("div");
    contentstag.innerHTML = POSTs[i].contents;

    post1.appendChild(titletag);
    post2.appendChild(contentstag);

    list_t.appendChild(post1);
    list_c.appendChild(post2);

}
*/


const POSTs = [
    {
      title: "세차 초보를 위한 디테일링 가이드! (용어편)",
      contents: "안녕하세요. 세차 초보자 분들이 블로그나 유튜브 등에서 디테일링관련 어쩌구",
    },
    {
      title: "세차 초2222보를 위한 디테일링 가이드! (프리워시편)",
      contents: "오늘은 셀프세차, 그리고 디테일링에서 가장 첫번째 과정에 해당하는 프리워시(Pre-Wash)에 대해서 알아보겠습니다.                     '프리워시란' 이란                     프리워시는 본세차에 들어가기 전에 차량에 붙어있는 굵은 오염물질을 제거해서 본세차시 발생할 수 있는 스크레치, 잔기스 그리고 스월마크를 방지해주는 과정입니다.                     프리워시 단계에서는 고압세척기, 프리워시 약제 그리고 스노우폼 세차 등을 이용하여 진행하게 되는 디테일링의 수많은 단계 중에서 가장 첫번째 단계입니다.                      '고압수'                     고압수는 수압이 매우 강해서 고압수만으로도 어느 정도 굵은 오염물질을 제거할 수 있습니다. 일반적으로 고압세척기의 압력이 100bar 이상이면 자동차 세차를 하기에 충분한 압력입니다.                     가정용으로 나오는 고압세척기나 셀프세차장에서 사용하는 압력이 보통 100~110bar 정도입니다. 아래는 셀프세차장, 손세차장에서 사용 중인 일반적인 고압세척기 압력입니다. 참고하시기 바랍니다.",
    },
    {
      title: "세차 초보를 위한 디테일링 가이드! (본세차편)",
      contents: "어떻게 보면 디테일링 과정 중에서 가장 먼저 소개되었어야 하는 부분인데, 디테일링 가이드에서는 세번째로 포스팅하게 되었습니다. 디테일링의 전체적인 개념을 알려드리기 위해서 실제 디테일링의 순서에 맞게 가이드를 작성하다보니 세번째가 되었네요.",
    },
    {
      title: "세차 초보를 위한 디테일링 가이드! (휠타이어 편)",
      contents: "휠세척을 하기 위한 준비물은 휠 브러쉬1, 휠 브러쉬 2, 디테일링 브러쉬, 휠 크리너입니다. 초보자의 경우 휠브러쉬의 정확한 용도를 모르고 사용하는 경우가 많은데요, 도구 생김새에 따른 용도를 설명해드리겠습니다.",
    }
  ];
  
  // postbox 틀 가저옴
  const postbox = document.getElementById('postbox_in');
  
  for (let i = 0; i < POSTs.length; i++) {
    // postbox를 복제 후  제목과 내용 넣을 변수 생성
    const postboxClone = postbox.cloneNode(true);
  
    // 제목과 내용 추가하는 알고리즘
    const postTitle = POSTs[i].title;
    const postContents = POSTs[i].contents;
    postboxClone.querySelector('#post_title').textContent = postTitle;
    postboxClone.querySelector('#post_contents').textContent = postContents;
  
    // 내용 과 틀 복사
    document.body.appendChild(postboxClone);
  }
  
  // 첫번 째 포스트 박스 삭제
  postbox.remove();
  


