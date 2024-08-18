console.log("ODEV-5\n");
const buttonX = document.querySelector("button.change-color");
const colorText = document.querySelector("span.color");

buttonX.addEventListener("click",function(){
  colorText.textContent=getRandomHexColor();
  console.log(colorText)
  document.body.style.backgroundColor= getRandomHexColor();
});
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  console.log("-----------------------------------------\n");