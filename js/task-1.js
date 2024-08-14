/*
ul#categories içindeki kategorilerin sayısını ve yani li.item öğelerinin sayısını hesaplar ve konsola yazdırır.
ul#categories listesindeki her li.item öğesi için, öğenin başlığının metnini ( <h2> etiketi) ve kategorideki öğe sayısını
 (içinde bulunan tüm <li> öğeleri) bulur ve konsola yazdırır.
*/
const ulCcat = document.querySelector("ul#categories");
console.log(`Number of categories: ${}`);

const liItem = document.querySelector("li.item");

const liValue = document.querySelector("li.item").textContent;

document.querySelectorAll("li.item[li]")