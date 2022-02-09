let toggleButton= document.getElementsByClassName('toggle-button')[0];
let navbarlinks= document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click',() => {
    navbarlinks.classList.toggle('active')
});

let salon={
    name:"The Pet Salon",
    address:{
        street:"3445 Vine St, Hollywood, CA",
        ZIPcode:"33023",
        number:"310-555-0089"
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[
        {
            name:"Coco",
            age:3,
            gender:"female",
            breed:"Poodle",
            service:"Grooming",
            owner:"Ryhan",
            phone:"555-555-555"
        },
        {
            name:"Bear",
            age:2,
            gender:"female",
            breed:"Aussie Shepard",
            service:"Grooming",
            owner:"Mike",
            phone:"555-555-555"
        },
        {
            name:"Captain",
            age:8,
            gender:"Male",
            breed:"Husky",
            service:"Grooming",
            owner:"Justin",
            phone:"555-555-555"
        },
        {
            name:"Lexi",
            age:5,
            gender:"female",
            breed:"Husky",
            service:"Grooming",
            owner:"James",
            phone:"555-555-555"
        }
    ]
}
console.log(salon.pets);

function displayPetNames(){
    for(let i=0;i<4; i++){
        console.log(salon.pets[i].name);
    }

}
displayPetNames();

alert(salon.pets.length);

function Pet(name,age,gender,breed,service) {
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}



let petName= document.getElementById("txtName");
let petAge= document.getElementById("txtAge");
let petGender= document.getElementById("txtGender");
let petBreed= document.getElementById("txtBreed");
let petService= document.getElementById("selService");

function register() {
    console.log("Register");
    let thePet= new Pet(petName.value,petAge.value,petGender.value,petBreed.value,petService.value);
    console.log(thePet);
    salon.pets.push(thePet);
    console.log(salon.pets);
    showPetsCards();
    alert("You registered a new pet!");
}

function displayPets() {
    
}

function showPetsCards(){
    document.getElementById("petList").innerHTML="";

    for(let i=0;i<salon.pets.length;i++){
        createCard(salon.pets[i]);
        document.getElementById("petList").innerHTML += createCard(salon.pets[i]);
    }
}

function createCard(pet){
    return `
        <div class="pet-card">
            <h3>${pet.name}</h3>
            <p> Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Service: ${pet.service}</p>
            
        </div>
    `;

}
function init(){
    salon.pets.push();
    showPetsCards();
}
window.onload=init;