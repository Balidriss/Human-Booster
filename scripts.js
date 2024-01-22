//  Carousel, j'abondonne l'approche du tableau
// Je vais utiliser une variable index qui sera assossié à l'élément.
// !! overflow sur le conteneur du slider, 
// !! les éléments doivent être contenu dans un conteneur .block-carousel à l'interieur du conteneur parent .carousel.
// !! Prendre la distance de l'élément et l'utiliser lors du mouvement du slider.

// index va nous permettre d'incrémenter et connaitre la position du slider et sera sujet à des conditions.
// besoin de dissocier cette variable index des différents carousels
let index = 0;

function slideToRight(currentIndex, directionIsRight, nmbElements, nmbDisplayedElements, container) {
    console.log("currentIndex :", currentIndex);
    if (directionIsRight) {
        // on stop de count quand il y a déja les derniers élements affichés 
        if (currentIndex < nmbElements - nmbDisplayedElements) {
            currentIndex++;

        }
    } else {
        // on stop de count quand il y a déja les premiers élements affichés
        if (currentIndex > nmbDisplayedElements - 1) {
            currentIndex--;

        }
    }
    moveSlide(currentIndex, container, 100 / nmbDisplayedElements);
    console.log("currentIndex :", currentIndex);
    return currentIndex;

}

// j'assume que les éléments ont tous la même taille
function getNumberOfElementDisplayed(container) {
    const containerSize = container.offsetWidth;
    const blockContainer = container.firstElementChild;
    const elementSize = blockContainer.firstElementChild.offsetWidth;
    console.log("fonction get number to display", containerSize, elementSize, containerSize / elementSize)
    return Math.trunc(nmbElementDisplayed = containerSize / elementSize);
}
function moveSlide(index, container, widthPercentElement) {

    console.log("movement", widthPercentElement);
    container.querySelector('.block-carousel').style.transform = 'translateX(' + widthPercentElement * -index + '%)';

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
    getNumberOfElementDisplayed(carousel);



    buttonSliderLeft.addEventListener('click', () => {
        console.log("left");
        index = slideToRight(index, false, nmbElements, getNumberOfElementDisplayed(carousel), carousel);


    });
    buttonSliderRight.addEventListener('click', () => {
        console.log("right");
        index = slideToRight(index, true, nmbElements, getNumberOfElementDisplayed(carousel), carousel);
    }
    );
    console.log(carousel);
}

);

