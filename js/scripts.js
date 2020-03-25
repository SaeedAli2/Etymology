
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


  