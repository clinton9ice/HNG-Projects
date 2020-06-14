 //Toggler

 let toggleContainer = document.createElement("div")
 let toggleIcon = document.createElement("a")
 toggleIcon.setAttribute("class", "fa fa-arrow-up")


 toggleIcon.addEventListener("click", () =>{
   window.scrollTo(0,0)

 })

 toggleContainer.appendChild(toggleIcon)
 document.body.appendChild(toggleContainer)

window.onscroll = () =>{
  let scrollheight = window.scrollY || document.body.innerHeight|| document.documentElement.innerHeight;
if(Math.round(scrollheight) >= 700){
    toggleContainer.setAttribute("class", "wrapUp")
}
else{
  toggleContainer.classList.add("wrapfade")
}
}

