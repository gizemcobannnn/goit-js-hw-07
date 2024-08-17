const formx = document.querySelector("form.login-form");
formx.addEventListener("submit",(event)=>{
    event.preventDefault();
    if(event.target.value===null&&event.target.value===" "){
        alert("All form fields must be filled in");
    }
    if(formx.getElementsByTagName("input")===" "){
        alert("All form fields must be filled in");
    }
})