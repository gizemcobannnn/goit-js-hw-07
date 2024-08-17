const createButton = document.querySelector("data-create");
const destroyButton =document.querySelector("data-destroy");

createButton.addEventListener("",createBoxes(amount));
destroyButton.addEventListener("",destroyBoxes() );
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  function createBoxes(amount){

  }

  function destroyBoxes(){
    
  }