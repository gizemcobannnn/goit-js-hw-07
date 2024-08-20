console.log("ODEV-4\n");
const formx = document.querySelector("form.login-form");
const emailInput = document.querySelector("[name='email']");
const passwordInput = document.querySelector("[name='password']")
const buttonForm = document.getElementById("form-button");


formx.addEventListener("submit",(event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        alert("All form fields must be filled in");
    }
    if(formx.getElementsByTagName("input")===" "){
        alert("All form fields must be filled in");
    }
    console.log(`email: ${email} password: ${password} `)
    passwordInput.value="";
    emailInput.value="";
})
console.log("-----------------------------------------\n");