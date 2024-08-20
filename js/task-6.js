console.log("ODEV-6\n");
const inputBox = document.querySelector("#inputNum");
const createButton = document.getElementById("data-create");
const destroyButton =document.getElementById("data-destroy");
const divpart = document.getElementById("boxes");
let amount = 0; 

inputBox.addEventListener("input",(event)=>{
  amount= event.target.value ;
  if(amount>0&&amount<100){
    inputBox.textContent =  amount;
  }
  console.log(amount);
});


createButton.addEventListener("click",()=>createBoxes(amount));
destroyButton.addEventListener("click",destroyBoxes);
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  function createBoxes(amount){
    divpart.innerHTML="";

    for(let i=0;i<amount;i++){
      const boxSize = 30 + i * 10;
      const divone = document.createElement("div")
      divone.style.width = `${boxSize}px`;
      divone.style.height = `${boxSize}px`;
      divone.style.backgroundColor = getRandomHexColor();
      divone.style.margin = "5px"; 
      divone.style.display = "inline-block"; 
      divpart.appendChild(divone);
    }
    inputBox.value="";
 
  }

  function destroyBoxes(){
    divpart.innerHTML="";
  }
  console.log("-----------------------------------------\n");