//const { func } = require("assert-plus")

//쇼핑히스토뢰
document.getElementById("historyBtn").addEventListener("click", function(){
  document.getElementById("shoppingHistory").classList.toggle("hidden_history")
})
document.getElementById("historyCloseBtn").addEventListener("click", function(){
  document.getElementById("shoppingHistory").classList.add("hidden_history")
})
document.getElementById("deleteAll").addEventListener("click", function(){
  document.getElementById("historyMiddleEx").style.display = "none"
})
document.getElementById("recentCloseBtn").addEventListener("click", function(){
  document.getElementById("historyMiddle").style.display = "none"
})

//현정!!! 탑버튼 스르륵 디테일페이지에도 적용할 수 있게! 
const scrollTop = function () {
  const topBtn = document.getElementById("topBtn")
  const scrollBtn = document.createElement("button");
  scrollBtn.setAttribute("id", "scrollBtn");
  scrollBtn.setAttribute("class", "scroll-btn");
  topBtn.appendChild(scrollBtn)
 
  const scrollBtnDisplay = function () {
    window.scrollY > window.innerHeight ?
      scrollBtn.classList.add("show") :
      scrollBtn.classList.remove("show");
  };
  window.addEventListener("scroll", scrollBtnDisplay);
  // scroll to top when button clicked
  const scrollWindow = function () {
    if (window.scrollY != 0) {
      setTimeout(function () {
        window.scrollTo(0, window.scrollY - 50);
        scrollWindow();
      }, 10);
    }
  };
  scrollBtn.addEventListener("click", scrollWindow);
};
scrollTop();


const reviewBtn = document.getElementById("reviewBtn");
const replyWriteBtn = document.getElementById("replyWriteBtn");
const loginBtn = document.getElementById("loginBtn");
const replyBtn = document.getElementById("replyBtn");

// inquiry detail inquiry_text
const inquiryText = document.getElementById("inquiryReplyEx");
document
  .getElementById("inquiryReplyEx")
  .addEventListener("click", function () {
    console.log(inquiryText.click);
  });

// const inquiry_text  = document.getElementsByClassName("inquiry_text")[0];
// document.getElementsByClassName("inquiry_text")[0].addEventListener("click", function () {
//   console.log(inquiry_text.childNodes)
// })

// Admin Check
document.getElementById("replyWriteBtn").addEventListener("click", function () {
  document.getElementById("adminPopup").classList.remove("hidden_admin");
});

document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("adminPopup").classList.add("hidden_admin");
});

document.getElementById("loginBtn").addEventListener("click", function () {
  let adminId = document.getElementById("adminId").value;
  let adminPw = document.getElementById("adminPw").value;
  // 관리자의 ID : admin / PW : 1111로 고정
  if (adminId == "admin" && adminPw == "1111") {
    document.getElementById("adminPopup").classList.add("hidden_admin");

    document
      .getElementById("sellerReplyOutput")
      .classList.remove("hidden_seller_reply");
    document.getElementById("replyWriteBtn").style.display = "none";

    document.getElementById("adminId").value = "";
    document.getElementById("adminPw").value = "";
  } else {
    alert("관리자 계정을 확인하세요.");
    return false;
  }
});

// 답변 달기
replyBtn.addEventListener("click", function () {
  let replyText = document.getElementById("replyTextBox").value;
  // alert(replyText);
  document
    .getElementById("sellerReplyOutput")
    .classList.add("hidden_seller_reply");

  const sellerReplyOutputEx = document.getElementById("sellerReplyOutEx");
  const sellerReplyOutput = document.createElement("div");
  const replyIcon = document.createElement("div");
  const sellerReplyText = document.createElement("p");

  sellerReplyOutput.setAttribute("class", "seller_reply_output");
  sellerReplyOutput.setAttribute("id", "sellerReplyOutput");
  replyIcon.setAttribute("class", "reply_icon");
  replyIcon.setAttribute("id", "replyIcon");
  sellerReplyText.setAttribute("class", "seller_reply_text");
  sellerReplyText.setAttribute("id", "sellerReplyText");

  sellerReplyOutputEx.appendChild(sellerReplyOutput);
  sellerReplyOutput.appendChild(replyIcon);
  sellerReplyOutput.appendChild(sellerReplyText);

  document.querySelector(".seller_reply_output .reply_icon").innerHTML = "답변";
  document.getElementById("sellerReplyText").innerHTML = replyText;
  document.getElementById("replyState").innerHTML = "답변완료";
});






/*
const reviewBtn = document.querySelectorAll(".review_btn");
const replyWriteBtn = document.querySelectorAll(".reply_write_btn");
const loginBtn = document.querySelectorAll(".login_btn");
const replyBtn = document.querySelectorAll(".reply_btn");
*/

// inquiry detail inquiry_text
//const inquiryText = document.getElementById("inquiryReplyEx");
//document.getElementById("inquiryReplyEx").addEventListener("click", function () {
 // console.log(inquiryText.click)
//})

// const inquiry_text  = document.getElementsByClassName("inquiry_text")[0];
// document.getElementsByClassName("inquiry_text")[0].addEventListener("click", function () {
//   console.log(inquiry_text.childNodes)
// })

/* 나단 : 답변작성같은 반복요소들을 get엘레멘트바이아이디 하지마시고 쿼리셀렉터올을 쓰셔서 일단 변수로 담으세요

let ddd = document.querySelectorAll('당신의 요소들')
*/

//let ddd = document.querySelectorAll(".reply_write_btn");



/*
for (let i = 0; i < ddd.length; i++){
  ddd[i].addEventListener("click", function () {
    // Admin Check
    document
      .querySelectorAll(".reply_write_btn")
      .addEventListener("click", function () {
        document.querySelectorAll(".admin_ex").classList.remove("hidden_admin");
      });

    document
      .querySelectorAll(".close_btn")
      .addEventListener("click", function () {
        document.querySelectorAll(".admin_ex").classList.add("hidden_admin");
      });

    document
      .querySelectorAll(".login_btn")
      .addEventListener("click", function () {
        let adminId = document.querySelectorAll(".admin_id").value;
        let adminPw = document.querySelectorAll(".admin_pw").value;
        // 관리자의 ID : admin / PW : 1111로 고정
        if (adminId == "admin" && adminPw == "1111") {
          document.querySelectorAll(".admin_ex").classList.add("hidden_admin");

          document
            .querySelectorAll(".seller_reply_output")
            .classList.remove("hidden_seller_reply");
          document.querySelectorAll(".reply_write_btn").style.display = "none";

          document.querySelectorAll(".admin_id").value = "";
          document.querySelectorAll(".admin_pw").value = "";
        } else {
          alert("관리자 계정 확인하세요.");
          return false;
        }
      });

    // 답변 달기
    replyBtn.addEventListener("click", function () {
      let replyText = document.querySelectorAll(".reply_text_box").value;
      // alert(replyText);
      document
        .querySelectorAll(".seller_reply_output")
        .classList.add("hidden_seller_reply");

      const sellerReplyOutputEx = document.getElementById("sellerReplyOutEx");
      const sellerReplyOutput = document.createElement("div");
      const replyIcon = document.createElement("div");
      const sellerReplyText = document.createElement("p");

      sellerReplyOutput.setAttribute("class", "seller_reply_output");
      // sellerReplyOutput.setAttribute("id", "sellerReplyOutput");
      replyIcon.setAttribute("class", "reply_icon");
      //replyIcon.setAttribute("id", "replyIcon");
      sellerReplyText.setAttribute("class", "seller_reply_text");
      //sellerReplyText.setAttribute("id", "sellerReplyText");

      sellerReplyOutputEx.appendChild(sellerReplyOutput);
      sellerReplyOutput.appendChild(replyIcon);
      sellerReplyOutput.appendChild(sellerReplyText);
      //안되면 밑에 querySelectorAll 해보기
      document.querySelectorAll(".seller_reply_output .reply_icon").innerHTML =
        "답변";
      document.querySelectorAll(".seller_reply_text").innerHTML = replyText;
      document.querySelectorAll(".reply_state").innerHTML = "답변완료";
    });
  })
}*/

/*
for(let i = 0; i<ddd.length; i++) {
  ddd[i].addEventListener("click", function () {
    // Admin Check
    document
      .querySelectorAll(".reply_write_btn")
      .addEventListener("click", function () {
        document.querySelectorAll(".admin_ex").classList.remove("hidden_admin");
      });

    document
      .querySelectorAll(".close_btn")
      .addEventListener("click", function () {
        document.querySelectorAll(".admin_ex").classList.add("hidden_admin");
      });

    document
      .querySelectorAll(".login_btn")
      .addEventListener("click", function () {
        let adminId = document.querySelectorAll(".admin_id").value;
        let adminPw = document.querySelectorAll(".admin_pw").value;
        // 관리자의 ID : admin / PW : 1111로 고정
        if (adminId == "admin" && adminPw == "1111") {
          document.querySelectorAll(".admin_ex").classList.add("hidden_admin");

          document
            .querySelectorAll(".seller_reply_output")
            .classList.remove("hidden_seller_reply");
          document.querySelectorAll(".reply_write_btn").style.display = "none";

          document.querySelectorAll(".admin_id").value = "";
          document.querySelectorAll(".admin_pw").value = "";
        } else {
          alert("관리자 계정 확인하세요.");
          return false;
        }
      });

    // 답변 달기
    replyBtn.addEventListener("click", function () {
      let replyText = document.querySelectorAll(".reply_text_box").value;
      // alert(replyText);
      document
        .querySelectorAll(".seller_reply_output")
        .classList.add("hidden_seller_reply");

      const sellerReplyOutputEx = document.getElementById("sellerReplyOutEx");
      const sellerReplyOutput = document.createElement("div");
      const replyIcon = document.createElement("div");
      const sellerReplyText = document.createElement("p");

      sellerReplyOutput.setAttribute("class", "seller_reply_output");
      // sellerReplyOutput.setAttribute("id", "sellerReplyOutput");
      replyIcon.setAttribute("class", "reply_icon");
      //replyIcon.setAttribute("id", "replyIcon");
      sellerReplyText.setAttribute("class", "seller_reply_text");
      //sellerReplyText.setAttribute("id", "sellerReplyText");

      sellerReplyOutputEx.appendChild(sellerReplyOutput);
      sellerReplyOutput.appendChild(replyIcon);
      sellerReplyOutput.appendChild(sellerReplyText);
      //안되면 밑에 querySelectorAll 해보기
      document.querySelectorAll(".seller_reply_output .reply_icon").innerHTML =
        "답변";
      document.querySelectorAll(".seller_reply_text").innerHTML = replyText;
      document.querySelectorAll(".reply_state").innerHTML = "답변완료";
    });
  });
}*/

/*

ddd.forEach((value) => {
  value.addEventListener('click', function(){
    // Admin Check
    document.querySelectorAll(".reply_write_btn").addEventListener("click", function () {
        document.querySelectorAll(".admin_ex").classList.remove("hidden_admin");
      });

    document
      .querySelectorAll(".close_btn")
      .addEventListener("click", function () {
        document.querySelectorAll(".admin_ex").classList.add("hidden_admin");
      });

    document
      .querySelectorAll(".login_btn")
      .addEventListener("click", function () {
        let adminId = document.querySelectorAll(".admin_id").value;
        let adminPw = document.querySelectorAll(".admin_pw").value;
        // 관리자의 ID : admin / PW : 1111로 고정
        if (adminId == "admin" && adminPw == "1111") {
          document.querySelectorAll(".admin_ex").classList.add("hidden_admin");

          document
            .querySelectorAll(".seller_reply_output")
            .classList.remove("hidden_seller_reply");
          document.querySelectorAll(".reply_write_btn").style.display = "none";

          document.querySelectorAll(".admin_id").value = "";
          document.querySelectorAll(".admin_pw").value = "";
        } else {
          alert("관리자 계정 확인하세요.");
          return false;
        }
      });

    // 답변 달기
    replyBtn.addEventListener("click", function () {
      let replyText = document.querySelectorAll(".reply_text_box").value;
      // alert(replyText);
      document
        .querySelectorAll(".seller_reply_output")
        .classList.add("hidden_seller_reply");

      const sellerReplyOutputEx = document.getElementById("sellerReplyOutEx");
      const sellerReplyOutput = document.createElement("div");
      const replyIcon = document.createElement("div");
      const sellerReplyText = document.createElement("p");

      sellerReplyOutput.setAttribute("class", "seller_reply_output");
     // sellerReplyOutput.setAttribute("id", "sellerReplyOutput");
      replyIcon.setAttribute("class", "reply_icon");
      //replyIcon.setAttribute("id", "replyIcon");
      sellerReplyText.setAttribute("class", "seller_reply_text");
      //sellerReplyText.setAttribute("id", "sellerReplyText");

      sellerReplyOutputEx.appendChild(sellerReplyOutput);
      sellerReplyOutput.appendChild(replyIcon);
      sellerReplyOutput.appendChild(sellerReplyText);
      //안되면 밑에 querySelectorAll 해보기
      document.querySelectorAll(".seller_reply_output .reply_icon").innerHTML =
        "답변";
      document.querySelectorAll(".seller_reply_text").innerHTML = replyText;
      document.querySelectorAll(".reply_state").innerHTML = "답변완료";
    });
  })///
})



// asd.forEach((value) => {
//   value.addEventListener('click', function(){
//     document.getElementById("adminPopup").classList.remove("hidden_admin");
//   })
// })
*/

// left_top 이미지 색깔 탭메뉴
const colorTabList = document.querySelectorAll(
  ".product_color .tab_menu .list li"
);
const contents = document.querySelectorAll(".left_top .cont_area .cont");
let activeCont = ""; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for (let i = 0; i < colorTabList.length; i++) {
  colorTabList[i].querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    for (let j = 0; j < colorTabList.length; j++) {
      // 나머지 버튼 클래스 제거
      colorTabList[j].classList.remove("is_on");

      // 나머지 컨텐츠 display:none 처리
      contents[j].style.display = "none";
    }

    // 버튼 관련 이벤트
    this.parentNode.classList.add("is_on");

    // 버튼 클릭시 컨텐츠 전환
    activeCont = this.getAttribute("href");
    document.querySelector(activeCont).style.display = "block";
  });
}

//컬러버튼 누르면 오른쪽 텍스트 변하는 것
document.getElementById("colorTab1").addEventListener("click", function () {
  document.getElementById("colorText").innerText = "BUTTER";
});
document.getElementById("colorTab2").addEventListener("click", function () {
  document.getElementById("colorText").innerText = "PEACH";
});
document.getElementById("colorTab3").addEventListener("click", function () {
  document.getElementById("colorText").innerText = "WHITE";
});

//카드혜택 팝업
document
  .getElementById("benefitOpenBtn")
  .addEventListener("click", function () {
    document.getElementById("benefitPopup").classList.remove("hidden_benefit");
  });
document
  .getElementById("benefitCloseBtn")
  .addEventListener("click", function () {
    document.getElementById("benefitPopup").classList.add("hidden_benefit");
  });

//left_bottom 탭메뉴
const menuTabList = document.querySelectorAll(
  ".left_bottom .tab_menu .list li"
);

for (let i = 0; i < menuTabList.length; i++) {
  menuTabList[i].querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    for (let j = 0; j < menuTabList.length; j++) {
      menuTabList[j].classList.remove("is_on");
    }
    this.parentNode.classList.add("is_on");
  });
}


//리뷰

//////////////////////////////현정!!! 엄청난 문제점 발견!!! 후기올리기 버튼을 눌러서업로드를하면 창이 다시 생기지 않음->이제 창이 새로 생기는데 새로 단 글이 빈칸임
 let count = 0;
document.getElementById("reviewBtn").addEventListener("click", function(){
  count++;
  if(count % 2 == 1){
    //document.getElementById("reviewInput").classList.remove("hidden_input");
    document.getElementById("reviewBtn").innerHTML = "후기보기";
  } else {
    //document.getElementById("reviewInput").classList.add("hidden_input");
    document.getElementById("reviewBtn").innerHTML = "후기작성";
  }
}) 
document.getElementById("reviewBtn").addEventListener("click", function(){
    document.getElementById("reviewInput").classList.toggle("hidden_input");
})

/* document.getElementById("reviewBtn").addEventListener("click", function () {
  document.getElementById("reviewInput").classList.remove("hidden_input");
  document.getElementById("reviewBtn").innerHTML = "후기보기";
}); */


//현정!!! 후기를 올리면 거기에 있던 사진이 스와이퍼에 들어가게 하면 짱 좋겠어. 그러려면 스와이퍼에다가도 무슨 동적데이터를 넣어야겠지? 헤헤 할 수 있을까?
document.getElementById("upLoadBtn").addEventListener("click", function () {
  let userId = document.getElementById("reviewId").value;
  let password = document.getElementById("password").value;
  let selectOption = "옵션: " + document.getElementById("color").value;
  let reviewBox = document.getElementById("reviewBox").value;
  let starValue = document.getElementById("starValue").value;
  const date = new Date().toLocaleDateString();

  if (userId == "") {
    alert("아이디를 입력하세요");
    return false;
  }

  if (starValue < 1) {
    alert("별점을 입력하세요");
    return false;
  }

  // Id 앞 3글자를 제외한 글자 수(userId.substr(4).length)만큼 *를 쌓는다(+=). 
  let userIdAst = "";
  for (let i = 0; i <= userId.substr(4).length; i++) {
    userIdAst += "*";
  }
  userId = userId.substr(0, 3) + userIdAst;

  let star = "";
  for (let i = 0; i < starValue; i++) {
    star += "★";
  }

  if (password == "") {
    alert("비밀번호를 입력하세요");
    return false;
  }
  if (selectOption == "default") {
    alert("옵션을 선택하세요");
    return false;
  }
  if (reviewBox == "") {
    alert("리뷰를 입력하세요");
    return false;
  }

  const addReviewBoxEx = document.getElementById("addReviewBoxEx");
  const addReviewBox = document.createElement("div");
  const addReviewLeft = document.createElement("div");
  const addStarWritten = document.createElement("div");
  const addStar = document.createElement("p");
  const addWrittenId = document.createElement("p");
  const addOption = document.createElement("div");
  const addSelectedOption = document.createElement("p");
  const addWrittenReview = document.createElement("p");
  const addReviewRight = document.createElement("div");
  const addDate = document.createElement("p");
  const addUserImageEx = document.createElement("div");
  const addUserImage = document.createElement("img");

  addReviewBox.setAttribute("class", "add_review_box");
  addReviewBox.setAttribute("id", "addReviewBox");
  addReviewLeft.setAttribute("class", "review_output_left");
  addStarWritten.setAttribute("class", "star_written");
  addStar.setAttribute("class", "star_rate");
  addStar.setAttribute("id", "star_rate");
  addWrittenId.setAttribute("class", "written_id");
  addWrittenId.setAttribute("id", "writtenId");
  addOption.setAttribute("class", "option")
  addSelectedOption.setAttribute("class", "selected_option");
  addSelectedOption.setAttribute("id", "selectedOption");
  addWrittenReview.setAttribute("class", "written_review");
  addWrittenReview.setAttribute("id", "writtenReview");
  addReviewRight.setAttribute("class", "review_output_right");
  addDate.setAttribute("class", "date")
  addDate.setAttribute("id", "date")
  addUserImageEx.setAttribute("class", "user_image_ex");

  addReviewBoxEx.appendChild(addReviewBox);
  addReviewBox.appendChild(addReviewLeft);
  addReviewLeft.appendChild(addStarWritten);
  addStarWritten.appendChild(addStar);
  addStarWritten.appendChild(addWrittenId);
  addReviewLeft.appendChild(addOption);
  addOption.appendChild(addSelectedOption);
  addReviewLeft.appendChild(addWrittenReview);
  addReviewBox.appendChild(addReviewRight);
  addReviewRight.appendChild(addDate);


  addReviewBoxEx.style.visibility = "visible";

  document.getElementById("writtenId").innerHTML = userId;
  document.getElementById("selectedOption").innerHTML = selectOption;
  document.getElementById("writtenReview").innerHTML = reviewBox;
  document.getElementById("date").innerHTML = date;
  document.getElementById("star_rate").innerHTML = star;


  //이미지
  const fileInput = document.getElementById("uploadImage");
  console.log("fileInput==>>" + fileInput);
  console.log("fileInput.files==>>" + fileInput.files);
  console.log("fileInput.files[0]==>>" + fileInput.files[0]);

  if (fileInput.files[0] != null) {
    addUserImage.setAttribute("class", "user_image");
    addUserImage.setAttribute("id", "userImage");
    addReviewRight.appendChild(addUserImageEx);
    addUserImageEx.appendChild(addUserImage);
    // let selectedFile = fileInput.files[0].name; // 선택된 파일의 이름 받아오기
    // let imgSrc = "./images/" + selectedFile; // 파일의 이름 앞에 절대 경로 붙이기(절대 경로에 있는 사진만 보이게 함)
    // document.getElementById("userImage").src = imgSrc;

    const selectedFile = [...fileInput.files];
    const fileReader = new FileReader(); 

    fileReader.readAsDataURL(selectedFile[0]);

    fileReader.onload = function () {
      console.log(fileReader.result)
    document.getElementById("userImage").src = fileReader.result;
  };
};

  // }
  //이미지

  // input창 내용 지우자!
  document.getElementById("reviewId").value = "";
  document.getElementById("password").value = "";
  document.getElementById("color").value = "default";
  document.getElementById("reviewBox").value = "";
  document.getElementById("uploadImage").value = "";
  //별점리셋 다시 찾기
  document.querySelector('.rating input').value = 0;
  document.querySelector('.rating_star').style.width = `${rating_input.value * 20}%`;

  
  //document.getElementById("reviewInput").style.display = "none";
  document.getElementById("reviewInput").classList.add("hidden_input");
    document.getElementById("reviewBtn").innerHTML = "후기작성";
})


const rating_input = document.querySelector('.rating input');
const rating_star = document.querySelector('.rating_star');

// 별점 드래그 할 때
rating_input.addEventListener('input', () => {
  rating_star.style.width = `${rating_input.value * 20}%`;
});

//리뷰 끝

//총 상품 금액
let basket = {
  totalCount: 0,
  totalPrice: 0,
  
  //재계산
  reCalc: function () {
    this.totalCount = 0;
    this.totalPrice = 0;
    document.querySelectorAll(".p_num").forEach(function (item) {
      if (
        item.parentElement.parentElement.parentElement.previousElementSibling
        .firstElementChild.firstElementChild.checked == true
      ) {
        let count = parseInt(item.getAttribute("value"));
        this.totalCount += count;
        let price =
          item.parentElement.parentElement.previousElementSibling.firstElementChild.getAttribute(
            "value"
          );
        this.totalPrice += count * price;
      }
    }, this); // forEach 2번째 파라메터로 객체를 넘겨서 this 가 객체리터럴을 가리키도록 함. - thisArg
  },
  //화면 업데이트
  updateUI: function () {
    document.querySelector("#sum_p_num").textContent =
      "(" + this.totalCount.formatNumber() + "개" + ")";
    document.querySelector("#sum_p_price").textContent =
      this.totalPrice.formatNumber() + "원";
  },
  //개별 수량 변경
  changePNum: function (pos) {
    let item = document.querySelector("input[name=p_num" + pos + "]");
    let p_num = parseInt(item.getAttribute("value"));
    let newval = event.target.classList.contains("up") ?
      p_num + 1 :
      event.target.classList.contains("down") ?
      p_num - 1 :
      event.target.value;

    if (parseInt(newval) < 1 || parseInt(newval) > 99) {
      return false;
    }

    item.setAttribute("value", newval);
    item.value = newval;

    let price =
      item.parentElement.parentElement.previousElementSibling.firstElementChild.getAttribute(
        "value"
      );
    item.parentElement.parentElement.nextElementSibling.textContent =
      (newval * price).formatNumber() + "원";
    //AJAX 업데이트 전송

    //전송 처리 결과가 성공이면
    this.reCalc();
    this.updateUI();
  },
  checkItem: function () {
    this.reCalc();
    this.updateUI();
  },
  delItem: function () {
    event.target.parentElement.parentElement.parentElement.remove();
    this.reCalc();
    this.updateUI();
  },
};

// 숫자 3자리 콤마찍기
Number.prototype.formatNumber = function () {
  if (this == 0) return 0;
  let regex = /(^[+-]?\d+)(\d{3})/;
  let nstr = this + "";
  while (regex.test(nstr)) nstr = nstr.replace(regex, "$1" + "," + "$2");
  return nstr;
};

//
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
