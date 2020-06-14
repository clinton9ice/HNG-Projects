let mobileMenu = document.querySelector(".headerBars")



//Hamburgger-menu-
mobileMenu.onclick = element =>{
document.querySelector(".lists").classList.toggle("active");
 mobileMenu.classList.toggle("active");
 }

//loader
 function loader(){
  let loaderContainer = document.createElement("div");
   loaderContainer.setAttribute("class", "loader")
   for(var i = 0; i < 4; i++){
     let span = document.createElement("span")
     loaderContainer.append(span)
   }
   document.body.append(loaderContainer)
 }
  loader()
 

