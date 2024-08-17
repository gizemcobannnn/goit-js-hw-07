const buttonX = document.querySelector("button.change-color");
const colorText = document.querySelector("span.color");

buttonX.addEventListener("submit",function(event){
  event.target.parentElement.parentElement.colorText = getRandomHexColor();
  colorText.textContent=getRandomHexColor();
  console.log(colorText)
});
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  