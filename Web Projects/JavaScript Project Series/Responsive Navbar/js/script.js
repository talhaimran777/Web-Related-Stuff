document.querySelector(".hamburger").addEventListener('click', showMenu);

function showMenu(){
    let x = document.getElementById("drop-down");
    x.classList.toggle("toggle-menu");
}
































/* let Person = function(){
    ob = {};
    ob.name = {
        firstName: "Talha",
        lastName: "Imran",
    };

    ob.bio = function(){
        console.log("My name is " + this.name.firstName + " " + this.name.lastName);
    }
    return ob;
};

Person.prototype.func = function(){
    console.log("My name is " + this.name.firstName + " " + this.name.lastName);
}

let p1 = Person();
console.log(p1);
 */















/* function Person(firstName, lastName, age, gender){
    this.name = {
        firstName: firstName,
        lastName: lastName,

        displayName: function(){
            console.log(firstName + " " + lastName);
        }
    }
    this.age = age;
    this.gender = gender;
    this.bio =  function(){
        console.log("My name is "+ this.name + " and my age is " + this.age);
    }
}

function Teacher(firstName, lastName, age, gender, subject){
    Person.call(this, firstName, lastName, age, gender, subject);
    this.subject = subject;
}

let p1 = new Person("Talha", "Imran", 22, 'male');


Teacher.prototype = Object.create(Person.prototype);
Object.defineProperty(Teacher.prototype, 'constructor', { 
    value: Teacher, 
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true });

let t1 = new Teacher("Hassaan", "Farooqui", 27, "male", "C++");
t1.name.displayName(); */
//console.log(Teacher.prototype.constructor);
// This is one way of declaring objects
/* let person = {};
person.name = "Talha Imran";
person.gender = "Male";
person.hobbies = {
    Education: "Coding",
    Sports: "Cricket",
    General: "Singing"
}
person.bio = function(){
    console.log("My Name is " +this + " and my gender is "+ person.gender + " and my hobby is " + person.hobbies.Sports);
    console.log("Using Brackets Notation My Name is "+ person['name']+ " and my gender is " + person["gender"]);
}
person['hobbies']['Sports'] = "Football";
person['name'] = "Lionel Messi";
person['age'] = 22;
person.bio(); */










/*//alert("Wellcome To JS");
// Object Oriented Programing

/*
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log("Drawing Circle");
    }
};

// Factory Function
function createCircle(radius){
    return({
        radius,
        draw: function(){
            console.log("Drawing The Cricle Through Factory Funcion!");
        }
    });
}

var circle = createCircle(2);
console.log("radius = "+circle.radius);
circle.draw();

// Constructor Function

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("Drawing Circle through Constructor Function");
    }
}

var circle1 = new Circle(1);
var circle2 = new Circle(2);
var circle3 = new Circle(3);
console.log(circle1);
console.log(circle2);
 console.log(circle3); */


