// DECLARE VARIABLES
let grandparentClicked = 0;
let parentClicked = 0;

let clickable = true;

let parent1forward = false;

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




// TRIGGERED ON ANIMATION END
parent1.addEventListener('animationend', () => {
    alert("Parent1 Animation has finished")

    clickable = true;

    //text dissapears on backward
    if (parent1forward === false) {
        if (parentClicked === 1) {
            about.style.visibility = "visible";
            projects.style.visibility = "hidden";
            experience.style.visibility = "hidden";
            contact.style.visibility = "hidden";
        }
        else if (parentClicked === 2) {
            about.style.visibility = "hidden";
            projects.style.visibility = "visible";
            experience.style.visibility = "hidden";
            contact.style.visibility = "hidden";
        }
        else if (parentClicked === 3) {
            about.style.visibility = "hidden";
            projects.style.visibility = "hidden";
            experience.style.visibility = "visible";
            contact.style.visibility = "hidden";
        }
        else if (parentClicked === 4) {
            about.style.visibility = "hidden";
            projects.style.visibility = "hidden";
            experience.style.visibility = "hidden";
            contact.style.visibility = "visible";
        }
        else {
            about.style.visibility = "hidden";
            projects.style.visibility = "hidden";
            experience.style.visibility = "hidden";
            contact.style.visibility = "hidden";
        }
    }  
})

// CLICK ON GRANDPARENT

grandparent.addEventListener('click', () => {

})

// CLICK ON PARENT ICON
parent1.addEventListener('click', () => {

    if (clickable === true) {

        clickable = false; 

        //trigger animation
        if (parentClicked === 0) {
        parentClicked = 1;
        console.log("click registered"+`${parentClicked}`);
        heading.innerHTML="It's working!";
        parent1.classList.add("parent-1Activated");
        parent1.classList.remove("parent-1DisActivated");
        parent1forward = true;
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
            parent1forward = false;
        };

        if (parent1forward === true) {
            if (parentClicked === 1) {
                about.style.visibility = "visible";
                projects.style.visibility = "hidden";
                experience.style.visibility = "hidden";
                contact.style.visibility = "hidden";
            }
            else if (parentClicked === 2) {
                about.style.visibility = "hidden";
                projects.style.visibility = "visible";
                experience.style.visibility = "hidden";
                contact.style.visibility = "hidden";
            }
            else if (parentClicked === 3) {
                about.style.visibility = "hidden";
                projects.style.visibility = "hidden";
                experience.style.visibility = "visible";
                contact.style.visibility = "hidden";
            }
            else if (parentClicked === 4) {
                about.style.visibility = "hidden";
                projects.style.visibility = "hidden";
                experience.style.visibility = "hidden";
                contact.style.visibility = "visible";
            }
            else {
                about.style.visibility = "hidden";
                projects.style.visibility = "hidden";
                experience.style.visibility = "hidden";
                contact.style.visibility = "hidden";
            }
        }
    }
})

// ADD & REMOVE CLASSES ON CLICK
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
    };

    if (parentClicked === 1) {
        about.style.visibility = "visible";
        projects.style.visibility = "hidden";
        experience.style.visibility = "hidden";
        contact.style.visibility = "hidden";
    }
    else if (parentClicked === 2) {
        about.style.visibility = "hidden";
        projects.style.visibility = "visible";
        experience.style.visibility = "hidden";
        contact.style.visibility = "hidden";
    }
    else if (parentClicked === 3) {
        about.style.visibility = "hidden";
        projects.style.visibility = "hidden";
        experience.style.visibility = "visible";
        contact.style.visibility = "hidden";
    }
    else if (parentClicked === 4) {
        about.style.visibility = "hidden";
        projects.style.visibility = "hidden";
        experience.style.visibility = "hidden";
        contact.style.visibility = "visible";
    }
    else {
        about.style.visibility = "hidden";
        projects.style.visibility = "hidden";
        experience.style.visibility = "hidden";
        contact.style.visibility = "hidden";
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
    };

    if (parentClicked === 1) {
        about.style.visibility = "visible";
        projects.style.visibility = "hidden";
        experience.style.visibility = "hidden";
        contact.style.visibility = "hidden";
    }
    else if (parentClicked === 2) {
        about.style.visibility = "hidden";
        projects.style.visibility = "visible";
        experience.style.visibility = "hidden";
        contact.style.visibility = "hidden";
    }
    else if (parentClicked === 3) {
        about.style.visibility = "hidden";
        projects.style.visibility = "hidden";
        experience.style.visibility = "visible";
        contact.style.visibility = "hidden";
    }
    else if (parentClicked === 4) {
        about.style.visibility = "hidden";
        projects.style.visibility = "hidden";
        experience.style.visibility = "hidden";
        contact.style.visibility = "visible";
    }
    else {
        about.style.visibility = "hidden";
        projects.style.visibility = "hidden";
        experience.style.visibility = "hidden";
        contact.style.visibility = "hidden";
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
    };

    if (parentClicked === 1) {
        about.style.visibility = "visible";
        projects.style.visibility = "hidden";
        experience.style.visibility = "hidden";
        contact.style.visibility = "hidden";
    }
    else if (parentClicked === 2) {
        about.style.visibility = "hidden";
        projects.style.visibility = "visible";
        experience.style.visibility = "hidden";
        contact.style.visibility = "hidden";
    }
    else if (parentClicked === 3) {
        about.style.visibility = "hidden";
        projects.style.visibility = "hidden";
        experience.style.visibility = "visible";
        contact.style.visibility = "hidden";
    }
    else if (parentClicked === 4) {
        about.style.visibility = "hidden";
        projects.style.visibility = "hidden";
        experience.style.visibility = "hidden";
        contact.style.visibility = "visible";
    }
    else {
        about.style.visibility = "hidden";
        projects.style.visibility = "hidden";
        experience.style.visibility = "hidden";
        contact.style.visibility = "hidden";
    }
})