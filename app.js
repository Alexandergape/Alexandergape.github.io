const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransitions() {
  // alternate the active-btn, first remove the class to all the btns, and then add to the last clicked one
  for (let i = 0; i < sectBtn.length; i++)
    sectBtn[i].addEventListener("click", function () {
      let currBtn = document.querySelectorAll(".active-btn");
      currBtn[0].className = currBtn[0].className.replace("active-btn", "");
      this.className += " active-btn";
    });

  allSections.addEventListener("click", (e) => {
    // console.log(e.target);
    const id = e.target.dataset.id;

    // if has an id
    if (id) {
      secBtns.forEach((btn) => {
        btn.classList.remove("active");
      });

      e.target.classList.add("active");
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  const btn = document.querySelector(".theme-btn");
  btn.addEventListener("click", () => {
    let body = document.body;
    body.classList.toggle("light-mode");
  });
}
pageTransitions();

window.onload = () => {
  let ctrls = document.getElementsByClassName("control");
  for (let ctrl of ctrls) {
    let id = ctrl.dataset.id;
    id = id.charAt(0).toUpperCase() + id.slice(1);
    ctrl.title = id;
  }

  document.getElementById("blogs").remove();

  document.getElementsByClassName("control")[3].remove();
};
