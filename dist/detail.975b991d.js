// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/detail.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//const { func } = require("assert-plus")

//쇼핑히스토뢰
document.getElementById("historyBtn").addEventListener("click", function () {
  document.getElementById("shoppingHistory").classList.toggle("hidden_history");
});
document.getElementById("historyCloseBtn").addEventListener("click", function () {
  document.getElementById("shoppingHistory").classList.add("hidden_history");
});
document.getElementById("deleteAll").addEventListener("click", function () {
  document.getElementById("historyMiddleEx").style.display = "none";
});
document.getElementById("recentCloseBtn").addEventListener("click", function () {
  document.getElementById("historyMiddle").style.display = "none";
});

//현정!!! 탑버튼 스르륵 디테일페이지에도 적용할 수 있게! 
var scrollTop = function scrollTop() {
  var topBtn = document.getElementById("topBtn");
  var scrollBtn = document.createElement("button");
  scrollBtn.setAttribute("id", "scrollBtn");
  scrollBtn.setAttribute("class", "scroll-btn");
  topBtn.appendChild(scrollBtn);
  var scrollBtnDisplay = function scrollBtnDisplay() {
    window.scrollY > window.innerHeight ? scrollBtn.classList.add("show") : scrollBtn.classList.remove("show");
  };
  window.addEventListener("scroll", scrollBtnDisplay);
  // scroll to top when button clicked
  var scrollWindow = function scrollWindow() {
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
var reviewBtn = document.getElementById("reviewBtn");
var replyWriteBtn = document.getElementById("replyWriteBtn");
var loginBtn = document.getElementById("loginBtn");
var replyBtn = document.getElementById("replyBtn");

// inquiry detail inquiry_text
var inquiryText = document.getElementById("inquiryReplyEx");
document.getElementById("inquiryReplyEx").addEventListener("click", function () {
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
  var adminId = document.getElementById("adminId").value;
  var adminPw = document.getElementById("adminPw").value;
  // 관리자의 ID : admin / PW : 1111로 고정
  if (adminId == "admin" && adminPw == "1111") {
    document.getElementById("adminPopup").classList.add("hidden_admin");
    document.getElementById("sellerReplyOutput").classList.remove("hidden_seller_reply");
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
  var replyText = document.getElementById("replyTextBox").value;
  // alert(replyText);
  document.getElementById("sellerReplyOutput").classList.add("hidden_seller_reply");
  var sellerReplyOutputEx = document.getElementById("sellerReplyOutEx");
  var sellerReplyOutput = document.createElement("div");
  var replyIcon = document.createElement("div");
  var sellerReplyText = document.createElement("p");
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
var colorTabList = document.querySelectorAll(".product_color .tab_menu .list li");
var contents = document.querySelectorAll(".left_top .cont_area .cont");
var activeCont = ""; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for (var _i = 0; _i < colorTabList.length; _i++) {
  colorTabList[_i].querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    for (var j = 0; j < colorTabList.length; j++) {
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
document.getElementById("benefitOpenBtn").addEventListener("click", function () {
  document.getElementById("benefitPopup").classList.remove("hidden_benefit");
});
document.getElementById("benefitCloseBtn").addEventListener("click", function () {
  document.getElementById("benefitPopup").classList.add("hidden_benefit");
});

//left_bottom 탭메뉴
var menuTabList = document.querySelectorAll(".left_bottom .tab_menu .list li");
for (var _i2 = 0; _i2 < menuTabList.length; _i2++) {
  menuTabList[_i2].querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    for (var j = 0; j < menuTabList.length; j++) {
      menuTabList[j].classList.remove("is_on");
    }
    this.parentNode.classList.add("is_on");
  });
}

//리뷰

//////////////////////////////현정!!! 엄청난 문제점 발견!!! 후기올리기 버튼을 눌러서업로드를하면 창이 다시 생기지 않음->이제 창이 새로 생기는데 새로 단 글이 빈칸임
var count = 0;
document.getElementById("reviewBtn").addEventListener("click", function () {
  count++;
  if (count % 2 == 1) {
    //document.getElementById("reviewInput").classList.remove("hidden_input");
    document.getElementById("reviewBtn").innerHTML = "후기보기";
  } else {
    //document.getElementById("reviewInput").classList.add("hidden_input");
    document.getElementById("reviewBtn").innerHTML = "후기작성";
  }
});
document.getElementById("reviewBtn").addEventListener("click", function () {
  document.getElementById("reviewInput").classList.toggle("hidden_input");
});

/* document.getElementById("reviewBtn").addEventListener("click", function () {
  document.getElementById("reviewInput").classList.remove("hidden_input");
  document.getElementById("reviewBtn").innerHTML = "후기보기";
}); */

//현정!!! 후기를 올리면 거기에 있던 사진이 스와이퍼에 들어가게 하면 짱 좋겠어. 그러려면 스와이퍼에다가도 무슨 동적데이터를 넣어야겠지? 헤헤 할 수 있을까?
document.getElementById("upLoadBtn").addEventListener("click", function () {
  var userId = document.getElementById("reviewId").value;
  var password = document.getElementById("password").value;
  var selectOption = "옵션: " + document.getElementById("color").value;
  var reviewBox = document.getElementById("reviewBox").value;
  var starValue = document.getElementById("starValue").value;
  var date = new Date().toLocaleDateString();
  if (userId == "") {
    alert("아이디를 입력하세요");
    return false;
  }
  if (starValue < 1) {
    alert("별점을 입력하세요");
    return false;
  }

  // Id 앞 3글자를 제외한 글자 수(userId.substr(4).length)만큼 *를 쌓는다(+=). 
  var userIdAst = "";
  for (var _i3 = 0; _i3 <= userId.substr(4).length; _i3++) {
    userIdAst += "*";
  }
  userId = userId.substr(0, 3) + userIdAst;
  var star = "";
  for (var _i4 = 0; _i4 < starValue; _i4++) {
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
  var addReviewBoxEx = document.getElementById("addReviewBoxEx");
  var addReviewBox = document.createElement("div");
  var addReviewLeft = document.createElement("div");
  var addStarWritten = document.createElement("div");
  var addStar = document.createElement("p");
  var addWrittenId = document.createElement("p");
  var addOption = document.createElement("div");
  var addSelectedOption = document.createElement("p");
  var addWrittenReview = document.createElement("p");
  var addReviewRight = document.createElement("div");
  var addDate = document.createElement("p");
  var addUserImageEx = document.createElement("div");
  var addUserImage = document.createElement("img");
  addReviewBox.setAttribute("class", "add_review_box");
  addReviewBox.setAttribute("id", "addReviewBox");
  addReviewLeft.setAttribute("class", "review_output_left");
  addStarWritten.setAttribute("class", "star_written");
  addStar.setAttribute("class", "star_rate");
  addStar.setAttribute("id", "star_rate");
  addWrittenId.setAttribute("class", "written_id");
  addWrittenId.setAttribute("id", "writtenId");
  addOption.setAttribute("class", "option");
  addSelectedOption.setAttribute("class", "selected_option");
  addSelectedOption.setAttribute("id", "selectedOption");
  addWrittenReview.setAttribute("class", "written_review");
  addWrittenReview.setAttribute("id", "writtenReview");
  addReviewRight.setAttribute("class", "review_output_right");
  addDate.setAttribute("class", "date");
  addDate.setAttribute("id", "date");
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
  var fileInput = document.getElementById("uploadImage");
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

    var selectedFile = _toConsumableArray(fileInput.files);
    var fileReader = new FileReader();
    fileReader.readAsDataURL(selectedFile[0]);
    fileReader.onload = function () {
      console.log(fileReader.result);
      document.getElementById("userImage").src = fileReader.result;
    };
  }
  ;

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
  document.querySelector('.rating_star').style.width = "".concat(rating_input.value * 20, "%");

  //document.getElementById("reviewInput").style.display = "none";
  document.getElementById("reviewInput").classList.add("hidden_input");
  document.getElementById("reviewBtn").innerHTML = "후기작성";
});
var rating_input = document.querySelector('.rating input');
var rating_star = document.querySelector('.rating_star');

// 별점 드래그 할 때
rating_input.addEventListener('input', function () {
  rating_star.style.width = "".concat(rating_input.value * 20, "%");
});

//리뷰 끝

//총 상품 금액
var basket = {
  totalCount: 0,
  totalPrice: 0,
  //재계산
  reCalc: function reCalc() {
    this.totalCount = 0;
    this.totalPrice = 0;
    document.querySelectorAll(".p_num").forEach(function (item) {
      if (item.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.checked == true) {
        var _count = parseInt(item.getAttribute("value"));
        this.totalCount += _count;
        var price = item.parentElement.parentElement.previousElementSibling.firstElementChild.getAttribute("value");
        this.totalPrice += _count * price;
      }
    }, this); // forEach 2번째 파라메터로 객체를 넘겨서 this 가 객체리터럴을 가리키도록 함. - thisArg
  },

  //화면 업데이트
  updateUI: function updateUI() {
    document.querySelector("#sum_p_num").textContent = "(" + this.totalCount.formatNumber() + "개" + ")";
    document.querySelector("#sum_p_price").textContent = this.totalPrice.formatNumber() + "원";
  },
  //개별 수량 변경
  changePNum: function changePNum(pos) {
    var item = document.querySelector("input[name=p_num" + pos + "]");
    var p_num = parseInt(item.getAttribute("value"));
    var newval = event.target.classList.contains("up") ? p_num + 1 : event.target.classList.contains("down") ? p_num - 1 : event.target.value;
    if (parseInt(newval) < 1 || parseInt(newval) > 99) {
      return false;
    }
    item.setAttribute("value", newval);
    item.value = newval;
    var price = item.parentElement.parentElement.previousElementSibling.firstElementChild.getAttribute("value");
    item.parentElement.parentElement.nextElementSibling.textContent = (newval * price).formatNumber() + "원";
    //AJAX 업데이트 전송

    //전송 처리 결과가 성공이면
    this.reCalc();
    this.updateUI();
  },
  checkItem: function checkItem() {
    this.reCalc();
    this.updateUI();
  },
  delItem: function delItem() {
    event.target.parentElement.parentElement.parentElement.remove();
    this.reCalc();
    this.updateUI();
  }
};

// 숫자 3자리 콤마찍기
Number.prototype.formatNumber = function () {
  if (this == 0) return 0;
  var regex = /(^[+-]?\d+)(\d{3})/;
  var nstr = this + "";
  while (regex.test(nstr)) nstr = nstr.replace(regex, "$1" + "," + "$2");
  return nstr;
};

//
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53280" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/detail.js"], null)
//# sourceMappingURL=/detail.975b991d.js.map