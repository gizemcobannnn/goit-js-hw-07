let createdImg ;
const images = [
    {
      url: "<https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260>",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "<https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260>",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "<https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260>",
      alt: "Group of Horses Running",
    },
  ];


const gallery = document.getElementsByClassName("gallery");

for(const imagepart of images){
  const createdLi= document.createElement("li");
  const createdImg =document.createElement("img");

  createdImg.setAttribute("src",imagepart.url);
  createdImg.setAttribute("alt",imagepart.alt)
  
  createdLi.append(createdImg);
}