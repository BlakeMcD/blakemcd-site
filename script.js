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

parent2.addEventListener('click', () => {
    if (parentClicked !== 2) {
    parentClicked = 2;
    console.log("click registered"+`${parentClicked}`);
    heading.innerHTML="It's working!";
    parent2.classList.add("parent-2Activated");
    parent2.classList.remove("parent-2DisActivated");
    }
    else {
        parentClicked = 0;
        console.log("click registered"+`${parentClicked}`);
        parent2.classList.remove("parent-2Activated");
        parent2.classList.add("parent-2DisActivated");
    }
})

parent3.addEventListener('click', () => {
    if (parentClicked !== 2) {
    parentClicked = 2;
    console.log("click registered"+`${parentClicked}`);
    heading.innerHTML="It's working!";
    parent3.classList.add("parent-3Activated");
    parent3.classList.remove("parent-3DisActivated");
    }
    else {
        parentClicked = 0;
        console.log("click registered"+`${parentClicked}`);
        parent3.classList.remove("parent-3Activated");
        parent3.classList.add("parent-3DisActivated");
    }
})

parent4.addEventListener('click', () => {
    if (parentClicked !== 2) {
    parentClicked = 2;
    console.log("click registered"+`${parentClicked}`);
    heading.innerHTML="It's working!";
    parent4.classList.add("parent-4Activated");
    parent4.classList.remove("parent-4DisActivated");
    }
    else {
        parentClicked = 0;
        console.log("click registered"+`${parentClicked}`);
        parent4.classList.remove("parent-4Activated");
        parent4.classList.add("parent-4DisActivated");
    }
})