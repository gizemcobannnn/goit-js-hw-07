/*
ul#categories içindeki kategorilerin sayısını ve yani li.item öğelerinin sayısını hesaplar ve konsola yazdırır.
ul#categories listesindeki her li.item öğesi için, öğenin başlığının metnini ( <h2> etiketi) ve kategorideki öğe sayısını
 (içinde bulunan tüm <li> öğeleri) bulur ve konsola yazdırır.
*/

const categoriesLength = document.getElementsByClassName("item").length;
console.log(`Number of categories: ${categoriesLength}`);


const liValue = document.querySelectorAll("h2");

let liofcategory = document.getElementsByClassName("item");
let liofhtwo = document.querySelectorAll("li.item[li]");

for(let valueCat of liValue){

    console.log(`Category: ${valueCat.textContent}`); 
}