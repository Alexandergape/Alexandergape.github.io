"use strict";

var sections = document.querySelectorAll(".section");
var secBtns = document.querySelectorAll(".controls");
var sectBtn = document.querySelectorAll(".control");
var allSections = document.querySelector(".main-content");

function pageTransitions() {
  // alternate the active-btn, first remove the class to all the btns, and then add to the last clicked one
  for (var i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      var currBtn = document.querySelectorAll(".active-btn");
      currBtn[0].className = currBtn[0].className.replace("active-btn", "");
      this.className += " active-btn";
    });
  }

  allSections.addEventListener("click", function (e) {
    // console.log(e.target);
    var id = e.target.dataset.id; // if has an id

    if (id) {
      secBtns.forEach(function (btn) {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      sections.forEach(function (section) {
        section.classList.remove("active");
      });
      var element = document.getElementById(id);
      element.classList.add("active");
    }
  });
  var btn = document.querySelector(".theme-btn");
  btn.addEventListener("click", function () {
    var body = document.body;
    body.classList.toggle("light-mode");
  });
}

pageTransitions();

window.onload = function () {
  var ctrls = document.getElementsByClassName("control");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = ctrls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var ctrl = _step.value;
      var id = ctrl.dataset.id;
      id = id.charAt(0).toUpperCase() + id.slice(1);
      ctrl.title = id;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  document.getElementById("blogs").remove();
  document.getElementsByClassName("control")[3].remove();
};