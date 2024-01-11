
// Scrolling to respective section on clicking the nav menu

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

for(var i = 0; i < navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
         event.preventDefault();

         var targetSectionId = this.textContent.trim().toLowerCase();
         var targetSection = document.getElementById(targetSectionId);
         
         var interval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 50);
         }, 50);
    });

}



//  Setting the skill-bar width on reaching the skill-container

var progressBars = document.querySelectorAll(".skill-progress > div");
var skillsContainer = document.getElementById("skills-container");
window.addEventListener("scroll", checkScroll);
var animationDone = false;

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}

initialiseBars();

function fillBars(){

    for( let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + "%";
        }, 15);
    }
}

function checkScroll(){

    // Checking first wheter the skill section is visible or not 

    var coordinates = skillsContainer.getBoundingClientRect();

    // if animation has not been intialise and skill section has been reached 

    if(!animationDone && coordinates.top <= window.innerHeight){
        animationDone = true;
        fillBars();
    }

    else if(coordinates.top > window.innerHeight){
        animationDone = false;
        initialiseBars();
    }
}
