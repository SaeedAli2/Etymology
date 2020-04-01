"use strict";

/*scroll to top of page functions*/

const scrollUp = document.getElementById ("btnscroll");

 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
    if (document.documentElement.scrollTop > 50) {
      scrollUp.style.display = "block";
    } else {
      scrollUp.style.display = "none";
    }
  }

  scrollUp.addEventListener("click", function () {
    window.scrollTo(0, 0);
  }
) 

/*const helper functions for form*/

const contactusForm = document.getElementsByClassName("contactusform");

const userName = document.getElementById("name");

const emailAddress = document.getElementById("email");

const bookGenre = document.getElementById("genre");

const enterDetails = document.getElementById("enterdetails")

const btn = document.getElementById("contactusbutton");

/*const helper functions for modal*/

const modal = document.getElementById("modalscreen");

const span = document.getElementsByClassName("exitmodal")[0];

/*modal onclick functions*/

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





