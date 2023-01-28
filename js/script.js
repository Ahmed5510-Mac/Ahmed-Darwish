const btnSkills =document.getElementById("btnSkils")
const btnpersent =document.getElementById("btnPersant")
const skillsGrid=document.getElementById("skillsGrid")
const skillsProgress=document.getElementById("skillsProgress")
let menuTogggle=document.querySelector(".menuToggle")
let iconbar=document.querySelector(".fa-bars")
let iconClose=document.querySelector(".fa-xmark");
let loading=document.querySelector(".looding");
let box=document.querySelector(".box");
 let slider=document.querySelectorAll(".side");
//  ------------links sidebar
 let links=document.querySelectorAll(".nav li a")
 let homeLink=document.querySelector('.home-link ')
 let aboutLink=document.querySelector(".about-link")
 let portfoliotLink=document.querySelector(".portfolio-link")
 let serviceLink=document.querySelector(".services-link")
 let contactLink=document.querySelector(".contact-link")
// ---sections---------
let aside = document.querySelector(".aside")
let homeSection=document.querySelector(".home");
let aboutSection=document.querySelector(".about");
let portfolioSection=document.querySelector(".portfolio");
let sevicesSection=document.querySelector(".sevices");
let contactSection=document.querySelector(".contact");
// =====================================================================
// =====================================================================



// =====================================================================

window.onscroll=function(){ 
    if (window.scrollY < homeSection.offsetTop + 10 ) {
        document.querySelector(".linthroo").style.width="0px";
        document.querySelector(".about-link").style.visibility="hidden"

    }
    if (window.scrollY > homeSection.offsetTop +10 ) {
        links.forEach(l=>l.classList.remove("active"));
        homeLink.classList.add("active")
        document.querySelector(".linthroo").style.width="199px";
        document.querySelector(".linthroo1").style.width="0px";
        document.querySelector(".about-link").style.visibility="visible";

    }
    if (window.scrollY >= homeSection.offsetHeight) {
        links.forEach(l=>l.classList.remove("active"));
        aboutLink.classList.add("active")
        document.querySelector(".linthroo1").style.width="199px";
        document.querySelector(".linthroo2").style.width="0";

    }
    if(window.scrollY >= aboutSection.offsetHeight+homeSection.offsetHeight)
    {
        
        links.forEach(l=>l.classList.remove("active"));
        portfoliotLink.classList.add("active")
        document.querySelector(".linthroo2").style.width="199px";
        document.querySelector(".linthroo3").style.width="0";

    }
    if(window.scrollY >= portfolioSection.offsetHeight+aboutSection.offsetHeight+homeSection.offsetHeight)
    {
        
        links.forEach(l=>l.classList.remove("active"));
        serviceLink.classList.add("active")
        document.querySelector(".linthroo3").style.width="199px";
        document.querySelector(".linthroo4").style.width="0px";

    }
    if(window.scrollY >= sevicesSection.offsetHeight +portfolioSection.offsetHeight+aboutSection.offsetHeight+homeSection.offsetHeight)
    {
        
        links.forEach(l=>l.classList.remove("active"));
        contactLink.classList.add("active")
        document.querySelector(".linthroo4").style.width="199px";
    }
    
}
// =====================================================================

btnSkills.addEventListener("click",() =>{
    skillsGrid.classList.remove("hidden")
    skillsProgress.classList.add("hidden")
    console.log("ahmed")
})  
btnpersent.addEventListener("click",() =>{
    skillsGrid.classList.add("hidden")
    skillsProgress.classList.remove("hidden")
    setProgress()
})  
// ==========================progress==============================
function setProgress(){
    let progressItems=document.querySelectorAll(".progress-in")
    setTimeout(() =>{
        progressItems.forEach((el)=>{
            el.style.width=el.dataset.width;
        })
    },200)
}    
// ==========================================Mixtup filter portfolio============================================
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});
const linkWork=document.querySelectorAll(".work__item")
function activeWork(){
    linkWork.forEach(l=>l.classList.remove("active-work"));
    this.classList.add("active-work")
}
linkWork.forEach(l=>l.addEventListener("click",activeWork));
// ========================== work popup ================================
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("work__button"))
    {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement)
        console.log(e.target.parentElement);
    }
})
// ================================= togglePortfolioPopup ===============================
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open")
    // document.querySelector(".pp__thumbnail").classList.remove("hidden")
     document.querySelector(".lid").style.transform=`rotateX(10deg)`
     setTimeout(()=>{
        // =================turn off screen=================
         document.querySelector(".close-screen.left").style.left=`-50%`
         document.querySelector(".close-screen.right").style.right=`-50%`
     },500)
}
// ==========================open lap screen
document.getElementById("apple").addEventListener("click",(e)=>{
    console.log(e.target)
    document.querySelector(".lid").style.transform=` rotateX(10deg)`

})

// ==================================view portofolio details Start==================================

function portfolioItemDetails(portfolioItem){
    document.querySelector(".image-box-lab").src = portfolioItem.querySelector(".work__card img").src;
    document.querySelector(".button-key-enter a").href = portfolioItem.querySelector(".portfolio__items-details a").href;
 document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
document.querySelector(".portfolio__popup-subtitle span").innerHTML=portfolioItem.querySelector(".work__title").innerHTML;
document.querySelector(".portfolio_popup-body").innerHTML=portfolioItem.querySelector(".portfolio__items-details").innerHTML;
 }
// ==================================view portofolio details End==================================

// ==================================close button Start ==================================
document.querySelector(".poer-button").addEventListener("click",(e)=>{
    document.querySelector(".close-screen.left").style.left=`0`
    document.querySelector(".close-screen.right").style.right=`0`
    document.querySelector(".lid").style.transform=` rotateX(-96deg)`
    setTimeout(()=>{
        document.querySelector(".portfolio-popup").classList.remove("open")
         document.querySelector(".pp__thumbnail").classList.add("hidden")
    },2000)
   
});
document.querySelector(".portfolio-popup-close").addEventListener("click",(e)=>{
    document.querySelector(".portfolio-popup").classList.remove("open")
    // document.querySelector(".pp__thumbnail").classList.add("hidden")
});

// ==================================close button End==================================
// ==========================asaidbar==============================


links.forEach(l=>l.addEventListener("click",activeLink));

function activeLink(){
    links.forEach(l=>l.classList.remove("active"));
    this.classList.add("active")
}
// ==========================slider==============================

  slider.forEach((sl,i)=>{
    sl.addEventListener("click",()=>{
        box.style.transform=`rotateX(-15deg)rotateY(-${i*60}deg)`;
    })
})
// ================================
let enter=document.querySelector(".slider");

// =======================================mobilenavbar=====================================================
menuTogggle.onclick=function(){
    menuTogggle.classList.toggle("active-menue");
    if(menuTogggle.classList.contains("active-menue"))
    {
        iconbar.style.display="none";
        iconClose.style.display="inline-block";
    }else{
        iconbar.style.display="inline-block";
        iconClose.style.display="none";
        
    }
    
}
window.onload=setTimeout(()=>{
    // loading.style.transform="rotateY(90deg)"; 
},6000)

    // =======================================mobilenavbar=====================================================
    let path=document.querySelector("path")

    let pathLength=path.getTotalLength()

    path.style.strokeDasharray = pathLength + " " + pathLength;

    path.style.strokeDashoffset=pathLength ;

    window.addEventListener('scroll',()=>{
        //whate % down is it ?
        let scrollPercentage=(document.documentElement.scrollTop+document.body.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight);

        //length to offeset the dash
        let drawLength=pathLength * scrollPercentage;
        //draw in reverse
        path.style.strokeDashoffset=pathLength-drawLength;
    })
    const target=document.querySelectorAll(".scroll")

    // =======================================pagination=====================================================
const ultag=document.querySelector(".pagination ul")
let totalpage=20;

function element(totalpage,page)
{
    let liTag='';
    let activeLi;
    let beforePages=page-1;
    let afterpages=page+1;

    // ==========add previuos button===========
    if(page > 1)
    {
      liTag +=`<li> <span class="btn prev" onclick="element(totalpage,${page -1})"> <i class="fas fa-angle-left"></i> prev </span></li>`;
    }
    // =====================to constant number one=============
    if(page >2)
    {
        liTag+=`<li class="numb" onclick="element(totalpage,1)">1</li>`
    }
    // =====================to add dott =============
    if(page >3)
    {
        liTag+=` <li class="dots">...</li>`
    }
    // ========== how meny pages  or li show before current element===========
    if(page == totalpage)
    {
        afterpages= afterpages-2;
    }else if(page ==totalpage-1)
    {
        afterpages= afterpages-1;
    }
    // ========== how meny pages  or li show after current element===========
    if(page ==1)
    {
        afterpages= afterpages+2;
    }else if(page ==2)
    {
        afterpages= afterpages+1;
    }

    // ==========add li & add class active===========
    for (let pageLength = beforePages ; pageLength <= afterpages; pageLength++) {
        // =============to stop brev============
            if (pageLength >totalpage) 
            {
                continue; // continue   
            }
            if (pageLength == 0) 
            {
                pageLength=pageLength+1; 
            }

        
        if(page==pageLength)
        {
            activeLi="active"
        }else
        {
            activeLi=""
        }
        liTag+=`<li class="numb ${activeLi}" onclick="element(totalpage,${pageLength})"> ${pageLength}</li>`
    }

   // =====================to show last page number  & add dott=============
   if(page  < totalpage -1)
   {
   // ==============add dott=============
       if(page < totalpage -1)
       {
           liTag+=`<li class="dots">...</li>`
       }
       liTag+=` <li class="numb" onclick="element(totalpage,${totalpage})">${totalpage}</li>`
   }





    // ==========add next button===========
    if(page < totalpage)
    {
      liTag +=`<li> <span class="btn next" onclick="element(totalpage,${page +1})"> Next <i class="fas fa-angle-right"></i> </span></li>`;
    }
    ultag.innerHTML=liTag
}

element(totalpage,7)

// <!-- <li> <span class="btn prev"> <i class="fas fa-angle-left"></i> prev </span></li>
// <li class="numb active">1</li>
// <li class="numb">2</li>
// <li class="dots">...</li>
// <li class="numb">4 </li>
// <li class="numb">5</li>
// <li class="dots">...</li>
// <li class="numb">7</li>
// <li> <span class="btn next"> Next <i class="fas fa-angle-right"></i> </span></li>
// <li></li> -->