/*
**************** Retrieving elements from add.html ************
*/

const titleTxt = document.getElementById("title-text");
    const descTxt = document.getElementById("describtion-text");
    const typeTxt = document.getElementById("type-txt");
    const dateTxt = document.getElementById("date-txt");
    const personTxt = document.getElementById("person-txt");
    const checkYes = document.getElementById("checkYes");
    const checkNo = document.getElementById("checkNo");
    const saveBtn = document.getElementById("save-btn");
    const backBtn = document.getElementById("back-btn");
    const notificationDiv2 = document.getElementById("notification-div2");

/*
****************** function that create new cases *****************************
*/

const addCase = (e) => {
    const title = titleTxt.value;
    const describtion = descTxt.value;
    const typeOfCase = typeTxt.value;
    const startDate = dateTxt.value;
    const personResponsible = personTxt.value;
    //default if user doesn't set state, then it's false(not solved)
    let caseSolved = false;
    
    /* Makes it posible for the user to set state (solved/ not solved) on the case that is beeing created */
    function addState(){
    if(checkYes.checked){
        return caseSolved = true;
    }else {
        return caseSolved = false;
    }
    }
    
    /* pushes the user input into the array as an object */
    caseArray.push(
        {
            title: titleTxt.value,
            describtion: descTxt.value,
            typeOfCase: typeTxt.value,
            startDate: dateTxt.value,
            personResponsible: personTxt.value,
            caseSolved: addState()
        }
    
    );
    
    //delet localStorage
    localStorage.clear();
    //Declearing localStorage, this works like an update of localStorage
    let JSONCaseArray = JSON.stringify(caseArray);
    localStorage.setItem("caseArray", JSONCaseArray);
    
    /* change opacity style of an html-div. Makes the div vislible */
    notificationDiv2.style.opacity = "1";
    /*Setting timeOut for the opacity of the div, makes it disappear after 4s*/
    setTimeout( () =>{
        notificationDiv2.style.opacity = "0";
    }, 4000 );
    
}

/* EventListner for the Save button, when clicked it will run function addCase that pushes the user input into the caseArray, which lies in ArrayObject.js*/
saveBtn.addEventListener("click", addCase);
    
/* function that reload the page*/
const goBack = () => {
    window.location.reload();
}

/* Eventlistner for the Back button which reload the page */
backBtn.addEventListener("click", goBack);





