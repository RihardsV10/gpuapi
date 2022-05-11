function myFunction() {
    var dots = document.getElementById("k1");

    var moreText = document.getElementById("more");

    var btnText = document.getElementById("b1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Lasīt vairāk >>"; 
      moreText.style.display = "none";
    }
     else {
      dots.style.display = "none";
      btnText.innerHTML = "<< Lasīt mazāk"; 
      moreText.style.display = "inline";
    }
  }

  function myFunction2() {
    var dots2 = document.getElementById("k2");
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("b2");

    if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        btnText2.innerHTML = "Lasīt vairāk >>"; 
        moreText2.style.display = "none";
      }
       else {
        dots2.style.display = "none";
        btnText2.innerHTML = "<< Lasīt mazāk"; 
        moreText2.style.display = "inline";
      }
  }

  function myFunction3() {
    var dots3 = document.getElementById("k3");
    var moreText3 = document.getElementById("more3");
    var btnText3 = document.getElementById("b3");

    if (dots3.style.display === "none") {
        dots3.style.display = "inline";
        btnText3.innerHTML = "Lasīt vairāk >>"; 
        moreText3.style.display = "none";
      }
       else {
        dots3.style.display = "none";
        btnText3.innerHTML = "<< Lasīt mazāk"; 
        moreText3.style.display = "inline";
      }
  }
  
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }
  console.log("Darbs izpildīts, paldies ka skatijāties šo darbu!");