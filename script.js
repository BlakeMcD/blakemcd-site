// DECLARE VARIABLES
let parentClicked = 0;

const heading = document.querySelector("h1");

const parent1 = document.querySelector('.parent-1');
const parent2 = document.querySelector('.parent-2');
const parent3 = document.querySelector('.parent-3');
const parent4 = document.querySelector('.parent-4');

// CLICK ON PARENT ICON
parent1.addEventListener('click', () => {
    if (parentClicked !== 1) {
    parentClicked = 1;
    console.log("click registered"+`${parentClicked}`);
    heading.innerHTML="It's working!";
    parent1.classList.add("parent-1Activated");
    parent1.classList.remove("parent-1DisActivated");
    }
    else {
        parentClicked = 0;
        console.log("click registered"+`${parentClicked}`);
        parent1.classList.remove("parent-1Activated");
        parent1.classList.add("parent-1DisActivated");
    }
})