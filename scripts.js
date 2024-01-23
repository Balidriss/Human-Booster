// Je vais utiliser une variable index qui sera assossié à l'élément.
// !! overflow sur le conteneur du slider, 
// !! les éléments doivent être contenu dans un conteneur .block-carousel à l'interieur du conteneur parent .carousel.
// !! Prendre la distance de l'élément et l'utiliser lors du mouvement du slider.

// index va nous permettre d'incrémenter et connaitre la position du slider et sera sujet à des conditions.

// on récupére tous éléments avec la class carousel et j'applique le script du click sur les boutons créés



const carousels = document.querySelectorAll(".carousel");

//J'ai fait en sorte que le script s'adapte si il y a plusieur carousel sur le page, 
//et est dépandant du nombre d'élément visible par l'utilisateur lors du chargement de la page.
// ===> !!!!! Le script ne prend en compte les tailles qu'au moment du chargement de la page.

for (const carousel of carousels) {
    createCarousel(carousel);
}
function createCarousel(container) {
    // index 0 est l'enfant direct du block-carousel dans carousel.
    let index = 0;
    // Je créé mes boutons pour chaque carousel et je les assigne
    const buttonSliderLeft = document.createElement('div');
    const buttonSliderRight = document.createElement('div');
    buttonSliderLeft.classList.add('slider-button');
    buttonSliderLeft.classList.add('slider-button-left');
    buttonSliderRight.classList.add('slider-button');
    buttonSliderRight.classList.add('slider-button-right');
    buttonSliderLeft.innerText = '<';
    buttonSliderRight.innerText = '>';
    container.parentNode.appendChild(buttonSliderLeft);
    container.parentNode.appendChild(buttonSliderRight);

    // nombre total d'éléments y compris les cachés
    const nmbElements = container.querySelectorAll('.block-carousel > *').length;
    buttonSliderLeft.addEventListener('click', () => {
        index = slideToRight(index, false, nmbElements, getNumberOfElementOnDisplay(container), container);
    });
    buttonSliderRight.addEventListener('click', () => {
        index = slideToRight(index, true, nmbElements, getNumberOfElementOnDisplay(container), container);
    }
    );
}





function slideToRight(currentIndex, directionIsRight, nmbElements, nmbDisplayedElements, container) {

    if (directionIsRight) {
        // on stop de count quand il y a déja les derniers élements affichés 
        if (currentIndex < nmbElements - nmbDisplayedElements) {
            currentIndex++;

        }
    } else {
        // on stop de decount quand index est déja a 0 ou inférieur.
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

