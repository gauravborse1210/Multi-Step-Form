"use strict";

const allForms = document.querySelectorAll("form");
const allInputs = document.querySelectorAll("input");
const allNxtButtons = document.querySelectorAll(".nxt-btn");
const allPrevButtons = document.querySelectorAll(".prev-btn");
console.log(allNxtButtons);

let curIndex = 0;

function showSlide(index) {
  allForms.forEach((form, i) => {
    form.classList.add("hidden");
  });
  allForms[index].classList.remove("hidden");
}

//Move to next slide
function nextSlide() {
  curIndex = (curIndex + 1) % allForms.length;
  showSlide(curIndex);
}

// Move to previous slide
function prevSlide() {
  curIndex = curIndex === 0 ? allForms.length - 1 : curIndex - 1;
  showSlide(curIndex);
}

allNxtButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const currBtnParent = e.target.parentElement;
    console.log(currBtnParent);

    const currForm = currBtnParent.closest("form");
    console.log(currForm);

    const currInputs = currForm.querySelectorAll("input");
    console.log(currInputs);

    currInputs.forEach((inp) => {
      //For filling red color in input if inputs are empty
      if (inp.value.trim() === "") inp.style.backgroundColor = "#f8d7da";

      //For removing red color in input if inputs are not empty
      if (e.target !== inp && inp.value.trim() !== "")
        inp.style.backgroundColor = "";
    });

    nextSlide();
  });
});

allPrevButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    prevSlide();
  });
});

