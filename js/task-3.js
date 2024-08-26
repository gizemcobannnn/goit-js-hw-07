console.log("ODEV-3\n");
const inputx = document.querySelector("input#name-input");
const outputText = document.querySelector("span#name-output");
let name="Anonymous";

inputx.addEventListener("input",(event)=>{
    outputText.textContent = event.target.value.trim();
    if(outputText.textContent!==""){
        console.log(`Hoşgeldin, ${outputText.textContent}`);
    }else{
        console.log(`Hoşgeldin, ${name}`);
    }
});
console.log("-----------------------------------------\n");






