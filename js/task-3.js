const inputx = document.querySelector("input#name-input");
const inputText = document.querySelector("span#name-output");
let name="Anonymous";

inputx.addEventListener("input",(event)=>{
    inputText.textContent = event.target.value.trim();
    if(inputText.textContent!==""){
        console.log(`Hoşgeldin, ${inputText.textContent}`);
    }else{
        console.log(`Hoşgeldin, ${name}`);
    }


});






