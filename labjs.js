function drop() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbutton')){

    var dropdowns = document.getElementsByClassName("dropcontent");
    var d;
    for (d=0;d<dropdowns.length;d++) {
      var open = dropdowns[d];
      if (open.classList.contains('show')) {
        open.classList.remove('show');
      }
    }
  }
}

var slideIndex = 1;
showSlides(slideIndex)

function addSlides(i) {
  showSlides(slideIndex+=i)
}

function currentSlide(i) {
  showSlides(slideIndex = i)
}

function showSlides(i) {
  var d;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (i > slides.length) {
    slideIndex=1
  }
  if (i < 1) {
    slideIndex = slides.length
  }
  for (d = 0; d < slides.length; d++) {
    slides[d].style.display = "none"
  }
  for (d = 0; d < dots.length; d++) {
    dots[d].className = dots[d].className.replace(" active","")
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
