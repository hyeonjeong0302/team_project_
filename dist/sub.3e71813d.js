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
})({"js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var shoppingList = [{
  id: "sub01",
  category: "IK 시리즈",
  name: "SNOWMAN15 Portable Stand 3Colors",
  price: 110000,
  src: "./images/sub_01.jpg",
  best: "BEST"
}, {
  id: "sub02",
  category: "IK 시리즈",
  name: "SNOWMAN22 Table Stand Butter",
  price: 220000,
  src: "./images/sub_02.jpg",
  best: "BEST"
}, {
  id: "sub03",
  category: "IK 시리즈",
  name: "SNOWMAN22 Floor Stand Butter",
  price: 340000,
  src: "./images/sub_03.jpg",
  best: "BEST"
}, {
  id: "sub04",
  category: "IK 시리즈",
  name: "FROG38 Pendant 5Colors",
  price: 120000,
  src: "./images/sub_04.jpg",
  best: false
}, {
  id: "sub05",
  category: "IK 시리즈",
  name: "SNOWMAN22 SOLID Table Stand All Butter",
  price: 230000,
  src: "./images/sub_05.jpg",
  best: false
}, {
  id: "sub06",
  category: "IK 시리즈",
  name: "TEACUP 4A Table Stand 3Colors",
  price: 75000,
  src: "./images/sub_06.jpg",
  best: false
}, {
  id: "sub07",
  category: "IK 시리즈",
  name: "CANDLE9 Table Stand 5Colors",
  price: 55000,
  src: "./images/sub_07.jpg",
  best: false
}, {
  id: "sub08",
  category: "IK 시리즈",
  name: "SNOWMAN22 SOLID Table Stand 29CM Edition",
  price: 230000,
  src: "./images/sub_08.jpg",
  best: false
}, {
  id: "sub09",
  category: "IK 시리즈",
  name: "TALLBOY16 Table Stand 6Colors",
  price: 180000,
  src: "./images/sub_09.jpg",
  best: false
}, {
  id: "sub10",
  category: "IK 시리즈",
  name: "ACORN22 Table Stand 5Colors",
  price: 160000,
  src: "./images/sub_10.jpg",
  best: false
}, {
  id: "sub11",
  category: "IK 시리즈",
  name: "NEST25 Pendant 2Colors",
  price: 120000,
  src: "./images/sub_11.jpg",
  best: false
}, {
  id: "sub12",
  category: "IK 시리즈",
  name: "FONDUE16 Table Stand KYOBO BOOK Edition 2Colors",
  price: 280000,
  src: "./images/sub_12.jpg",
  best: false
}, {
  id: "sub13",
  category: "IK 시리즈",
  name: "SNOWMAN22 SOLID Table Stand 2Colors",
  price: 230000,
  src: "./images/sub_13.jpg",
  best: false
}, {
  id: "sub14",
  category: "IK 시리즈",
  name: "WOOD3 Table Stand 3Colors",
  price: 55000,
  src: "./images/sub_14.jpg",
  best: false
}, {
  id: "sub15",
  category: "IK 시리즈",
  name: "ACORN22 Floor Stand 5Colors",
  price: 270000,
  src: "./images/sub_15.jpg",
  best: false
}, {
  id: "sub16",
  category: "IK 시리즈",
  name: "FROG22 Table Stand 5Colors",
  price: 160000,
  src: "./images/sub_16.jpg",
  best: false
}, {
  id: "sub17",
  category: "IK 시리즈",
  name: "SNOWMAN22 Table Stand 2Colors",
  price: 220000,
  src: "./images/sub_17.jpg",
  best: false
}, {
  id: "sub18",
  category: "IK 시리즈",
  name: "SATURN55 SMART Pendant 2Colors",
  price: 240000,
  src: "./images/sub_18.jpg",
  best: false
}, {
  id: "sub19",
  category: "IK 시리즈",
  name: "SNOWBALL22 Table Stand 2Colors",
  price: 200000,
  src: "./images/sub_19.jpg",
  best: false
}, {
  id: "sub20",
  category: "IK 시리즈",
  name: "FROG22 Pendant 5Colors",
  price: 95000,
  src: "./images/sub_20.jpg",
  best: "BEST"
}, {
  id: "sub21",
  category: "IK 시리즈",
  name: "ACORN22 Pendant 5Colors",
  price: 95000,
  src: "./images/sub_21.jpg",
  best: "BEST"
}, {
  id: "sub22",
  category: "IK 시리즈",
  name: "SLOPE45 SMART Pendant 3Colors",
  price: 290000,
  src: "./images/sub_22.jpg",
  best: "BEST"
}, {
  id: "sub23",
  category: "IK 시리즈",
  name: "SNOWBALL22 Floor Stand Butter",
  price: 320000,
  src: "./images/sub_23.jpg",
  best: "BEST"
}, {
  id: "sub24",
  category: "IK 시리즈",
  name: "SWAN2 Floor Stand ODENSE Edition",
  price: 340000,
  src: "./images/sub_24.jpg",
  best: false
}, {
  id: "sub25",
  category: "IK 시리즈",
  name: "MAGRITTE25 Pendant 4Colors",
  price: 280000,
  src: "./images/sub_25.jpg",
  best: false
}, {
  id: "sub26",
  category: "IK 시리즈",
  name: "ACORN38 Pendant 5Colors",
  price: 120000,
  src: "./images/sub_26.jpg",
  best: false
}, {
  id: "sub27",
  category: "IK 시리즈",
  name: "AMBER22 Pendant",
  price: 150000,
  src: "./images/sub_27.jpg",
  best: false
}, {
  id: "sub28",
  category: "IK 시리즈",
  name: "WOOD2 Table Stand 2Colors",
  price: 55000,
  src: "./images/sub_28.jpg",
  best: false
}, {
  id: "sub29",
  category: "IK 시리즈",
  name: "CORE4.5 Pendant 4Colors",
  price: 60000,
  src: "./images/sub_29.jpg",
  best: false
}, {
  id: "sub30",
  category: "IK 시리즈",
  name: "일광전구 : 빛을 만들다 (60년 된 전구 회사는 어떻게 리브랜딩에 성공했나)",
  price: 18000,
  src: "./images/sub_30.jpg",
  best: false
}, {
  id: "sub31",
  category: "IK 시리즈",
  name: "디밍 LED G80 White (전구색, E26)",
  price: 4850,
  src: "./images/sub_31.jpg",
  best: false
}, {
  id: "sub32",
  category: "IK 시리즈",
  name: "F-LED D110 (전구색, E26)",
  price: 13000,
  src: "./images/sub_32.jpg",
  best: false
}, {
  id: "sub33",
  category: "IK 시리즈",
  name: "SNOWBALL22 Table Stand Butter",
  price: 200000,
  src: "./images/sub_33.jpg",
  best: false
}, {
  id: "sub34",
  category: "IK 시리즈",
  name: "SNOWBALL22 SOLID Table Stand 2Colors",
  price: 210000,
  src: "./images/sub_34.jpg",
  best: false
}, {
  id: "sub35",
  category: "IK 시리즈",
  name: "TEACUP R Table Stand 2Colors",
  price: 75000,
  src: "./images/sub_35.jpg",
  best: false
}, {
  id: "sub36",
  category: "IK 시리즈",
  name: "클래식 ST64 (전구색, E26)",
  price: 6500,
  src: "./images/sub_36.jpg",
  best: false
}, {
  id: "sub37",
  category: "IK 시리즈",
  name: "SNOWBALL22 Floor Stand 2Colors",
  price: 320000,
  src: "./images/sub_37.jpg",
  best: false
}, {
  id: "sub38",
  category: "IK 시리즈",
  name: "SNOWMAN22 Floor Stand 2Colors",
  price: 340000,
  src: "./images/sub_38.jpg",
  best: false
}, {
  id: "sub39",
  category: "IK 시리즈",
  name: "WOOD2 SHADE Table Stand 2Colors",
  price: 65000,
  src: "./images/sub_39.jpg",
  best: false
}, {
  id: "sub40",
  category: "IK 시리즈",
  name: "TRIANGLE120 C Pendant 2Colors",
  price: 360000,
  src: "./images/sub_40.jpg",
  best: "BEST"
}, {
  id: "sub41",
  category: "IK 시리즈",
  name: "APOLLO22 Table Stand 2Colors",
  price: 340000,
  src: "./images/sub_41.jpg",
  best: false
}, {
  id: "sub42",
  category: "IK 시리즈",
  name: "FROG22 Floor Stand 5Colors",
  price: 270000,
  src: "./images/sub_42.jpg",
  best: false
}, {
  id: "sub43",
  category: "IK 시리즈",
  name: "SNOWBALL22 SOLID Table Stand All Butter",
  price: 210000,
  src: "./images/sub_43.jpg",
  best: false
}, {
  id: "sub44",
  category: "IK 시리즈",
  name: "TEACUP 4R Table Stand",
  price: 75000,
  src: "./images/sub_44.jpg",
  best: false
}, {
  id: "sub45",
  category: "IK 시리즈",
  name: "FROG38 Floor Stand 5Colors",
  price: 310000,
  src: "./images/sub_45.jpg",
  best: false
}, {
  id: "sub46",
  category: "IK 시리즈",
  name: "ACORN38 Floor Stand 5Colors",
  price: 310000,
  src: "./images/sub_46.jpg",
  best: false
}, {
  id: "sub47",
  category: "IK 시리즈",
  name: "SWAN2 Table Stand ODENSE Edition 3Colors",
  price: 240000,
  src: "./images/sub_47.jpg",
  best: false
}, {
  id: "sub48",
  category: "IK 시리즈",
  name: "PINOCCHIO120 B Pendant 3Colors",
  price: 280000,
  src: "./images/sub_48.jpg",
  best: false
}, {
  id: "sub49",
  category: "IK 시리즈",
  name: "WORKSHOP18 Pendant 3Colors",
  price: 120000,
  src: "./images/sub_49.jpg",
  best: false
}, {
  id: "sub50",
  category: "IK 시리즈",
  name: "SWAN Table Stand ODENSE Edition",
  price: 240000,
  src: "./images/sub_50.jpg",
  best: "BEST"
}];
var _default = shoppingList; //import - export
exports.default = _default;
},{}],"js/sub.js":[function(require,module,exports) {
"use strict";

var _data = _interopRequireDefault(require("./data.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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

//탑버튼 스르륵
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

// 상품 데이터 베이스

var bestSection = document.querySelector(".best_product");
var sortSelect = document.querySelector(".sort_select");
var Newproducts = null;

//페이지네이션이 초기화때만 적용됨
var COUNT_PER_PAGE = 16; // 페이지 당 보여줄 게시물 수
var numberButtonWrapper = document.querySelector(".number_button_wrapper"); // 페이지네이션 버튼 wrapper
var section = document.querySelector("section"); // 게시물을 담을 unordered list
var prevButton = document.querySelector(".prev_button"); // 이전 페이지 버튼
var nextButton = document.querySelector(".next_button"); // 이후 페이지 버튼
var pageNumberButtons; // 페이지 버튼들

var currentPage = 1; // 초기 페이지 번호

/**
 * 필요한 페이지 번호 개수 구하기
 * @returns {number} - 필요한 페이지 번호 개수
 */
var getTotalPageCount = function getTotalPageCount() {
  return Math.ceil(_data.default.length / COUNT_PER_PAGE);
};

/**
 * 필요한 페이지 번호 수에 맞게 페이지 버튼 구성하기
 */
var setPageButtons = function setPageButtons() {
  numberButtonWrapper.innerHTML = "";
  for (var i = 1; i <= getTotalPageCount(); i++) {
    numberButtonWrapper.innerHTML += "<span class=\"number_button\"> ".concat(i, " </span");
  }
  numberButtonWrapper.firstChild.classList.add("selected");
  pageNumberButtons = document.querySelectorAll(".number_button");
};

/**
 * 초기 페이지만 해당
 * 페이지에 해당하는 게시물 ul에 넣어주기
 * @param {number} pageNumber - 이동할 페이지 번호
 */
var setPageOf = function setPageOf(pageNumber) {
  section.innerHTML = "";
  for (var i = COUNT_PER_PAGE * (pageNumber - 1); i <= COUNT_PER_PAGE * (pageNumber - 1) + 15 && i < _data.default.length; i++) {
    var bestDiv = document.createElement("div");
    var bestA = document.createElement("a");
    var bestImg = document.createElement("img");
    var bestName = document.createElement("p");
    var bestContent = document.createElement("div");
    var bestNameText = document.createTextNode(_data.default[i].name);
    var bestPrice = document.createElement("p");
    var bestPriceText = document.createTextNode(_data.default[i].price);
    var bestBox = document.createElement("p");
    var bestBoxText = document.createTextNode(_data.default[i].best);

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
    bestImg.setAttribute("src", _data.default[i].src);
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
var moveSelectedPageHighlight = function moveSelectedPageHighlight() {
  var pageNumberButtons = document.querySelectorAll(".number_button"); // 페이지 버튼들

  pageNumberButtons.forEach(function (numberButton) {
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
  _data.default.sort(function (a, b) {
    return a.price - b.price;
  });

  // 페이지네이션
  numberButtonWrapper.innerHTML = "";
  for (var i = 1; i <= Math.ceil(_data.default.length / 16); i++) {
    numberButtonWrapper.innerHTML += "<span class=\"number_button\"> ".concat(i, " </span");
  }
  numberButtonWrapper.firstChild.classList.add("selected");
  pageNumberButtons = document.querySelectorAll(".number_button");
  pageNumberButtons.forEach(function (numberButton) {
    numberButton.addEventListener("click", function (e) {
      currentPage = +e.target.innerHTML;
      console.log(currentPage);
      setPageOf(currentPage);
      moveSelectedPageHighlight();
    });
  });
  for (var _i = COUNT_PER_PAGE * (sortPageNumber - 1); _i <= COUNT_PER_PAGE * (sortPageNumber - 1) + 15 && _i < _data.default.length; _i++) {
    var bestDiv = document.createElement("div");
    var bestA = document.createElement("a");
    var bestImg = document.createElement("img");
    var bestName = document.createElement("p");
    var bestContent = document.createElement("div");
    var bestNameText = document.createTextNode(_data.default[_i].name);
    var bestPrice = document.createElement("p");
    var bestPriceText = document.createTextNode(_data.default[_i].price);
    // 베스트박스
    var bestBox = document.createElement("p");
    var bestBoxText = document.createTextNode(_data.default[_i].best);
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
    bestImg.setAttribute("src", _data.default[_i].src);
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
  _data.default.sort(function (a, b) {
    return b.price - a.price;
  });

  // 페이지네이션
  numberButtonWrapper.innerHTML = "";
  for (var i = 1; i <= Math.ceil(_data.default.length / 16); i++) {
    numberButtonWrapper.innerHTML += "<span class=\"number_button\"> ".concat(i, " </span");
  }
  numberButtonWrapper.firstChild.classList.add("selected");
  pageNumberButtons = document.querySelectorAll(".number_button");
  pageNumberButtons.forEach(function (numberButton) {
    numberButton.addEventListener("click", function (e) {
      currentPage = +e.target.innerHTML;
      console.log(currentPage);
      setPageOf(currentPage);
      moveSelectedPageHighlight();
    });
  });
  for (var _i2 = COUNT_PER_PAGE * (sortPageNumber - 1); _i2 <= COUNT_PER_PAGE * (sortPageNumber - 1) + 15 && _i2 < _data.default.length; _i2++) {
    var bestDiv = document.createElement("div");
    var bestA = document.createElement("a");
    var bestImg = document.createElement("img");
    var bestName = document.createElement("p");
    var bestContent = document.createElement("div");
    var bestNameText = document.createTextNode(_data.default[_i2].name);
    var bestPrice = document.createElement("p");
    var bestPriceText = document.createTextNode(_data.default[_i2].price);
    // 베스트박스
    var bestBox = document.createElement("p");
    var bestBoxText = document.createTextNode(_data.default[_i2].best);
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
    bestImg.setAttribute("src", _data.default[_i2].src);
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
  _data.default.sort(function (a, b) {
    if (a.name < b.name) return -1;else if (a.name == b.name) return 0;else return 1;
  });

  // 페이지네이션
  numberButtonWrapper.innerHTML = "";
  for (var i = 1; i <= Math.ceil(_data.default.length / 16); i++) {
    numberButtonWrapper.innerHTML += "<span class=\"number_button\"> ".concat(i, " </span");
  }
  numberButtonWrapper.firstChild.classList.add("selected");
  pageNumberButtons = document.querySelectorAll(".number_button");
  pageNumberButtons.forEach(function (numberButton) {
    numberButton.addEventListener("click", function (e) {
      currentPage = +e.target.innerHTML;
      console.log(currentPage);
      setPageOf(currentPage);
      moveSelectedPageHighlight();
    });
  });
  for (var _i3 = COUNT_PER_PAGE * (sortPageNumber - 1); _i3 <= COUNT_PER_PAGE * (sortPageNumber - 1) + 15 && _i3 < _data.default.length; _i3++) {
    var bestDiv = document.createElement("div");
    var bestA = document.createElement("a");
    var bestImg = document.createElement("img");
    var bestName = document.createElement("p");
    var bestContent = document.createElement("div");
    var bestNameText = document.createTextNode(_data.default[_i3].name);
    var bestPrice = document.createElement("p");
    var bestPriceText = document.createTextNode(_data.default[_i3].price);
    // 베스트박스
    var bestBox = document.createElement("p");
    var bestBoxText = document.createTextNode(_data.default[_i3].best);
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
    bestImg.setAttribute("src", _data.default[_i3].src);
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
  for (var i = 1; i <= Math.ceil(_data.default.length / 16); i++) {
    numberButtonWrapper.innerHTML += "<span class=\"number_button\"> ".concat(i, " </span");
  }
  numberButtonWrapper.firstChild.classList.add("selected");
  pageNumberButtons = document.querySelectorAll(".number_button");
  pageNumberButtons.forEach(function (numberButton) {
    numberButton.addEventListener("click", function (e) {
      currentPage = +e.target.innerHTML;
      console.log(currentPage);
      setPageOf(currentPage);
      moveSelectedPageHighlight();
    });
  });
  for (var _i4 = COUNT_PER_PAGE * (sortPageNumber - 1); _i4 <= COUNT_PER_PAGE * (sortPageNumber - 1) + 15 && _i4 < _data.default.length; _i4++) {
    var bestDiv = document.createElement("div");
    var bestA = document.createElement("a");
    var bestImg = document.createElement("img");
    var bestName = document.createElement("p");
    var bestContent = document.createElement("div");
    var bestNameText = document.createTextNode(_data.default[_i4].name);
    var bestPrice = document.createElement("p");
    var bestPriceText = document.createTextNode(_data.default[_i4].price);
    // 베스트박스
    var bestBox = document.createElement("p");
    var bestBoxText = document.createTextNode(_data.default[_i4].best);
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
    bestImg.setAttribute("src", _data.default[_i4].src);
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

  Newproducts = _data.default.filter(function (a) {
    return a.best == "BEST";
  });
  numberButtonWrapper.innerHTML = "";
  for (var i = 1; i <= Math.ceil(Newproducts.length / 16); i++) {
    numberButtonWrapper.innerHTML += "<span class=\"number_button\"> ".concat(i, " </span");
  }
  for (var _i5 = 0; _i5 < Newproducts.length; _i5++) {
    var bestDiv = document.createElement("div");
    var bestA = document.createElement("a");
    var bestImg = document.createElement("img");
    var bestName = document.createElement("p");
    var bestContent = document.createElement("div");
    var bestNameText = document.createTextNode(Newproducts[_i5].name);
    var bestPrice = document.createElement("p");
    var bestPriceText = document.createTextNode(Newproducts[_i5].price);
    // 베스트박스
    var bestBox = document.createElement("p");
    var bestBoxText = document.createTextNode(Newproducts[_i5].best);
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
    bestImg.setAttribute("src", Newproducts[_i5].src);
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
var sortPageNumber = 1;
sortSelect.addEventListener("change", function (e) {
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
pageNumberButtons.forEach(function (numberButton) {
  numberButton.addEventListener("click", function (e) {
    currentPage = +e.target.innerHTML;
    console.log(currentPage);
    setPageOf(currentPage);
    moveSelectedPageHighlight();
  });
});

/**
 * 이전 버튼 클릭 리스너
 */
prevButton.addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage -= 1;
    setPageOf(currentPage);
    moveSelectedPageHighlight();
  }
});

/**
 * 이후 버튼 클릭 리스너
 */
nextButton.addEventListener("click", function () {
  if (currentPage < getTotalPageCount()) {
    currentPage += 1;
    setPageOf(currentPage);
    moveSelectedPageHighlight();
  }
});
},{"./data.js":"js/data.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/sub.js"], null)
//# sourceMappingURL=/sub.3e71813d.js.map