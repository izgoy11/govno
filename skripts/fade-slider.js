(function() {

    const slides = document.querySelectorAll ('.fade-slider__item');
    const activeClass = "fade-slider__item--visble";
    let index = 0;

    setInterval(function()  {
        slides[index].classList.remove(activeClass);
        index = index + 1;

        if (index + 1 > slides.length) {
            index = 0
        }

        slides[index].classList.add(activeClass)
    }, 5000);

}())