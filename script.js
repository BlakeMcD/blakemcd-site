// DECLARE VARIABLES
let grandparentClicked = 0;
let parentClicked = 0;

const heading = document.querySelector("h1");

const grandparent = document.querySelector('.grandparent')

const parent1 = document.querySelector('.parent-1');
const parent2 = document.querySelector('.parent-2');
const parent3 = document.querySelector('.parent-3');
const parent4 = document.querySelector('.parent-4');

// CLICK ON GRANDPARENT

grandparent.addEventListener('click', () => {



})

// CLICK ON PARENT ICON
parent1.addEventListener('click', () => {

    //trigger animation
    if (parentClicked === 0) {
    parentClicked = 1;
    console.log("click registered"+`${parentClicked}`);
    heading.innerHTML="It's working!";
    parent1.classList.add("parent-1Activated");
    parent1.classList.remove("parent-1DisActivated");
    }
    else if (parentClicked === 2) {
        parent2.classList.add("parent-2DisActivated");
        parentClicked = 1;
        parent1.classList.add("parent-1Activated");
        parent1.classList.remove("parent-1DisActivated");
    }
    else if (parentClicked === 3) {
        parent3.classList.add("parent-3DisActivated");
        parentClicked = 1;
        parent1.classList.add("parent-1Activated");
        parent1.classList.remove("parent-1DisActivated");
    }
    else if (parentClicked === 4) {
        parent4.classList.add("parent-4DisActivated");
        parentClicked = 1;
        parent1.classList.add("parent-1Activated");
        parent1.classList.remove("parent-1DisActivated");
    }
    else {
        parentClicked = 0;
        console.log("click registered"+`${parentClicked}`);
        parent1.classList.remove("parent-1Activated");
        parent1.classList.add("parent-1DisActivated");
    }

    //create text
    let textSection = document.getElementById("textSection");
    textSection.innerHTML = "";

    let content = document.createElement("div")

    //header
    let contentHeader = document.createElement("h2")
    let contentHeaderText = document.createTextNode("About Me")
    contentHeader.appendChild(contentHeaderText);
    content.appendChild(contentHeader);

    //body
    let contentBody = document.createElement("p");
    let contentBodyText = document.createTextNode("I'm a real-life person");
    contentBody.appendChild(contentBodyText);
    content.appendChild(contentBody);

    textSection.appendChild(content);

})

parent2.addEventListener('click', () => {
    if (parentClicked === 0) {
    parentClicked = 2;
    console.log("click registered"+`${parentClicked}`);
    heading.innerHTML="It's working!";
    parent2.classList.add("parent-2Activated");
    parent2.classList.remove("parent-2DisActivated");
    }
    else if (parentClicked === 1) {
        parent1.classList.add("parent-1DisActivated");
        parentClicked = 2;
        parent2.classList.add("parent-2Activated");
        parent2.classList.remove("parent-2DisActivated");
    }
    else if (parentClicked === 3) {
        parent3.classList.add("parent-3DisActivated");
        parentClicked = 2;
        parent2.classList.add("parent-2Activated");
        parent2.classList.remove("parent-2DisActivated");
    }
    else if (parentClicked === 4) {
        parent4.classList.add("parent-4DisActivated");
        parentClicked = 2;
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
    if (parentClicked === 0) {
    parentClicked = 3;
    console.log("click registered"+`${parentClicked}`);
    heading.innerHTML="It's working!";
    parent3.classList.add("parent-3Activated");
    parent3.classList.remove("parent-3DisActivated");
    }
    else if (parentClicked === 1) {
        parent1.classList.add("parent-1DisActivated");
        parentClicked = 3;
        parent3.classList.add("parent-3Activated");
        parent3.classList.remove("parent-3DisActivated");
    }
    else if (parentClicked === 2) {
        parent2.classList.add("parent-2DisActivated");
        parentClicked = 3;
        parent3.classList.add("parent-3Activated");
        parent3.classList.remove("parent-3DisActivated");
    }
    else if (parentClicked === 4) {
        parent4.classList.add("parent-4DisActivated");
        parentClicked = 3;
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
    if (parentClicked === 0) {
    parentClicked = 4;
    console.log("click registered"+`${parentClicked}`);
    heading.innerHTML="It's working!";
    parent4.classList.add("parent-4Activated");
    parent4.classList.remove("parent-4DisActivated");
    }
    else if (parentClicked === 1) {
        parent1.classList.add("parent-1DisActivated");
        parentClicked = 4;
        parent4.classList.add("parent-4Activated");
        parent4.classList.remove("parent-4DisActivated");
    }
    else if (parentClicked === 2) {
        parent2.classList.add("parent-2DisActivated");
        parentClicked = 4;
        parent4.classList.add("parent-4Activated");
        parent4.classList.remove("parent-4DisActivated");
    }
    else if (parentClicked === 3) {
        parent3.classList.add("parent-3DisActivated");
        parentClicked = 4;
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