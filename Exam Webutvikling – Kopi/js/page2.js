       
const outputMain = document.getElementById("output-main3");


// Used to generate new IDs for buttons
let number = 0;
let editNumber = 0;

/*
************** Prints each object in the array into an article ********************
*/
function showCases(){
    
outputMain.innerHTML = "";
    
for( let i = 0; i < caseArray.length; i++){

    outputMain.innerHTML += `
        <article class="admin-article">
            <h3 class="article-h3">${caseArray[i].title} </h3>

            <!--- for hvert objekt lages en ny id for slett knapp --->
            <button onclick="openEdit(this.id)" class="edit-btn" id=${editNumber++}> <i class="material-icons">mode_edit</i> </button>
            <button onclick="deleteClicked(this.id)" class="Delete-btn" id=${number++}> <i class="material-icons">delete</i> </button>
            
        </article>
    `;
};
}

showCases();


/*
**** sets the background color of the article to whether the case is resolved / not resolved *****
*/
/*
**** When using colors, it is clearly shown which cases are set as resolved and which are not resolved, the cases that are resolved are set to blue / green to show clearly that this case is "OK" = resolved. Delete buttons and edit buttons will have the same background color as the article ***
*/

let article = $(".admin-article");
let deleteBtn = $(".Delete-btn");
let editBtn = $(".edit-btn");

let careArrayLenght = caseArray.length;
for( i = 0; i < careArrayLenght; i++ ){
    if(caseArray[i].caseSolved){
        article[i].style.backgroundColor = "rgb(105, 179, 156, 0.8)";
        deleteBtn[i].style.backgroundColor = "rgb(105, 179, 156, 0.1)";
        editBtn[i].style.backgroundColor = "rgb(105, 179, 156, 0.1)";
    } else{
        article[i].style.backgroundColor = "rgb(189, 87, 78, 0.8)";
        deleteBtn[i].style.backgroundColor = "rgb(189, 87, 78, 0.1)";
        editBtn[i].style.backgroundColor = "rgb(189, 87, 78, 0.1)";
    }
}

/*
****************************** Delete cases ******************************************'
*/

//using number++ to generate different id's for each delete button
function deleteClicked(e) {
    
    caseArray.splice(e, 1);
    
    //Delete localStorage
    localStorage.clear();
    //Re-creates local storage, updated
    let JSONCaseArray = JSON.stringify(caseArray);
    localStorage.setItem("caseArray", JSONCaseArray);
        
    window.location.reload();  
}

/*
****************************** Edit cases ***************************************'
*/


function openEdit(e) {
    
    outputMain.innerHTML = "";
    

    outputMain.innerHTML += `
        <article class="edit-article">
            <div id="notification-div">
                <p id="notification-txt">Endringen er lagret</p>
            </div>

            <h3 id="h3txt">Rediger saken: ${caseArray[e].title}</h3>
            <label id="title-label">Titel</label>
            <input id="title-txt" type="text" placeholder=${caseArray[e].title}>

            
            <img id="edit-img" src="images/${caseArray[e].imageUrl}">

            <label id="desc-label" >Beskrivelse</label>
            <textarea id="desc-txt" rows="10" cols="30" placeholder=${caseArray[e].describtion}></textarea>
            

            <label id="date-label" >Dato opprettet</label>
            <input id="date-txt" type="text" placeholder=${caseArray[e].startDate}>

            <label id="type-lable" >Type sak</label>
            <input id="type-txt" type="text" placeholder=${caseArray[e].typeOfCase}>

            <label id="person-lable" >Navn på hoved ansvarlig </label>
            <input id="person-txt" type="text" placeholder=${caseArray[e].personResponsible}>
            
            
            <input class="stateButton" id="stateBtn" type="button" value="Sett som løst">

            <input id="saveBtn" type="button" value="lagre">
            <input id="backBtn" type="button" value="tilbake">
    `;
    
    /* retrieving html-elements created above */
    
    let titleTxt = document.getElementById("title-txt");
    let descTxt = document.getElementById("desc-txt");
    let dateTxt = document.getElementById("date-txt");
    let typeTxt = document.getElementById("type-txt");
    let personTxt = document.getElementById("person-txt");
    let stateBtn = document.getElementById("stateBtn");
    let backBtn = document.getElementById("backBtn");
    let saveInputBtn = document.getElementById("saveBtn");
    const notificationDiv = document.getElementById("notification-div");

    //back button
    function goBack () {
        window.location.reload();
    }
    backBtn.addEventListener("click", goBack);
    
    /* replacing value in caseArray with user input */
    function saveBtn(){
        caseArray[e].title = titleTxt.value;
        caseArray[e].describtion = descTxt.value;
        caseArray[e].startDate = dateTxt.value;
        caseArray[e].typeOfCase = typeTxt.value;
        caseArray[e].personResponsible = personTxt.value;
        
        //Delete localStorage
        localStorage.clear();
        //Re-creates local storage, updated
        let JSONCaseArray = JSON.stringify(caseArray);
        localStorage.setItem("caseArray", JSONCaseArray);
        
        
        /*change opacity style of an html-div. Makes the div vislible */
        notificationDiv.style.opacity = "1";
        /*Setting timeOut for the opacity of the div, makes it disappear after 4s*/
        setTimeout( () =>{
            notificationDiv.style.opacity = "0";
        }, 4000 );
    }
    
    /* when saveInput button is clicked, run saveBtn and update caseArray with user input */
    saveInputBtn.addEventListener("click", saveBtn);

    
    /*
    **** changes the color of the button depending on whether the case is resolved or not. This is to clearly show the user what condition the case is in ********
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
    
    let changeState = (i) =>{
        if(caseArray[e].caseSolved == true){
            //when state is true, state changes to false when button is pressed
            caseArray[e].caseSolved = false;
        
            //delete localStorage
            localStorage.clear();
            //recreate localstorage, update localStorage
            let JSONCaseArray = JSON.stringify(caseArray);
            localStorage.setItem("caseArray", JSONCaseArray);

        
        } else{
            //when state is false, state changes to true when button is pressed
            caseArray[e].caseSolved = true;
        
            //Delete localStorage
            localStorage.clear();
            //recreate localstorage, update localStorage
            let JSONCaseArray = JSON.stringify(caseArray);
            localStorage.setItem("caseArray", JSONCaseArray);
        }
        buttonColor();
        
        /*change opacity style of an html-div. Makes the div vislible */
        notificationDiv.style.opacity = "1";
        /*Setting timeOut for the opacity of the div, makes it disappear after 4s*/
        setTimeout( () =>{
            notificationDiv.style.opacity = "0";
        }, 4000 );
    };
    
    stateBtn.addEventListener("click", changeState);

}

/* 
***************************** add new case ***************************************
*** switch html page ****
*/
const getAddBtn = $("#add-btn");
const otherMain = $("#output-main3");

//When the button is pressed, change the html page
getAddBtn.on("click", function(){
    otherMain.load("pages/add.html");    
});




