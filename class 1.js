// DOM Manipulation - Document Object Model

console.log('Document Object Model!');

// concept of selector
// it just helps to grab the html element we want to interact with from JavaScript

// console.log(document);

// document - this points to the html file
// getElementById - this searches through the html file and check for an html element with the id attri that matches what is passed in the ()
const submitButton = document.getElementById("submit-button");
const usernameInput = document.getElementById("username-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const confirmPasswordInput = document.getElementById("confirm-password-input");

// message  selectors
const errorDisplay = document.querySelector(".error");
const successDisplay = document.querySelector(".success");

// console.log(errorDisplay);
// console.log(successDisplay)

// console.log(usernameInput);
// console.log(emailInput);
// console.log(passwordInput);
// console.log(confirmPasswordInput);
// console.log(submitButton);

// when users click on a button something FIRES-OFF  called an EVENT - and the type of EVENT that FIRES-OFF is called CLICK
// to put it simple its called - CLICK-EVENT

// how do we or the browser knows the user clicked on a button - by passing an instruction to the BROWSER to consistenly listen for that CLICK EVENT from that button
// one of the ways the BROWSER LISTENS FOR A CLICK EVENT is through EVENTLISTENER
// the developer can pass the instruction using JavaScript METHOD called - addEventListener()

// this addEventListener METHOD takes in two ARGUMENTS
// METHODS - are usually in-built FUNCTIONS provided by JavaScript
// 1. event name - click
// 2. the action the BROWSER  should perform after the click happens - usually defined with an ANONYMOUS FUNCTION
submitButton.addEventListener("click", function(){
    // console.log('User clicked on this button');

    // first grab all values from all inputs
    // email, password, username, and confirm password

    const usernameInputValue = usernameInput.value;
    const emailInputValue = emailInput.value;
    const passwordInputValue = passwordInput.value;
    const confirmPasswordInputValue = confirmPasswordInput.value;

    // validation
    if (usernameInputValue === "" || usernameInputValue === undefined){
        // console.error("Username is required!");
        // this is expected to change the display styling from none to block/show
        errorDisplay.style.display = "block";
        
        // this adds a text inside the error tag
        errorDisplay.textContent = "Username is required";
        
        // how long it should take before the error message disappears
        setTimeout(function(){
            errorDisplay.style.display = "none";
        }, 30000); // 3s
        return;
    }

    if (emailInputValue === "" || emailInputValue === undefined){
        // this is expected to change the display styling from none to block/show
        errorDisplay.style.display = "block";

        // this adds a text inside the error tag
        errorDisplay.textContent = "Email is required";

        // how long it should take before the error message disappears
        setTimeout(function(){
            errorDisplay.style.display = "none";
        }, 3000); // 3s
        return;
    }

    if (passwordInputValue === "" || passwordInputValue === undefined){
        // this is expected to change the display styling from none to block/show
        errorDisplay.style.display = "block";

        // this adds a text inside the error tag
        errorDisplay.textContent = "Password is required";

        // how long it should take before the error message disappears
        setTimeout(function(){
            errorDisplay.style.display = "none";
        }, 3000); // 3s
        return;
    }

    if (passwordInputValue !== confirmPasswordInputValue){
        // this is expected to change the display styling from none to block/show
        errorDisplay.style.display = "block";

        // this adds a text inside the error tag
        errorDisplay.textContent = "Password does not match!";

        // how long it should take before the error message disappears
        setTimeout(function(){
            errorDisplay.style.display = "none";
        }, 3000); // 3s
        return;
    }

    // this is expected to change the display styling from none to block/show
    successDisplay.style.display = "block";

    // this adds a text inside the success tag
    successDisplay.textContent = "Registeration Successful!";
});