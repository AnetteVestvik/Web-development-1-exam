/*
**** retrieving html-elements with JQuery ****
*/
const $plane = $("#plane");
const $explotion = $("#explotion");
const $bannerTxt = $("#banner-txt");

const $policeCar = $("#police-car");
const $carWheel1 = $("#car-wheel-1");
const $carWheel2 = $("#car-wheel-2");
const $carSmoke = $("#car-smoke");
const $carLight = $(".light");


/* makes the banner text fade in to the banner */
$bannerTxt.fadeTo(25000, 1);

/*
*************************************** Animating JQuery object with GSAP, TweenMax ******************************************
*/


TweenMax.to( $plane, 5,
            {x: -2000, y: 150 }
           );

TweenMax.to( $policeCar, 10,
           {x: -3000, rotation: 1,  repeatDelay: 1, ease: Bounce.easeInOut }
    );

TweenMax.to( $carWheel1, 10,
           {x: -3000, rotation: -360, repeatDelay: 1, ease: Bounce.easeInOut}
    );
TweenMax.to( $carWheel2, 10,
            {x: -3000,rotation: -360, repeatDelay: 1, ease: Bounce.easeInOut}
    );
TweenMax.to( $carSmoke, 5,
            {delay: 4,  repeatDelay: 6.2, width: 150, opacity: 1, x: 150, y: -250}
    );
TweenMax.to( $carLight, 10,
            {x: -3000,  repeatDelay: 1, ease: Bounce.easeInOut}
    );
TweenMax.to( $carLight, 1,
           {backgroundColor:"rgba(0, 0, 255, 0.2)", repeat: -1}
    );

/*
***************** retrieving html-element  ******************
*/
let outputMain = document.getElementById("output-main");
const filterBtn = document.getElementById("filter-btn");
const unFilterBtn = document.getElementById("un-filter-btn");

/* 
**** checking if the case is set to solved or not, and changes the content from boolean to text ****
**** used when printing the objects into htmlTxt****
*/
let checkCaseSolved = (i) =>{
    if(i.caseSolved === true){
        return "Saken er løst";
    } else {
        return "Saken er ikke løst";
    }
};

let htmlTxt = "";

/*Id for showDetail button that increases every time it's called. This gives every showDetail button a different Id */
let number = 0;

/*
******************** Printing each object from casearray into a article ***********************************
*/
caseArray.forEach( (assignment, i) =>{
    htmlTxt += `
        <article>
            <h3>${assignment.title} </h3>

            <div id="box1">
            <img id="case-img" src="images/${assignment.imageUrl}" alt="bilde av ${assignment.title}">
            </div>

            <div class="box-2">
            <p class="caseStatus">${checkCaseSolved(assignment)}</p>
            <p>Type sak: ${assignment.typeOfCase}</p>
            <input onclick="showDetial(this.id)" class="DetBtn" id=${number++} type="button" value="Vis mer">
            </div>

        </article>
    `;
});

outputMain.style.height = "auto";

/*
**** function that only show the cases that is set to not solved ******
**** This function is added so that the user can choose to only see the cases that is not solved. This is to filter away unnecessary information *****
*/

function showByStatus() {
    //styling the filter button
    filterBtn.style.backgroundColor= "rgb(128,128,128, 0.9)";
    //clears the contents of htmlTxt and main
    htmlTxt = "";
    outputMain.innerHTML = "";

    /*
    **** filters and prints cases that is not solved ****
    */
    caseArray.forEach( (element) => {
        if(element.caseSolved == false){ 
        htmlTxt += `
        <article>

            <h3>${element.title} </h3>

            <div id="box1">
            <img id="case-img" src="images/${element.imageUrl}" alt="bilde av ${element.title}">
            </div>
            
            <div id="box-3">
            <p class="caseStatus">${checkCaseSolved(element)}</p>
            <p>Type sak: ${element.typeOfCase}</p>
        </article>
    `;
         //printing to output-main
          outputMain.innerHTML = htmlTxt;          
        }
    });
    

    outputMain.style.height = "auto";
    
};

/*
**** function that displays all cases when the button is clicked ****
*/
function showAll(){
    window.location.reload();
};


// printing each case into outputMain
outputMain.innerHTML = htmlTxt; 

/* button when clicked runs showByStatus */
filterBtn.addEventListener("click", showByStatus);
/* button when clicked runs showAll */
unFilterBtn.addEventListener("click", showAll);


/* 
**** changing color of html-element box2. The color depends on if the case is solved / not solved ****
*/

/*
**** When using colors, it is clearly shown which cases are set as resolved and which are not resolved, the cases that are resolved are set to blue / green to show clearly that this case is "OK" = resolved ****
*/


let box2 = $(".box-2");
let careArrayLenght = caseArray.length;
for( i = 0; i < careArrayLenght; i++ ){
    if(caseArray[i].caseSolved){
        box2[i].style.backgroundColor = "rgb(105, 179, 156, 0.8)";
    } else{
        box2[i].style.backgroundColor = "rgb(189, 87, 78, 0.8)";
    }
}

/*
******************************** detail button ****************************************
*/

/* Using id of the showDetail button (number++) to show detail about the case where id = caseArray index. (showDetail button with id 1 opens an article with information about the case on index 1 in caseArray). This makes it posible to show detail about every case, and change state of every case. Therefore i have choosen to not haven a html-page2(page to show details about one case). */

function showDetial(e) {
    
    let htmlTxt = "";
    outputMain.innerHTML = "";
    
    
    htmlTxt = `
        <article class="detail-article">
            <div id="notification-div">
                <p id="notification-txt">En endring har blitt utført</p>
            </div>

            <h2>${caseArray[e].title} </h2>
            
            <div id="slider">
            <div>
            <img class="img-slide" src="images/${caseArray[e].imageUrl}">
            </div>

            <div>
            <img class="img-slide" src="images/${caseArray[e].imageUrl1}">
            </div>

            <div>
            <img class="img-slide" src="images/${caseArray[e].imageUrl2}">
            </div>
            </div>

            <p>${caseArray[e].describtion}</p>
            <p>Start dato: ${caseArray[e].startDate}</p>
            <p>Type sak: ${caseArray[e].typeOfCase} </p>
            <p>${caseArray[e].personResponsible} er hoved ansvarlig for saken </p>
            <input class="stateButton" id="stateBtn" type="button" value="Sett som løst">
            <input id="backBtn" type="button" value="tilbake">
    `;
    
    outputMain.innerHTML = htmlTxt;
    outputMain.style.display = "block";
    outputMain.style.height ="900px";

    
    
    /* Automatic slider for the images, changes image every fourth second*/
    
    $("#slider > div:gt(0)").hide();
    
    setInterval(function() {
        $('#slider > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slider');
    }, 4000);
    
    
    
    /*
    **** retrieving html elements ****
    */
    let stateBtn = document.getElementById("stateBtn");
    let backBtn = document.getElementById("backBtn");
    
    /* back button */
    let goBack = () => {
        window.location.reload();
    }
    backBtn.addEventListener("click", goBack);

    /*
    **** changes the color of the button depending on whether the case is resolved or not ****
    /**** this is to clearly show the user what condition the case is in (resolved / not resolved).****
    */
    let buttonColor = () => {
        // fetching state from localStorage
        caseArray = JSON.parse(localStorage.getItem("caseArray"));
        if(caseArray[e].caseSolved == false){
            stateBtn.style.color = "rgb(189, 87, 78, 0.8)";
            stateBtn.style.border = "4px solid rgb(189, 87, 78, 0.8)";
            stateBtn.value = "Sett som løst";
        } else {
            stateBtn.value = "Sett som uløst";
            stateBtn.style.color = "rgb(105, 179, 156, 0.8)";
            stateBtn.style.border = "4px solid rgb(105, 179, 156, 0.8)";
        }
    }
    buttonColor();

    /*
    ************ function that sets the case as resolved / not resolved ***********
    */
 
    let changeState = (i) =>{
        
        //retrieving html-element notification DIV 
        const notificationDiv = document.getElementById("notification-div");

        
        if(caseArray[e].caseSolved == true){
            //when state is true, state changes to false when button is clicked
            caseArray[e].caseSolved = false;
    
            //delete localStorage
            localStorage.clear();
        
            //recreate localstorage, update localStorage
            let JSONCaseArray = JSON.stringify(caseArray);
            localStorage.setItem("caseArray", JSONCaseArray);

        
        } else{
            //when state is false, state changes to true when button is pressed
            caseArray[e].caseSolved = true;
            
            //delete localStorage
            localStorage.clear();
        
            //recreate localstorage, update localStorage
            let JSONCaseArray = JSON.stringify(caseArray);
            localStorage.setItem("caseArray", JSONCaseArray);
        }
        
        buttonColor();
        
        /* change opacity style of an html-div. Makes the div vislible */
        notificationDiv.style.opacity = "1";
        
        /*Setting timeOut for the opacity of the div, makes it disappear after 4s*/
        setTimeout( () =>{
            notificationDiv.style.opacity = "0";
        }, 4000 );
    };

    stateBtn.addEventListener("click", changeState);
          
}


