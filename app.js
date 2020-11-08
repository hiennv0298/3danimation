// Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// Items
const title = document.querySelector(".title");
const troll = document.querySelector(".troll img");
const readmore = document.querySelector(".readmore button");
const description = document.querySelector(".info h3");
const faces = document.querySelector(".faces");


// Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    // Popout
    title.style.transform = `translateZ(150px)`;
    troll.style.transform = `translateZ(200px) rotateZ(-45deg)`;
    description.style.transform = `translateZ(125px)`;
    faces.style.transform = `translateZ(100px)`;
    readmore.style.transform = `translateZ(75px)`;

});

// Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotate`
    // Popback
    title.style.transform = "translateZ(0px)";
    troll.style.transform = `translateZ(0px) rotateZ(0deg)`;
    description.style.transform = `translateZ(0px)`;
    faces.style.transform = `translateZ(0px)`;
    readmore.style.transform = `translateZ(0px)`;
})