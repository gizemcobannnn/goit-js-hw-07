console.log("ODEV-4\n");
const formx = document.querySelector("form.login-form");
const email = document.getElementsByName("email");
const password = document.getElementsByName("password");
const buttonForm = document.getElementById("form-button");


formx.addEventListener("submit",(event)=>{
    event.preventDefault();
    const form = event.target;
    const login = form.elements.email.value;
    const password = form.elements.password.value;

    if (login === "" || password === "") {
        alert("All form fields must be filled in");
    }
    if(formx.getElementsByTagName("input")===" "){
        alert("All form fields must be filled in");
    }
    console.log(password+" "+email)
    password.value="";
    email.value="";
})
console.log("-----------------------------------------\n");