console.log("ODEV-1");

const categoriesLength = document.getElementsByClassName("item").length;
console.log(`Number of categories: ${categoriesLength}`);

const liofUl =document.querySelectorAll("ul#categories > li")
let liofcategory = document.getElementsByClassName("item");


for( let subList of liofUl){
    const hText= subList.querySelector('h2').textContent;
    const elements = subList.querySelectorAll('li').length;

    console.log(`Category: ${hText}`)
    console.log(`Elements: ${elements}`);
}

console.log("-----------------------------------------\n");