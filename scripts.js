//  Carousel, ma première approche : on affiche les elements qui se trouvent à partir de la seconde place  ( [1] ), 
// on parcourt le tableau en duplicant le premiere ou le dernier élément au début ou a la fin (direction que l'utilisateur choisi). 
// notes:
// !! la taille du tableau doit être au minimum de 3
// !! overflow sur le conteneur du slider, 
// !! les éléments doivent être contenu dans un autre conteneur à l'interieur avec une largeur proportionel à la largeur du conteneur parent.
// !! Définir le nombre d'élément  à afficher par default à l'aide d'une attribut en HTML ?.
// !! Prendre la distance de l'élément et l'utiliser lors du mouvement du slider.


let tabSliderElements = [];


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
    console.log(carousel);
});

