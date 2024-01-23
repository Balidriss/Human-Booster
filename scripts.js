// on récupére tous éléments avec la class carousel et j'applique le script du click sur les boutons créés
const carousels = document.querySelectorAll(".carousel");

//J'ai fait en sorte que le script s'adapte si il y a plusieurs carousels sur le page, 
//et est indépendant du nombre d'élément visible par l'utilisateur lors du chargement de la page.
// ===> !!!!! Le script ne prend en compte les tailles que au moment du chargement de la page.

// pour chaque élément avec la class carousel que mon querySelector à trouvé on appel la fonction qui mpermet de créer un carousel.
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
    buttonSliderLeft.classList.add('btn-red');
    buttonSliderRight.classList.add('slider-button');
    buttonSliderRight.classList.add('slider-button-right');
    buttonSliderRight.classList.add('btn-red');
    buttonSliderLeft.innerText = '<';
    buttonSliderRight.innerText = '>';
    container.parentNode.appendChild(buttonSliderLeft);
    container.parentNode.appendChild(buttonSliderRight);

    // nombre total d'éléments y compris les cachés
    const nmbElements = container.querySelectorAll('.block-carousel > *').length;

    // on montre le bouton de gauch  transparent can il est désactivé
    buttonDisable(buttonSliderLeft);

    //on met un evenement sur les elements bouton qu'on crée. au click on appel la fonction associer avec les paramètres adapté 
    buttonSliderLeft.addEventListener('click', () => {
        index = slideToRight(index, false, nmbElements, container);
    });
    buttonSliderRight.addEventListener('click', () => {
        index = slideToRight(index, true, nmbElements, container);
    }
    );
}

function slideToRight(currentIndex, directionIsRight, nmbElements, container) {

    //on récupére les boutons dans une variable
    const leftButton = container.parentNode.querySelector('.slider-button-left');
    const rightButton = container.parentNode.querySelector('.slider-button-right');

    if (directionIsRight) {
        // on stop de count quand il y a déja les derniers élements affichés 
        if (currentIndex < nmbElements - getNumberOfElementOnDisplay(container)) {
            currentIndex++;
            // si index est au maximum on change le style du bouton pour montrer que c'est la fin
            if (currentIndex >= (nmbElements - getNumberOfElementOnDisplay(container))) {
                buttonDisable(rightButton);
            } else {
                // sinon on fait en sorte que le bouton opposé est le bon style.
                buttonEnable(leftButton);
            }
        }
        // on stop de decount quand index est déja a 0 ou inférieur.
    } else {
        if (currentIndex > 0) {
            currentIndex--;
            // si l'index devient 0 on applique la classe de style qui montre le bouton transparent
            if (currentIndex == 0) {
                buttonDisable(leftButton);

            } else {
                // sinon on fait en sorte que le bouton opposé est le bon style.
                buttonEnable(rightButton);
            }
        }
    }

    // on appel la fonction qui gère le déplacement
    moveSlide(currentIndex, container, distanceToSlide(container));
    // je renvoie le nouvel index
    return currentIndex;
}

// changer d'apparence des bouton en ajoutant ou en enlevant des class
function buttonDisable(button) {
    button.classList.add('btn-disable');
    button.classList.remove('btn-red');
}
function buttonEnable(button) {
    button.classList.remove('btn-disable');
    button.classList.add('btn-red');
}

// j'assume que les éléments ont tous la même taille
function distanceToSlide(container) {

    const containerSize = container.offsetWidth;
    return 100 / Math.round(containerSize / getFirstElementTotalSize(container));
}
function moveSlide(index, container, widthPercentElement) {

    // le pourcentage applique par translate est proportionel a notre index, associer avec la transition dans la class on obtient un mouvement fluid.
    container.querySelector('.block-carousel').style.transform = 'translateX(' + widthPercentElement * -index + '%)';

}

//on calcule la largeur en prenant compte les margins
function getFirstElementTotalSize(container) {
    const containerSize = container.offsetWidth;
    // premier element du carousel
    const blockContainer = container.firstElementChild;

    const firstElement = blockContainer.firstElementChild;
    const firstElementComputedStyle = window.getComputedStyle(firstElement);
    return elementSize = parseFloat(firstElementComputedStyle.width) +
        parseFloat(firstElementComputedStyle.marginRight);

}
// on récupére le nombre d'élément visible par l'utilisateur en prenant la taille du container .carousel
function getNumberOfElementOnDisplay(container) {
    return container.offsetWidth / getFirstElementTotalSize(container);
}

