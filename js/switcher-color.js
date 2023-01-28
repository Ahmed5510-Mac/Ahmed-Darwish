// *************************************toggle style switcher**********************************************
let styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
    console.log("open")
})
// ****************hide style switcher on scrole ********
window.addEventListener("scroll",()=>{
    if ( document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});
// ************************************* theem colors **********************************************
const alternateStyley = document.querySelectorAll(".alternate-style")
 function setActiveStyle(color) 
 {    
    alternateStyley.forEach((style) => {
        
        if (color === style.getAttribute("title") )
         {
            style.removeAttribute("disabled");

        }else
        {
            style.setAttribute("disabled", "true");
        }
    });

}
// ************************************* theem light & dark **********************************************
const daynight= document.querySelector(".day-night");
daynight.addEventListener("click",()=>{
    daynight.querySelector("i").classList.toggle("fa-moon");
    daynight.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("dark");
 
});
window.addEventListener("load",()=>{
    if (document.body.classList.contains("dark")) {
        
        daynight.querySelector("i").classList.add("fa-sun");
    }else
    {
        daynight.querySelector("i").classList.add("fa-moon");

    }
})


