//  Carousel, j'abondonne l'approche du tableau
// Je vais utiliser une variable index qui sera assossié à l'élément.
// !! overflow sur le conteneur du slider, 
// !! les éléments doivent être contenu dans un conteneur .block-carousel à l'interieur du conteneur parent .carousel.
// !! Prendre la distance de l'élément et l'utiliser lors du mouvement du slider.

// index va nous permettre d'incrémenter et connaitre la position du slider et sera sujet à des conditions.
let currentIndex = 0;

let nmbDisplayedElements = 0; // on peut récupérer le nombre d'élément affiché en prenant la taille du container et la taille du premier élément.

console.log(currentIndex);
function slideToRight(directionIsRight, nmbElements, nmbElementToDisplay) {
    console.log("currentIndex :", currentIndex);
    if (directionIsRight) {
        // on stop de count quand il y a déja les derniers élements affichés 
        if (currentIndex < (nmbElements + nmbDisplayedElements)) {
            currentIndex++;
        }
    } else {
        // on stop de count quand il y a déja les premiers élements affichés
        if (currentIndex > nmbDisplayedElements) {
            currentIndex--;
        }
    }
    console.log("currentIndex :", currentIndex);
    moveSlide();
}

function moveSlide() {
    //todo
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




    buttonSliderLeft.addEventListener('click', () => {
        console.log("left");
        slideToRight(false, nmbElements);


    });
    buttonSliderRight.addEventListener('click', () => {
        console.log("right");
        slideToRight(true, nmbElements);
    }
    );
    console.log(carousel);
}

);

