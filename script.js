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

const labelAppear = 0.2;
const labelDisappear = 5;

const footerHeight1 = 400 + (4 * ((20/100)*100));
// root.style.setProperty('--footer_top', `${footerHeight1}px`);
let footerHeight2 = footerHeight1;

const heading = document.querySelector("h1");

const grandparent = document.querySelector('.grandparent');

const parent1 = document.querySelector('.parent-1');
const parent2 = document.querySelector('.parent-2');
const parent3 = document.querySelector('.parent-3');
const parent4 = document.querySelector('.parent-4');

const about = document.querySelector('.about');
const projects = document.querySelector('.projects');
const experience = document.querySelector('.experience');
const contact = document.querySelector('.contact');

const root = document.querySelector(':root');

const label1 = parent1.querySelector('.parentLabelFront');
const label2 = parent2.querySelector('.parentLabelFront');
const label3 = parent3.querySelector('.parentLabelFront');
const label4 = parent4.querySelector('.parentLabelFront');

about.style.visibility = "hidden";
projects.style.visibility = "hidden";
experience.style.visibility = "hidden";
contact.style.visibility = "hidden";

//height of box
let titleElement = document.querySelector(".catHeading");
let titleHeight = titleElement.clientHeight;

let textElement1 = document.querySelector(".catBody1");
let textHeight1 = textElement1.clientHeight;
let totalHeight1 = textHeight1 + textOffset;

let textElement3 = document.querySelector(".catBody3");
let textHeight3 = textElement3.clientHeight;
let totalHeight3 = textHeight3 + textOffset;

let textElement4 = document.querySelector(".catBody4");
let textHeight4 = textElement4.clientHeight;
let totalHeight4 = textHeight4 + textOffset;

let topSectionExtra = 100;
let topSection = document.querySelector(".topSection");
let topSectionHeight = topSection.clientHeight + topSectionExtra;

// //textElement2 Heights need the images to be loaded
let textElement2 = document.querySelector(".catBody2");
let textHeight2 = textElement2.clientHeight;
let totalHeight2 = textHeight2 + textOffset;

let imgs = document.images,
    len = imgs.length,
    counter = 0;

[].forEach.call( imgs, function( img ) {
    if(img.complete)
      incrementCounter();
    else
      img.addEventListener( 'load', incrementCounter, false );
} );

function incrementCounter() {
    counter++;
    if ( counter === len ) {
        console.log( 'All images loaded!');
        textElement2 = document.querySelector(".catBody2");
        textHeight2 = textElement2.clientHeight;
        totalHeight2 = textHeight2 + textOffset;
    }
}

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
            const label1 = parent1.querySelector('.parentLabelFront');
            //label transition disappear
            root.style.setProperty('--transition_time', `${labelDisappear}s`);
            label1.classList.remove("transition");
        }
        else if (parent2forward === true) {
            parent2.classList.remove("parent-2Activated");
            parent2.classList.add("parent-2DisActivated");
            parent2forward = false;
            queue = 1;
            //label transition disappear
            root.style.setProperty('--transition_time', `${labelDisappear}s`);
            label2.classList.remove("transition");
        }
        else if (parent3forward === true) {
            parent3.classList.remove("parent-3Activated");
            parent3.classList.add("parent-3DisActivated");
            parent3forward = false;
            queue = 1;
            //label transition disappear
            root.style.setProperty('--transition_time', `${labelDisappear}s`);
            label3.classList.remove("transition");
        }
        else if (parent4forward === true) {
            parent4.classList.remove("parent-4Activated");
            parent4.classList.add("parent-4DisActivated");
            parent4forward = false;
            queue = 1;
            //label transition disappear
            root.style.setProperty('--transition_time', `${labelDisappear}s`);
            label4.classList.remove("transition");
        }
        else {  //everything is in base position - can begin animation
            
            //label transition appear
            root.style.setProperty('--transition_time', `${labelAppear}s`);
            label1.classList.add("transition");

            //make text visible
            about.style.visibility = "visible";
            //trigger animation
            parent1.classList.add("parent-1Activated");
            parent1.classList.remove("parent-1DisActivated");
            parent1forward = true;

            //change height of box
            root.style.setProperty('--header_element_expanded_height1', `${totalHeight1}px`);
            //change height of footer
            footerHeightFunction(totalHeight1);
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
            //label transition disappear
            root.style.setProperty('--transition_time', `${labelDisappear}s`);
            label1.classList.remove("transition");
        }
        else if (parent2forward === true) {
            parent2.classList.remove("parent-2Activated");
            parent2.classList.add("parent-2DisActivated");
            parent2forward = false;
            //label transition disappear
            root.style.setProperty('--transition_time', `${labelDisappear}s`);
            label2.classList.remove("transition");
        }
        else if (parent3forward === true) {
            parent3.classList.remove("parent-3Activated");
            parent3.classList.add("parent-3DisActivated");
            parent3forward = false;
            queue = 2;
            //label transition disappear
            root.style.setProperty('--transition_time', `${labelDisappear}s`);
            label3.classList.remove("transition");
        }
        else if (parent4forward === true) {
            parent4.classList.remove("parent-4Activated");
            parent4.classList.add("parent-4DisActivated");
            parent4forward = false;
            queue = 2;
            //label transition disappear
            root.style.setProperty('--transition_time', `${labelDisappear}s`);
            label4.classList.remove("transition");
        }
        else {  //everything is in base position - can begin animation
            
            //label transition appear
            root.style.setProperty('--transition_time', `${labelAppear}s`);
            label2.classList.add("transition");

            //make text visible
            projects.style.visibility = "visible";
            //trigger animation
            parent2.classList.add("parent-2Activated");
            parent2.classList.remove("parent-2DisActivated");
            parent2forward = true;

            //change height of box
            root.style.setProperty('--header_element_expanded_height2', `${totalHeight2}px`);
            //change height of footer
            footerHeightFunction(totalHeight2);

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
            //label transition disappear
            root.style.setProperty('--transition_time', `${labelDisappear}s`);
            label1.classList.remove("transition");
        }
        else if (parent2forward === true) {
            parent2.classList.remove("parent-2Activated");
            parent2.classList.add("parent-2DisActivated");
            parent2forward = false;
            queue = 3;
            //label transition disappear
            root.style.setProperty('--transition_time', `${labelDisappear}s`);
            label2.classList.remove("transition");
        }
        else if (parent3forward === true) {
            parent3.classList.remove("parent-3Activated");
            parent3.classList.add("parent-3DisActivated");
            parent3forward = false;
            //label transition disappear
            root.style.setProperty('--transition_time', `${labelDisappear}s`);
            label3.classList.remove("transition");
        }
        else if (parent4forward === true) {
            parent4.classList.remove("parent-4Activated");
            parent4.classList.add("parent-4DisActivated");
            parent4forward = false;
            queue = 3;
            //label transition disappear
            root.style.setProperty('--transition_time', `${labelDisappear}s`);
            label4.classList.remove("transition");
        }
        else {  //everything is in base position - can begin animation
            
            //label transition appear
            root.style.setProperty('--transition_time', `${labelAppear}s`);
            label3.classList.add("transition");

            //make text visible
            experience.style.visibility = "visible";
            //trigger animation
            parent3.classList.add("parent-3Activated");
            parent3.classList.remove("parent-3DisActivated");
            parent3forward = true;

            //change height of box
            root.style.setProperty('--header_element_expanded_height3', `${totalHeight3}px`);
            //change height of footer
            footerHeightFunction(totalHeight3);
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
            //label transition disappear
            root.style.setProperty('--transition_time', `${labelDisappear}s`);
            label1.classList.remove("transition");
        }
        else if (parent2forward === true) {
            parent2.classList.remove("parent-2Activated");
            parent2.classList.add("parent-2DisActivated");
            parent2forward = false;
            queue = 4;
            //label transition disappear
            root.style.setProperty('--transition_time', `${labelDisappear}s`);
            label2.classList.remove("transition");
        }
        else if (parent3forward === true) {
            parent3.classList.remove("parent-3Activated");
            parent3.classList.add("parent-3DisActivated");
            parent3forward = false;
            queue = 4;
            //label transition disappear
            root.style.setProperty('--transition_time', `${labelDisappear}s`);
            label3.classList.remove("transition");
        }
        else if (parent4forward === true) {
            parent4.classList.remove("parent-4Activated");
            parent4.classList.add("parent-4DisActivated");
            parent4forward = false;
            //label transition disappear
            root.style.setProperty('--transition_time', `${labelDisappear}s`);
            label4.classList.remove("transition");
        }
        else {  //everything is in base position - can begin animation
            
            //label transition appear
            root.style.setProperty('--transition_time', `${labelAppear}s`);
            label4.classList.add("transition");

            //make text visible
            contact.style.visibility = "visible";
            //trigger animation
            parent4.classList.add("parent-4Activated");
            parent4.classList.remove("parent-4DisActivated");
            parent4forward = true;

            //change height of box
            root.style.setProperty('--header_element_expanded_height4', `${totalHeight4}px`);
            //change height of footer
            footerHeightFunction(totalHeight4);
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
            //change height of footer
            footerHeightFunction(totalHeight1);
            //label transition appear
            root.style.setProperty('--transition_time', `${labelAppear}s`);
            label1.classList.add("transition");
        } else if (queue === 2) {
            //make text visible
            projects.style.visibility = "visible";
            //trigger animation
            parent2.classList.add("parent-2Activated");
            parent2.classList.remove("parent-2DisActivated");
            parent2forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height2', `${totalHeight2}px`);
            //change height of footer
            footerHeightFunction(totalHeight2);
            //label transition appear
            root.style.setProperty('--transition_time', `${labelAppear}s`);
            label2.classList.add("transition");
        } else if (queue === 3) {
            //make text visible
            experience.style.visibility = "visible";
            //trigger animation
            parent3.classList.add("parent-3Activated");
            parent3.classList.remove("parent-3DisActivated");
            parent3forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height3', `${totalHeight3}px`);
            //change height of footer
            footerHeightFunction(totalHeight3);
            //label transition appear
            root.style.setProperty('--transition_time', `${labelAppear}s`);
            label3.classList.add("transition");
        } else if (queue === 4) {
            //make text visible
            contact.style.visibility = "visible";
            //trigger animation
            parent4.classList.add("parent-4Activated");
            parent4.classList.remove("parent-4DisActivated");
            parent4forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height4', `${totalHeight4}px`);
            //change height of footer
            footerHeightFunction(totalHeight4);
            //label transition appear
            root.style.setProperty('--transition_time', `${labelAppear}s`);
            label4.classList.add("transition");
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
            //change height of footer
            footerHeightFunction(totalHeight1);
            //label transition appear
            root.style.setProperty('--transition_time', `${labelAppear}s`);
            label1.classList.add("transition");
        } else if (queue === 2) {
            //make text visible
            projects.style.visibility = "visible";
            //trigger animation
            parent2.classList.add("parent-2Activated");
            parent2.classList.remove("parent-2DisActivated");
            parent2forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height2', `${totalHeight2}px`);
            //change height of footer
            footerHeightFunction(totalHeight2);
            //label transition appear
            root.style.setProperty('--transition_time', `${labelAppear}s`);
            label2.classList.add("transition");
        } else if (queue === 3) {
            //make text visible
            experience.style.visibility = "visible";
            //trigger animation
            parent3.classList.add("parent-3Activated");
            parent3.classList.remove("parent-3DisActivated");
            parent3forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height3', `${totalHeight3}px`);
            //change height of footer
            footerHeightFunction(totalHeight3);
            //label transition appear
            root.style.setProperty('--transition_time', `${labelAppear}s`);
            label3.classList.add("transition");
        } else if (queue === 4) {
            //make text visible
            contact.style.visibility = "visible";
            //trigger animation
            parent4.classList.add("parent-4Activated");
            parent4.classList.remove("parent-4DisActivated");
            parent4forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height4', `${totalHeight4}px`);
            //change height of footer
            footerHeightFunction(totalHeight4);
            //label transition appear
            root.style.setProperty('--transition_time', `${labelAppear}s`);
            label4.classList.add("transition");
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
            //change height of footer
            footerHeightFunction(totalHeight1);
            //label transition appear
            root.style.setProperty('--transition_time', `${labelAppear}s`);
            label1.classList.add("transition");
        } else if (queue === 2) {
            //make text visible
            projects.style.visibility = "visible";
            //trigger animation
            parent2.classList.add("parent-2Activated");
            parent2.classList.remove("parent-2DisActivated");
            parent2forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height2', `${totalHeight2}px`);
            //change height of footer
            footerHeightFunction(totalHeight2);
            //label transition appear
            root.style.setProperty('--transition_time', `${labelAppear}s`);
            label2.classList.add("transition");
        } else if (queue === 3) {
            //make text visible
            experience.style.visibility = "visible";
            //trigger animation
            parent3.classList.add("parent-3Activated");
            parent3.classList.remove("parent-3DisActivated");
            parent3forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height3', `${totalHeight3}px`);
            //change height of footer
            footerHeightFunction(totalHeight3);
            //label transition appear
            root.style.setProperty('--transition_time', `${labelAppear}s`);
            label3.classList.add("transition");
        } else if (queue === 4) {
            //make text visible
            contact.style.visibility = "visible";
            //trigger animation
            parent4.classList.add("parent-4Activated");
            parent4.classList.remove("parent-4DisActivated");
            parent4forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height4', `${totalHeight4}px`);
            //change height of footer
            footerHeightFunction(totalHeight4);
            //label transition appear
            root.style.setProperty('--transition_time', `${labelAppear}s`);
            label4.classList.add("transition");
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
            //change height of footer
            footerHeightFunction(totalHeight1);
            //label transition appear
            root.style.setProperty('--transition_time', `${labelAppear}s`);
            label1.classList.add("transition");
        } else if (queue === 2) {
            //make text visible
            projects.style.visibility = "visible";
            //trigger animation
            parent2.classList.add("parent-2Activated");
            parent2.classList.remove("parent-2DisActivated");
            parent2forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height2', `${totalHeight2}px`);
            //change height of footer
            footerHeightFunction(totalHeight2);
            //label transition appear
            root.style.setProperty('--transition_time', `${labelAppear}s`);
            label2.classList.add("transition");
        } else if (queue === 3) {
            //make text visible
            experience.style.visibility = "visible";
            //trigger animation
            parent3.classList.add("parent-3Activated");
            parent3.classList.remove("parent-3DisActivated");
            parent3forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height3', `${totalHeight3}px`);
            //change height of footer
            footerHeightFunction(totalHeight3);
            //label transition appear
            root.style.setProperty('--transition_time', `${labelAppear}s`);
            label3.classList.add("transition");
        } else if (queue === 4) {
            //make text visible
            contact.style.visibility = "visible";
            //trigger animation
            parent4.classList.add("parent-4Activated");
            parent4.classList.remove("parent-4DisActivated");
            parent4forward = true;
            //change height of box
            root.style.setProperty('--header_element_expanded_height4', `${totalHeight4}px`);
            //change height of footer
            footerHeightFunction(totalHeight4);
            //label transition appear
            root.style.setProperty('--transition_time', `${labelAppear}s`);
            label4.classList.add("transition");
        }
        //reset queue
        queue = 0;
        triggerQueue = false;
    }
})

//DETERMINE HEIGHT OF FOOTER
const footerHeightFunction = (elementsFooterHeight) => {
    console.log("footerHeightFunction ran");
    topSection = document.querySelector(".topSection");
    topSectionHeight = topSection.clientHeight + topSectionExtra;
    root.style.setProperty('--top_section_test', `${topSectionHeight}px`);

    if (footerHeight1 >= elementsFooterHeight) {
        let totalFooterHeight = topSectionHeight + footerHeight1;
        root.style.setProperty('--footer_top', `${totalFooterHeight}px`);
        console.log("footerHeightFunction top part ran: footer-top is:"+totalFooterHeight);
    }
    else {
        let totalFooterHeight = topSectionHeight + elementsFooterHeight;
        root.style.setProperty('--footer_top', `${totalFooterHeight}px`);
        console.log("footerHeightFunction bottom part ran: footer-top is:"+totalFooterHeight);
    }
}


