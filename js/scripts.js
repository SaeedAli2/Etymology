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

/*const helper functions for modal*/

const modal = document.getElementById("modalscreen");

const span = document.getElementsByClassName("exitmodal")[0];

/*modal onclick functions*/

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*form submission button usable after required field filled out*/

const contactusForm = document.querySelector(".contactusform");

contactusForm.addEventListener('submit', ev => {
    console.log(ev);
    modal.style.display = "block";
    ev.preventDefault();
    contactusForm.reset();
})

/*quotes api*/

async function API(url){
  const baseUrl = 'https://philosophy-quotes-api.glitch.me/';
  const response = await fetch(baseUrl + url);
  const data = await response.json();
  return data;
}

API('quotes').then(console.log);



//const firstQuote = document.getElementById("quote1");  

/*This works when commented out by changing the first quote when clicked on but does not use the obtained jsonData 
x = "hello";
var object, x;

firstQuote.onclick = function() {
    firstQuote.innerHTML = x; 
    
}*/




