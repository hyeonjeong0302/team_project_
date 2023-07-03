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

//탑버튼 스르륵
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

// 상품 데이터 베이스
import shoppingList from "./data.js";

const bestSection = document.querySelector(".best_product");
const sortSelect = document.querySelector(".sort_select");
let Newproducts = null;

//페이지네이션이 초기화때만 적용됨
const COUNT_PER_PAGE = 16; // 페이지 당 보여줄 게시물 수
let numberButtonWrapper = document.querySelector(".number_button_wrapper"); // 페이지네이션 버튼 wrapper
const section = document.querySelector("section"); // 게시물을 담을 unordered list
const prevButton = document.querySelector(".prev_button"); // 이전 페이지 버튼
const nextButton = document.querySelector(".next_button"); // 이후 페이지 버튼
let pageNumberButtons; // 페이지 버튼들

let currentPage = 1; // 초기 페이지 번호

/**
 * 필요한 페이지 번호 개수 구하기
 * @returns {number} - 필요한 페이지 번호 개수
 */
let getTotalPageCount = () => {
  return Math.ceil(shoppingList.length / COUNT_PER_PAGE);
};

/**
 * 필요한 페이지 번호 수에 맞게 페이지 버튼 구성하기
 */
let setPageButtons = () => {
  numberButtonWrapper.innerHTML = "";

  for (let i = 1; i <= getTotalPageCount(); i++) {
    numberButtonWrapper.innerHTML += `<span class="number_button"> ${i} </span`;
  }

  numberButtonWrapper.firstChild.classList.add("selected");
  pageNumberButtons = document.querySelectorAll(".number_button");
};

/**
 * 초기 페이지만 해당
 * 페이지에 해당하는 게시물 ul에 넣어주기
 * @param {number} pageNumber - 이동할 페이지 번호
 */
let setPageOf = (pageNumber) => {
  section.innerHTML = "";

  for (
    let i = COUNT_PER_PAGE * (pageNumber - 1);
    i <= COUNT_PER_PAGE * (pageNumber - 1) + 15 && i < shoppingList.length;
    i++
  ) {
    const bestDiv = document.createElement("div");
    const bestA = document.createElement("a");
    const bestImg = document.createElement("img");
    const bestName = document.createElement("p");
    const bestContent = document.createElement("div");
    const bestNameText = document.createTextNode(shoppingList[i].name);
    const bestPrice = document.createElement("p");
    let bestPriceText = document.createTextNode(shoppingList[i].price);
    const bestBox = document.createElement("p");
    const bestBoxText = document.createTextNode(shoppingList[i].best);

    // 베스트박스
    if (bestBoxText.data === "BEST") {
      bestBox.setAttribute("class", "best_box_text");
      bestA.appendChild(bestBox);
      bestBox.appendChild(bestBoxText);
    }

    bestName.setAttribute("class", "best_Name");
    bestPrice.setAttribute("class", "best_Price");
    bestDiv.setAttribute("class", "best_box");
    bestA.setAttribute("class", "best_link");
    bestA.setAttribute("href", "./detail.html");
    bestImg.setAttribute("src", shoppingList[i].src);
    bestContent.setAttribute("class", "best_txt");

    bestDiv.appendChild(bestA);
    bestSection.appendChild(bestDiv);
    bestA.appendChild(bestImg);
    bestName.appendChild(bestNameText);
    bestA.appendChild(bestName);
    bestPrice.appendChild(bestPriceText);
    bestA.appendChild(bestPrice);
    bestContent.appendChild(bestName);
    bestContent.appendChild(bestPrice);
    bestA.appendChild(bestContent);
  }
};

/**
 * 페이지 이동에 따른 css 클래스 적용
 */
let moveSelectedPageHighlight = () => {
  const pageNumberButtons = document.querySelectorAll(".number_button"); // 페이지 버튼들

  pageNumberButtons.forEach((numberButton) => {
    if (numberButton.classList.contains("selected")) {
      numberButton.classList.remove("selected");
    }
  });

  pageNumberButtons[currentPage - 1].classList.add("selected");
};

setPageButtons();
setPageOf(currentPage);

/**
 * 상품 정렬
 */

// 오름차순(낮은가격순)
function ProductSortUp(sortPageNumber) {
  currentPage = 1;
  while (bestSection.hasChildNodes()) {
    bestSection.removeChild(bestSection.firstChild);
  }
  shoppingList.sort(function (a, b) {
    return a.price - b.price;
  });

  // 페이지네이션
  numberButtonWrapper.innerHTML = "";

  for (let i = 1; i <= Math.ceil(shoppingList.length / 16); i++) {
    numberButtonWrapper.innerHTML += `<span class="number_button"> ${i} </span`;
  }

  numberButtonWrapper.firstChild.classList.add("selected");
  pageNumberButtons = document.querySelectorAll(".number_button");

  pageNumberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", (e) => {
      currentPage = +e.target.innerHTML;
      console.log(currentPage);
      setPageOf(currentPage);
      moveSelectedPageHighlight();
    });
  });

  for (
    let i = COUNT_PER_PAGE * (sortPageNumber - 1);
    i <= COUNT_PER_PAGE * (sortPageNumber - 1) + 15 && i < shoppingList.length;
    i++
  ) {
    const bestDiv = document.createElement("div");
    const bestA = document.createElement("a");
    const bestImg = document.createElement("img");
    const bestName = document.createElement("p");
    const bestContent = document.createElement("div");
    const bestNameText = document.createTextNode(shoppingList[i].name);
    const bestPrice = document.createElement("p");
    const bestPriceText = document.createTextNode(shoppingList[i].price);
    // 베스트박스
    const bestBox = document.createElement("p");
    const bestBoxText = document.createTextNode(shoppingList[i].best);

    if (bestBoxText.data === "BEST") {
      bestBox.setAttribute("class", "best_box_text");
      bestA.appendChild(bestBox);
      bestBox.appendChild(bestBoxText);
    }
    // 베스트박스

    bestName.setAttribute("class", "best_Name");
    bestPrice.setAttribute("class", "best_Price");
    bestDiv.setAttribute("class", "best_box");
    bestA.setAttribute("class", "best_link");
    bestA.setAttribute("href", "./detail.html");
    bestImg.setAttribute("src", shoppingList[i].src);
    bestContent.setAttribute("class", "best_txt");

    bestDiv.appendChild(bestA);
    bestSection.appendChild(bestDiv);
    bestA.appendChild(bestImg);
    bestName.appendChild(bestNameText);
    bestA.appendChild(bestName);
    bestPrice.appendChild(bestPriceText);
    bestA.appendChild(bestPrice);
    bestContent.appendChild(bestName);
    bestContent.appendChild(bestPrice);
    bestA.appendChild(bestContent);
  }
  
}

// 내림차순
function ProductSortDown(sortPageNumber) {
  currentPage = 1;
 
  while (bestSection.hasChildNodes()) {
    bestSection.removeChild(bestSection.firstChild);
  }

  shoppingList.sort(function (a, b) {
    return b.price - a.price;
  });

  // 페이지네이션
  numberButtonWrapper.innerHTML = "";

  for (let i = 1; i <= Math.ceil(shoppingList.length / 16); i++) {
    numberButtonWrapper.innerHTML += `<span class="number_button"> ${i} </span`;
  }

  numberButtonWrapper.firstChild.classList.add("selected");
  pageNumberButtons = document.querySelectorAll(".number_button");

  pageNumberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", (e) => {
      currentPage = +e.target.innerHTML;
      console.log(currentPage);
      setPageOf(currentPage);
      moveSelectedPageHighlight();
    });
  });

  for (
    let i = COUNT_PER_PAGE * (sortPageNumber - 1);
    i <= COUNT_PER_PAGE * (sortPageNumber - 1) + 15 && i < shoppingList.length;
    i++
  ) {
    const bestDiv = document.createElement("div");
    const bestA = document.createElement("a");
    const bestImg = document.createElement("img");
    const bestName = document.createElement("p");
    const bestContent = document.createElement("div");
    const bestNameText = document.createTextNode(shoppingList[i].name);
    const bestPrice = document.createElement("p");
    const bestPriceText = document.createTextNode(shoppingList[i].price);
    // 베스트박스
    const bestBox = document.createElement("p");
    const bestBoxText = document.createTextNode(shoppingList[i].best);

    if (bestBoxText.data === "BEST") {
      bestBox.setAttribute("class", "best_box_text");
      bestA.appendChild(bestBox);
      bestBox.appendChild(bestBoxText);
    }
    // 베스트박스

    bestName.setAttribute("class", "best_Name");
    bestPrice.setAttribute("class", "best_Price");
    bestDiv.setAttribute("class", "best_box");
    bestA.setAttribute("class", "best_link");
    bestA.setAttribute("href", "./detail.html");
    bestImg.setAttribute("src", shoppingList[i].src);
    bestContent.setAttribute("class", "best_txt");

    bestDiv.appendChild(bestA);
    bestSection.appendChild(bestDiv);
    bestA.appendChild(bestImg);
    bestName.appendChild(bestNameText);
    bestA.appendChild(bestName);
    bestPrice.appendChild(bestPriceText);
    bestA.appendChild(bestPrice);
    bestContent.appendChild(bestName);
    bestContent.appendChild(bestPrice);
    bestA.appendChild(bestContent);
  }
}

//가나다순
function ProductABC(sortPageNumber) {
  currentPage = 1;

  while (bestSection.hasChildNodes()) {
    bestSection.removeChild(bestSection.firstChild);
  }
  shoppingList.sort(function (a, b) {
    if (a.name < b.name) return -1;
    else if (a.name == b.name) return 0;
    else return 1;
  });

  // 페이지네이션
  numberButtonWrapper.innerHTML = "";

  for (let i = 1; i <= Math.ceil(shoppingList.length / 16); i++) {
    numberButtonWrapper.innerHTML += `<span class="number_button"> ${i} </span`;
  }

  numberButtonWrapper.firstChild.classList.add("selected");
  pageNumberButtons = document.querySelectorAll(".number_button");

  pageNumberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", (e) => {
      currentPage = +e.target.innerHTML;
      console.log(currentPage);
      setPageOf(currentPage);
      moveSelectedPageHighlight();
    });
  });

  for (
    let i = COUNT_PER_PAGE * (sortPageNumber - 1);
    i <= COUNT_PER_PAGE * (sortPageNumber - 1) + 15 && i < shoppingList.length;
    i++
  ) {
    const bestDiv = document.createElement("div");
    const bestA = document.createElement("a");
    const bestImg = document.createElement("img");
    const bestName = document.createElement("p");
    const bestContent = document.createElement("div");
    const bestNameText = document.createTextNode(shoppingList[i].name);
    const bestPrice = document.createElement("p");
    const bestPriceText = document.createTextNode(shoppingList[i].price);
    // 베스트박스
    const bestBox = document.createElement("p");
    const bestBoxText = document.createTextNode(shoppingList[i].best);

    if (bestBoxText.data === "BEST") {
      bestBox.setAttribute("class", "best_box_text");
      bestA.appendChild(bestBox);
      bestBox.appendChild(bestBoxText);
    }
    // 베스트박스

    bestName.setAttribute("class", "best_Name");
    bestPrice.setAttribute("class", "best_Price");
    bestDiv.setAttribute("class", "best_box");
    bestA.setAttribute("class", "best_link");
    bestA.setAttribute("href", "./detail.html");
    bestImg.setAttribute("src", shoppingList[i].src);
    bestContent.setAttribute("class", "best_txt");

    bestDiv.appendChild(bestA);
    bestSection.appendChild(bestDiv);
    bestA.appendChild(bestImg);
    bestName.appendChild(bestNameText);
    bestA.appendChild(bestName);
    bestPrice.appendChild(bestPriceText);
    bestA.appendChild(bestPrice);
    bestContent.appendChild(bestName);
    bestContent.appendChild(bestPrice);
    bestA.appendChild(bestContent);
  }
}

// 초기 배열로 되돌리기 ALL
function ProductBasic(sortPageNumber) {
  currentPage = 1;

  while (bestSection.hasChildNodes()) {
    bestSection.removeChild(bestSection.firstChild);
  }

  // 페이지네이션
  numberButtonWrapper.innerHTML = "";

  for (let i = 1; i <= Math.ceil(shoppingList.length / 16); i++) {
    numberButtonWrapper.innerHTML += `<span class="number_button"> ${i} </span`;
  }

  numberButtonWrapper.firstChild.classList.add("selected");
  pageNumberButtons = document.querySelectorAll(".number_button");

  pageNumberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", (e) => {
      currentPage = +e.target.innerHTML;
      console.log(currentPage);
      setPageOf(currentPage);
      moveSelectedPageHighlight();
    });
  });

  for (
    let i = COUNT_PER_PAGE * (sortPageNumber - 1);
    i <= COUNT_PER_PAGE * (sortPageNumber - 1) + 15 && i < shoppingList.length;
    i++
  ) {
    const bestDiv = document.createElement("div");
    const bestA = document.createElement("a");
    const bestImg = document.createElement("img");
    const bestName = document.createElement("p");
    const bestContent = document.createElement("div");
    const bestNameText = document.createTextNode(shoppingList[i].name);
    const bestPrice = document.createElement("p");
    const bestPriceText = document.createTextNode(shoppingList[i].price);
    // 베스트박스
    const bestBox = document.createElement("p");
    const bestBoxText = document.createTextNode(shoppingList[i].best);

    if (bestBoxText.data === "BEST") {
      bestBox.setAttribute("class", "best_box_text");
      bestA.appendChild(bestBox);
      bestBox.appendChild(bestBoxText);
    }
    // 베스트박스

    bestName.setAttribute("class", "best_Name");
    bestPrice.setAttribute("class", "best_Price");
    bestDiv.setAttribute("class", "best_box");
    bestA.setAttribute("class", "best_link");
    bestA.setAttribute("href", "./detail.html");
    bestImg.setAttribute("src", shoppingList[i].src);
    bestContent.setAttribute("class", "best_txt");

    bestDiv.appendChild(bestA);
    bestSection.appendChild(bestDiv);
    bestA.appendChild(bestImg);
    bestName.appendChild(bestNameText);
    bestA.appendChild(bestName);
    bestPrice.appendChild(bestPriceText);
    bestA.appendChild(bestPrice);
    bestContent.appendChild(bestName);
    bestContent.appendChild(bestPrice);
    bestA.appendChild(bestContent);
  }
}

// BEST 상품
function ProductFilter() {
  while (bestSection.hasChildNodes()) {
    // bestSection.hasChildNodes() : bestSection안에 Nodes값이 있을 때까지
    bestSection.removeChild(bestSection.firstChild); // 이미 있는 리스트를 삭제한다.
  }

  Newproducts = shoppingList.filter(function (a) {
    return a.best == "BEST";
  });

  numberButtonWrapper.innerHTML = "";

  for (let i = 1; i <= Math.ceil(Newproducts.length / 16); i++) {
    numberButtonWrapper.innerHTML += `<span class="number_button"> ${i} </span`;
  }

  for (let i = 0; i < Newproducts.length; i++) {
    const bestDiv = document.createElement("div");
    const bestA = document.createElement("a");
    const bestImg = document.createElement("img");
    const bestName = document.createElement("p");
    const bestContent = document.createElement("div");
    const bestNameText = document.createTextNode(Newproducts[i].name);
    const bestPrice = document.createElement("p");
    const bestPriceText = document.createTextNode(Newproducts[i].price);
    // 베스트박스
    const bestBox = document.createElement("p");
    const bestBoxText = document.createTextNode(Newproducts[i].best);

    if (bestBoxText.data === "BEST") {
      bestBox.setAttribute("class", "best_box_text");
      bestA.appendChild(bestBox);
      bestBox.appendChild(bestBoxText);
    }
    // 베스트박스

    bestName.setAttribute("class", "best_Name");
    bestPrice.setAttribute("class", "best_Price");
    bestDiv.setAttribute("class", "best_box");
    bestA.setAttribute("class", "best_link");
    bestA.setAttribute("href", "./detail.html");
    bestImg.setAttribute("src", Newproducts[i].src);
    bestContent.setAttribute("class", "best_txt");

    bestDiv.appendChild(bestA);
    bestSection.appendChild(bestDiv);
    bestA.appendChild(bestImg);
    bestName.appendChild(bestNameText);
    bestA.appendChild(bestName);
    bestPrice.appendChild(bestPriceText);
    bestA.appendChild(bestPrice);
    bestContent.appendChild(bestName);
    bestContent.appendChild(bestPrice);
    bestA.appendChild(bestContent);
  }
}

// 셀렉트의 경우
let sortPageNumber = 1;
sortSelect.addEventListener("change", (e) => {
  if (e.target.value == "낮은 가격순") {
    ProductSortUp(sortPageNumber);
  } else if (e.target.value == "높은 가격순") {
    ProductSortDown(sortPageNumber);
  } else if (e.target.value == "BEST 상품") {
    ProductFilter(sortPageNumber);
  } else if (e.target.value == "가나다순") {
    ProductABC(sortPageNumber);
  } else if (e.target.value == "ALL") {
    ProductBasic(sortPageNumber);
  } else {
    ProductExchange();
  }
});

/**
 * 페이지 번호 버튼 클릭 리스너
 */
pageNumberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", (e) => {
    currentPage = +e.target.innerHTML;
    console.log(currentPage);
    setPageOf(currentPage);
    moveSelectedPageHighlight();
  });
});

/**
 * 이전 버튼 클릭 리스너
 */
prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage -= 1;
    setPageOf(currentPage);
    moveSelectedPageHighlight();
  }
});

/**
 * 이후 버튼 클릭 리스너
 */
nextButton.addEventListener("click", () => {
  if (currentPage < getTotalPageCount()) {
    currentPage += 1;
    setPageOf(currentPage);
    moveSelectedPageHighlight();
  }
});