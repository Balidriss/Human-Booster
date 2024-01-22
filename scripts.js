//  Carousel, j'abondonne l'approche du tableau
// Je vais utiliser une variable index qui sera assossié à l'élément.
// !! overflow sur le conteneur du slider, 
// !! les éléments doivent être contenu dans un conteneur .block-carousel à l'interieur du conteneur parent .carousel.
// !! Prendre la distance de l'élément et l'utiliser lors du mouvement du slider.


function slide(directionIsRight) {
    if (directionIsRight) {

    } else {

    }
}




document.querySelectorAll(".carousel").forEach(carousel => {

    // Je créé mes boutons pour chaque carousel et je les assigne
    const buttonSliderLeft = document.createElement('div');
    const buttonSliderRight = document.createElement('div');
    buttonSliderLeft.classList.add('slider-button');
    buttonSliderLeft.classList.add('slider-button-left');
    buttonSliderRight.classList.add('slider-button');
    buttonSliderRight.classList.add('slider-button-right');
    buttonSliderLeft.innerText = '<';
    buttonSliderRight.innerText = '>';
    carousel.appendChild(buttonSliderLeft);
    carousel.appendChild(buttonSliderRight);

    const nmbElements = carousel.querySelectorAll('.block-carousel > *').length;
    console.log(nmbElements);

    let currentIndex = 0;


    buttonSliderLeft.addEventListener('click', () => {
        console.log("left");
        slideToRight(true);


    });
    buttonSliderRight.addEventListener('click', () => {
        console.log("right");
        slideToRight(false);
    }
    );
    console.log(carousel);
}

);

