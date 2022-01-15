// DECLARE VARIABLES
let grandparentClicked = 0;
let parentClicked = 0;

let triggerQueue = false;
let queue = 0;

let clickable = true;

let textOffset = 25;

let parent1forward = false;
let parent2forward = false;
let parent3forward = false;
let parent4forward = false;

const heading = document.querySelector("h1");

const grandparent = document.querySelector('.grandparent')

const parent1 = document.querySelector('.parent-1');
const parent2 = document.querySelector('.parent-2');
const parent3 = document.querySelector('.parent-3');
const parent4 = document.querySelector('.parent-4');

const about = document.querySelector('.about');
const projects = document.querySelector('.projects');
const experience = document.querySelector('.experience');
const contact = document.querySelector('.contact');

const root = document.querySelector(':root');

about.style.visibility = "hidden";
projects.style.visibility = "hidden";
experience.style.visibility = "hidden";
contact.style.visibility = "hidden";

//height of box
let titleElement = document.querySelector(".catHeading");
let titleHeight = titleElement.clientHeight;

let textElement1 = document.querySelector(".catBody1");
let textHeight1 = textElement1.clientHeight;
let totalHeight1 = titleHeight + textHeight1 + textOffset;

let textElement2 = document.querySelector(".catBody2");
let textHeight2 = textElement2.clientHeight;
let totalHeight2 = titleHeight + textHeight2 + textOffset;

let textElement3 = document.querySelector(".catBody3");
let textHeight3 = textElement3.clientHeight;
let totalHeight3 = titleHeight + textHeight3 + textOffset;

let textElement4 = document.querySelector(".catBody4");
let textHeight4 = textElement4.clientHeight;
let totalHeight4 = titleHeight + textHeight4 + textOffset;



// CLICK ON GRANDPARENT

grandparent.addEventListener('click', () => {

})

// CLICK ON PARENT ICON - ADD & REMOVE CLASSES

//parent 1
parent1.addEventListener('click', () => {

    if (clickable === true) {

        clickable = false; 

        //trigger reverse animation if something already active
        if (parent1forward === true) {  
            parent1.classList.remove("parent-1Activated");
            parent1.classList.add("parent-1DisActivated");
            parent1forward = false;
        }
        else if (parent2forward === true) {
            parent2.classList.remove("parent-2Activated");
            parent2.classList.add("parent-2DisActivated");
            parent2forward = false;
            queue = 1;
        }
        else if (parent3forward === true) {
            parent3.classList.remove("parent-3Activated");
            parent3.classList.add("parent-3DisActivated");
            parent3forward = false;
            queue = 1;
        }
        else if (parent4forward === true) {
            parent4.classList.remove("parent-4Activated");
            parent4.classList.add("parent-4DisActivated");
            parent4forward = false;
            queue = 1;
        }
        else {  //everything is in base position - can begin animation
            
            //make text visible
            about.style.visibility = "visible";
            //trigger animation
            parent1.classList.add("parent-1Activated");
            parent1.classList.remove("parent-1DisActivated");
            parent1forward = true;

            //change height of box
            root.style.setProperty('--header_element_expanded_height1', `${totalHeight1}px`);
        }       
    }
})

//parent2
parent2.addEventListener('click', () => {

    if (clickable === true) {

        clickable = false; 

        //trigger reverse animation if something already active
        if (parent1forward === true) {  
            parent1.classList.remove("parent-1Activated");
            parent1.classList.add("parent-1DisActivated");
            parent1forward = false;
            queue = 2;
        }
        else if (parent2forward === true) {
            parent2.classList.remove("parent-2Activated");
            parent2.classList.add("parent-2DisActivated");
            parent2forward = false;
        }
        else if (parent3forward === true) {
            parent3.classList.remove("parent-3Activated");
            parent3.classList.add("parent-3DisActivated");
            parent3forward = false;
            queue = 2;
        }
        else if (parent4forward === true) {
            parent4.classList.remove("parent-4Activated");
            parent4.classList.add("parent-4DisActivated");
            parent4forward = false;
            queue = 2;
        }
        else {  //everything is in base position - can begin animation
            
            //make text visible
            projects.style.visibility = "visible";
            //trigger animation
            parent2.classList.add("parent-2Activated");
            parent2.classList.remove("parent-2DisActivated");
            parent2forward = true;

            //change height of box
            root.style.setProperty('--header_element_expanded_height2', `${totalHeight2}px`);
        }       
    }
})

//parent3
parent3.addEventListener('click', () => {

    if (clickable === true) {

        clickable = false; 

        //trigger reverse animation if something already active
        if (parent1forward === true) {  
            parent1.classList.remove("parent-1Activated");
            parent1.classList.add("parent-1DisActivated");
            parent1forward = false;
            queue = 3;
        }
        else if (parent2forward === true) {
            parent2.classList.remove("parent-2Activated");
            parent2.classList.add("parent-2DisActivated");
            parent2forward = false;
            queue = 3;
        }
        else if (parent3forward === true) {
            parent3.classList.remove("parent-3Activated");
            parent3.classList.add("parent-3DisActivated");
            parent3forward = false;
        }
        else if (parent4forward === true) {
            parent4.classList.remove("parent-4Activated");
            parent4.classList.add("parent-4DisActivated");
            parent4forward = false;
            queue = 3;
        }
        else {  //everything is in base position - can begin animation
            
            //make text visible
            experience.style.visibility = "visible";
            //trigger animation
            parent3.classList.add("parent-3Activated");
            parent3.classList.remove("parent-3DisActivated");
            parent3forward = true;

            //change height of box
            root.style.setProperty('--header_element_expanded_height3', `${totalHeight3}px`);
        }       
    }
})

//parent4
parent4.addEventListener('click', () => {

    if (clickable === true) {

        clickable = false; 

        //trigger reverse animation if something already active
        if (parent1forward === true) {  
            parent1.classList.remove("parent-1Activated");
            parent1.classList.add("parent-1DisActivated");
            parent1forward = false;
            queue = 4;
        }
        else if (parent2forward === true) {
            parent2.classList.remove("parent-2Activated");
            parent2.classList.add("parent-2DisActivated");
            parent2forward = false;
            queue = 4;
        }
        else if (parent3forward === true) {
            parent3.classList.remove("parent-3Activated");
            parent3.classList.add("parent-3DisActivated");
            parent3forward = false;
            queue = 4;
        }
        else if (parent4forward === true) {
            parent4.classList.remove("parent-4Activated");
            parent4.classList.add("parent-4DisActivated");
            parent4forward = false;
        }
        else {  //everything is in base position - can begin animation
            
            //make text visible
            contact.style.visibility = "visible";
            //trigger animation
            parent4.classList.add("parent-4Activated");
            parent4.classList.remove("parent-4DisActivated");
            parent4forward = true;

            //change height of box
            root.style.setProperty('--header_element_expanded_height4', `${totalHeight4}px`);
        }       
    }
})



// TRIGGERED ON ANIMATION END

//parent 1
parent1.addEventListener('animationend', () => {

    //make all text hidden again 
    if (parent1forward === false) {

        about.style.visibility = "hidden";
        projects.style.visibility = "hidden";
        experience.style.visibility = "hidden";
        contact.style.visibility = "hidden";
    }

    if (queue === 0) {
        clickable = true;
    }
    else { //check if something in queue
        if (queue === 1) {
            //make text visible
            about.style.visibility = "visible";
            //trigger animation
            parent1.classList.add("parent-1Activated");
            parent1.classList.remove("parent-1DisActivated");
            parent1forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height1', `${totalHeight1}px`);
        } else if (queue === 2) {
            //make text visible
            projects.style.visibility = "visible";
            //trigger animation
            parent2.classList.add("parent-2Activated");
            parent2.classList.remove("parent-2DisActivated");
            parent2forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height2', `${totalHeight2}px`);
        } else if (queue === 3) {
            //make text visible
            experience.style.visibility = "visible";
            //trigger animation
            parent3.classList.add("parent-3Activated");
            parent3.classList.remove("parent-3DisActivated");
            parent3forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height3', `${totalHeight3}px`);
        } else if (queue === 4) {
            //make text visible
            contact.style.visibility = "visible";
            //trigger animation
            parent4.classList.add("parent-4Activated");
            parent4.classList.remove("parent-4DisActivated");
            parent4forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height4', `${totalHeight4}px`);
        }
        //reset queue
        queue = 0;
        triggerQueue = false;
    } 
})

//parent 2
parent2.addEventListener('animationend', () => {

    //make all text hidden again 
    if (parent2forward === false) {

        about.style.visibility = "hidden";
        projects.style.visibility = "hidden";
        experience.style.visibility = "hidden";
        contact.style.visibility = "hidden";
    }

    if (queue === 0) {
        clickable = true;
    }
    else { //check if something in queue
        if (queue === 1) {
            //make text visible
            about.style.visibility = "visible";
            //trigger animation
            parent1.classList.add("parent-1Activated");
            parent1.classList.remove("parent-1DisActivated");
            parent1forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height1', `${totalHeight1}px`);
        } else if (queue === 2) {
            //make text visible
            projects.style.visibility = "visible";
            //trigger animation
            parent2.classList.add("parent-2Activated");
            parent2.classList.remove("parent-2DisActivated");
            parent2forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height2', `${totalHeight2}px`);
        } else if (queue === 3) {
            //make text visible
            experience.style.visibility = "visible";
            //trigger animation
            parent3.classList.add("parent-3Activated");
            parent3.classList.remove("parent-3DisActivated");
            parent3forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height3', `${totalHeight3}px`);
        } else if (queue === 4) {
            //make text visible
            contact.style.visibility = "visible";
            //trigger animation
            parent4.classList.add("parent-4Activated");
            parent4.classList.remove("parent-4DisActivated");
            parent4forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height4', `${totalHeight4}px`);
        }
        //reset queue
        queue = 0;
        triggerQueue = false;
    }
})

//parent 3
parent3.addEventListener('animationend', () => {

    //make all text hidden again 
    if (parent3forward === false) {

        about.style.visibility = "hidden";
        projects.style.visibility = "hidden";
        experience.style.visibility = "hidden";
        contact.style.visibility = "hidden";
    }

    if (queue === 0) {
        clickable = true;
    }
    else { //check if something in queue
        if (queue === 1) {
            //make text visible
            about.style.visibility = "visible";
            //trigger animation
            parent1.classList.add("parent-1Activated");
            parent1.classList.remove("parent-1DisActivated");
            parent1forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height1', `${totalHeight1}px`);
        } else if (queue === 2) {
            //make text visible
            projects.style.visibility = "visible";
            //trigger animation
            parent2.classList.add("parent-2Activated");
            parent2.classList.remove("parent-2DisActivated");
            parent2forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height2', `${totalHeight2}px`);
        } else if (queue === 3) {
            //make text visible
            experience.style.visibility = "visible";
            //trigger animation
            parent3.classList.add("parent-3Activated");
            parent3.classList.remove("parent-3DisActivated");
            parent3forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height3', `${totalHeight3}px`);
        } else if (queue === 4) {
            //make text visible
            contact.style.visibility = "visible";
            //trigger animation
            parent4.classList.add("parent-4Activated");
            parent4.classList.remove("parent-4DisActivated");
            parent4forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height4', `${totalHeight4}px`);
        }
        //reset queue
        queue = 0;
        triggerQueue = false;
    }
})

//parent 4
parent4.addEventListener('animationend', () => {

    //make all text hidden again 
    if (parent4forward === false) {

        about.style.visibility = "hidden";
        projects.style.visibility = "hidden";
        experience.style.visibility = "hidden";
        contact.style.visibility = "hidden";
    }

    if (queue === 0) {
        clickable = true;
    }
    else { //check if something in queue
        if (queue === 1) {
            //make text visible
            about.style.visibility = "visible";
            //trigger animation
            parent1.classList.add("parent-1Activated");
            parent1.classList.remove("parent-1DisActivated");
            parent1forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height1', `${totalHeight1}px`);
        } else if (queue === 2) {
            //make text visible
            projects.style.visibility = "visible";
            //trigger animation
            parent2.classList.add("parent-2Activated");
            parent2.classList.remove("parent-2DisActivated");
            parent2forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height2', `${totalHeight2}px`);
        } else if (queue === 3) {
            //make text visible
            experience.style.visibility = "visible";
            //trigger animation
            parent3.classList.add("parent-3Activated");
            parent3.classList.remove("parent-3DisActivated");
            parent3forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height3', `${totalHeight3}px`);
        } else if (queue === 4) {
            //make text visible
            contact.style.visibility = "visible";
            //trigger animation
            parent4.classList.add("parent-4Activated");
            parent4.classList.remove("parent-4DisActivated");
            parent4forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height4', `${totalHeight4}px`);
        }
        //reset queue
        queue = 0;
        triggerQueue = false;
    }
})

