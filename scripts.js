//The following lines of code up to 56 are for the log in.
const nameLabel = document.getElementById("nameLabel");
const passwordLabel = document.getElementById("passwordLabel");
const name = document.getElementById("name");
const password = document.getElementById("password");
const error = document.getElementById("errorMessage");
const form = document.getElementById("Form");
const input = document.querySelectorAll("input");
const email = document.getElementById("email");
const telephone = document.getElementById("telephone");
let submissionErrorText = "Please fill in the empty input fields.";

const regEx = { //Here I create a object to hold the different regular expressions I have created for the different input fields.
    name: /^[A-z]{1,20}$/,
    password: /^[\w@]{5,20}$/,
    email: /^[\w\.]*@[\w-]*\.([a-z]{3}|[a-z]{2}\.[a-z]{2})$/,
    telephone: /^[\d]{11}$/,
}

//This function is used to validate the string in the input fields so it matches the regular expressions.
function validate(item, reguEx){
    let nameMessage = "*You must not leave the name field empty.";
    let passwordMessage = "*A password must be between 5 - 20 characters.";
    let emailMessage = "*Please input a valid email.";
    let telephoneMessage = "*Input a phone number 11 digits long.";

    //Here the regular expression is tested against the item value to see if it meets the criteria. It it does meet the criteria, the input and its parents turns green. 
    if (reguEx.test(item.value) === true){ 
        item.className = "validBorder";
        item.parentNode.className = "validText";
    } else if(reguEx.test(item.value) === false){
        item.className = "invalidBorder"; //If the criteria is not met and it is false, then the input and its parent turn red. 
        item.parentNode.className = "invalidText";

        //Here it checks if there is already any error text displaying from the submit event listener and removes it
        if (error.innerText === submissionErrorText){
            error.innerText = "";
        }

        //If the input id matches the name/password/email/telephone id and doesn't already have an error message then it will include an error message for each respective input field.
        if (item.id === name.id && !(error.innerText.includes(nameMessage)) ){
            error.innerText += nameMessage;
        } else if (item.id === password.id && !(error.innerText.includes(passwordMessage))) {
            error.innerText += "\n" + passwordMessage; //The "\n" places the message on a new line each time so it is not crammed together.
        } else if (item.id === email.id && !(error.innerText.includes(emailMessage))) {
            error.innerText += "\n" + emailMessage;
        } else if (item.id === telephone.id && !(error.innerText.includes(telephoneMessage))) {
            error.innerText += "\n" + telephoneMessage;
        } else {
            return;
        }
    }
}

//For each input field in the form an event listener is added and then once the user starts to type the checkFormat function is invoked, which validates the user input against the regular expressions.
input.forEach(function addEL(formInputSection){ 
    formInputSection.addEventListener("keyup", function checkFormat(ev){
        validate(ev.target, regEx[ev.target.id]);
        //the ev.target is the item and the regEx[ev.target.id] ensures that the correct regular expression is accessed in the regular expression object.
    })
})

//This event listener checks the input fields on submission.
form.addEventListener("submit", function checkFormat(ev){
    checkInputValue(ev);
})

// For each input field if the classname does not match the "validBorder" class then it stops the submission going through and highlights the input border/name as red and will provide an error message.
function checkInputValue(ev) {
    input.forEach(function validateInput(formInputSection){
        if (formInputSection.className !== "validBorder") {
            ev.preventDefault();
            formInputSection.className = "invalidBorder";
            formInputSection.parentElement.className = "invalidText";
            error.innerText = submissionErrorText;
        }
    })
}

//This removes the classes for ech of the input fields and their parent nodes and clears the error message text so it resets the form.
form.addEventListener("reset", function clearErrorMessage(){
    input.forEach(function clearClasses(formInputSection){
        formInputSection.className -= "invalidBorder";
        formInputSection.parentElement.className -= "invalidText";
    });
    error.innerText = "";
});