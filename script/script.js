let slideIndexy = 1;
showSlides(slideIndexy);

function plusSlides(n) {
    showSlides(slideIndexy += n);
}

function currentSlide(n){
    showSlides (slideIndexy = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("bullet");
    if (n > slides.length) {slideIndexy = 1}
    if (n < 1) {slideIndexy = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className.replace("active","");
    }
    slides[slideIndexy-1].style.display = "block";
    dots[slideIndexy-1].className =+ "active";
}

