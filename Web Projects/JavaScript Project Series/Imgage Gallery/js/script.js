var compo = document.querySelectorAll(".image-gallery__images--image");
compo.forEach(image => { 
    image.addEventListener('click', displayImage);
});

function displayImage(e){
    var imageSrc = e.target.getAttribute('src');
    document.querySelector(".image-gallery__main--img").setAttribute('src', imageSrc);
}