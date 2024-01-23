// Je vais utiliser une variable index qui sera assossié à l'élément.
// !! overflow sur le conteneur du slider, 
// !! les éléments doivent être contenu dans un conteneur .block-carousel à l'interieur du conteneur parent .carousel.
// !! Prendre la distance de l'élément et l'utiliser lors du mouvement du slider.

// index va nous permettre d'incrémenter et connaitre la position du slider et sera sujet à des conditions.
// besoin de dissocier cette variable index des différents carousels
let index = 0;

function slideToRight(currentIndex, directionIsRight, nmbElements, nmbDisplayedElements, container) {

    if (directionIsRight) {
        // on stop de count quand il y a déja les derniers élements affichés 
        if (currentIndex < nmbElements - nmbDisplayedElements) {
            currentIndex++;

        }
    } else {
        // on stop de count quand il y a déja les premiers élements affichés
        if (currentIndex > 0) {
            currentIndex--;

        }
    }
    moveSlide(currentIndex, container, distanceToSlide(container));
    return currentIndex;

}

// j'assume que les éléments ont tous la même taille
function distanceToSlide(container) {

    const containerSize = container.offsetWidth;
    return 100 / Math.round(containerSize / getFirstElementTotalSize(container));
}
function moveSlide(index, container, widthPercentElement) {

    container.querySelector('.block-carousel').style.transform = 'translateX(' + widthPercentElement * -index + '%)';

}

//on calcule la largeur en prenant compte les margins
function getFirstElementTotalSize(container) {
    const containerSize = container.offsetWidth;
    const blockContainer = container.firstElementChild;
    // premier element du carousel
    const firstElement = blockContainer.firstElementChild;
    firstElementComputedStyle = window.getComputedStyle(firstElement);
    return elementSize = parseFloat(firstElementComputedStyle.width) +
        parseFloat(firstElementComputedStyle.marginRight);

}
// on récupére le nombre d'élément supposé être en vue dans le conteneur
function getNumberOfElementOnDisplay(container) {
    return container.offsetWidth / getFirstElementTotalSize(container);
}

// on récupére tous éléments avec la class carousel et j'applique le script du click sur les boutons créés
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
    carousel.parentNode.appendChild(buttonSliderLeft);
    carousel.parentNode.appendChild(buttonSliderRight);

    // nombre total d'éléments y compris les cachés
    const nmbElements = carousel.querySelectorAll('.block-carousel > *').length;
    buttonSliderLeft.addEventListener('click', () => {
        index = slideToRight(index, false, nmbElements, getNumberOfElementOnDisplay(carousel), carousel);
    });
    buttonSliderRight.addEventListener('click', () => {
        index = slideToRight(index, true, nmbElements, getNumberOfElementOnDisplay(carousel), carousel);
    }
    );
}

);

