document.getElementById("review-section__container__btn--2").addEventListener('click', nextReview);
document.getElementById("review-section__container__btn--1").addEventListener('click', previousReview);
document.getElementById("randBtn").addEventListener('click', randomReview);

let currentReview = 0;
let reviews = [
    {img: "../Reviews/img/img-0.jpeg", name: "Susan Smith", job: "Web Developer", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro, praesentium, voluptate distinctio magni dignissimos tenetur et ipsa quae, suscipit doloremque rem impedit temporibus iure incidunt vero atque iusto deleniti."},
    {img: "../Reviews/img/img-1.jpg", name: "Leonardo Di Caprio", job: "CSS Developer", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro, praesentium, voluptate distinctio magni dignissimos tenetur et ipsa quae, suscipit doloremque rem impedit temporibus iure incidunt vero atque iusto deleniti."},
    {img: "../Reviews/img/img-2.jpg", name: "Jaden Smith", job: "Python Developer", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro, praesentium, voluptate distinctio magni dignissimos tenetur et ipsa quae, suscipit doloremque rem impedit temporibus iure incidunt vero atque iusto deleniti."},
    {img: "../Reviews/img/img-3.jpg", name: "Steve Jobs", job: "C++ Developer", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro, praesentium, voluptate distinctio magni dignissimos tenetur et ipsa quae, suscipit doloremque rem impedit temporibus iure incidunt vero atque iusto deleniti."},
    {img: "../Reviews/img/img-4.jpg", name: "Lucy Job", job: "Java Developer", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro, praesentium, voluptate distinctio magni dignissimos tenetur et ipsa quae, suscipit doloremque rem impedit temporibus iure incidunt vero atque iusto deleniti."},
    {img: "../Reviews/img/img-5.jpg", name: "Mahar Zohaib", job: "C# Specialist", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro, praesentium, voluptate distinctio magni dignissimos tenetur et ipsa quae, suscipit doloremque rem impedit temporibus iure incidunt vero atque iusto deleniti."}
];
function defaultReview(currentReview){
    let img = reviews[currentReview].img;
    let name = reviews[currentReview].name;
    let job = reviews[currentReview].job;
    let review = reviews[currentReview].review;

    let x = document.getElementById("img");
    x.setAttribute('src', reviews[currentReview].img);

    let y = document.getElementById("name");
    y.textContent = reviews[currentReview].name;

    let z = document.getElementById("job");
    z.textContent = reviews[currentReview].job;

    let w = document.getElementById("review");
    w.textContent = reviews[currentReview].review;
}
defaultReview(currentReview);


/* let next = document.getElementById("review-section__container__btn--1");
let prev = document.getElementById("review-section__container__btn--2");
next.addEventListener("click", nextReview);
console.log(next);
console.log(prev); */

function previousReview(){
    if(currentReview == 0){
        return;
    }
    else{
        currentReview--;
        let img = reviews[currentReview].img;
        let name = reviews[currentReview].name;
        let job = reviews[currentReview].job;
        let review = reviews[currentReview].review;
    
        let x = document.getElementById("img");
        x.setAttribute('src', reviews[currentReview].img);
        
        let y = document.getElementById("name");
        y.textContent = reviews[currentReview].name;
    
        let z = document.getElementById("job");
        z.textContent = reviews[currentReview].job;
    
        let w = document.getElementById("review");
        w.textContent = reviews[currentReview].review;
    }
} 

 function nextReview(){
    currentReview++;
    let img = reviews[currentReview].img;
    let name = reviews[currentReview].name;
    let job = reviews[currentReview].job;
    let review = reviews[currentReview].review;

    let x = document.getElementById("img");
    x.setAttribute('src', reviews[currentReview].img);

    let y = document.getElementById("name");
    y.textContent = reviews[currentReview].name;

    let z = document.getElementById("job");
    z.textContent = reviews[currentReview].job;

    let w = document.getElementById("review");
    w.textContent = reviews[currentReview].review;
} 

function randomReview(){
    let randNo = Math.floor(Math.random()*reviews.length);
    currentReview = randNo;
    defaultReview(currentReview);
}