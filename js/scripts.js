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

API('quotes').then(
  data => {
    data.forEach(processQuote);
  }
)

function processQuote (item) {
  const element = document.createElement("li");
  element.textContent = item.quote + " " + "-" + " " + item.source; 
  const firstQuote = document.getElementById("quotes"); 
  firstQuote.appendChild(element);    
} 

function rotate() {
  const first = document.querySelector('#quotes li:first-child');
  if(first) {
    quotes.appendChild(first); 
    console.log("works");
  }
}

let pause = setInterval(rotate,7000);



/*window.onscroll = function scrollPastQuotes() {
  if (document.documentElement.scrollHeight > 813) 
    clearInterval(pause); 
   
  //else { 
    //pause = setInterval(rotate,1000);
   

  //}
  console.log(document.documentElement.scrollTop);    
}*/



