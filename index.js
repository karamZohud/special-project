
let backgroundOption =true;
let backgroundInterval;
//check if hte is local storge random background
let backgroundlocalItem=localStorage.getItem("background-option");
//backgroundlocalItem return string value foucs on that

if(backgroundlocalItem!=null){
  
    if(backgroundlocalItem== "true"){
    backgroundOption=true}
else{
  backgroundOption= false;} 
document.querySelectorAll(".random-background span").forEach((ele)=>{
ele.classList.remove("active");
})
if(backgroundlocalItem=="true"){
    
    document.querySelector(".random-background .yes").classList.add("active");
}
else{
    document.querySelector(".random-background .no").classList.add("active");
}

}



// check if there main color in the local storge
let maincolor=localStorage.getItem("color_option");
if(maincolor!=null){
   // console.log("local storge not empty");
   document.documentElement.style.setProperty('--main--color',maincolor);
  //remove  of active class
document.querySelectorAll(".color-list li").forEach((ele)=>{
    ele.classList.remove("active");
if (ele.dataset.color==maincolor){
    ele.classList.add("active")
}


})
//add active classs on ele data-color==local storge item


}


// toggle spin classs on icon
document.querySelector(".toggleSettings .fa-gear")
.onclick=function(){
    this.classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open");
}

//end
//switch colors
const colorsli=document.querySelectorAll(".color-list li");
colorsli.forEach((li)=>{
li.addEventListener("click",(e)=>{
   // console.log(e.target.dataset.color);
//set color on root
document.documentElement.style.setProperty('--main--color',e.target.dataset.color);
//set color in local storge
localStorage.setItem("color_option",e.target.dataset.color);
//remove active class from all children
HandleActive(e);

})
})
//switch background option
const randomBackground=document.querySelectorAll(".random-background span");
randomBackground.forEach((span)=>{
span.addEventListener("click",(e)=>{
    
    HandleActive(e);
// e.target.parentElement.querySelectorAll(".active").forEach((ele)=>{
//     ele.classList.remove("active");
// })

// e.target.classList.add("active");
if(e.target.dataset.background== "yes"){

backgroundOption=true;
localStorage.setItem("background-option",true);
randomizeImage();
}
else{
    backgroundOption=false;
    localStorage.setItem("background-option",false);
clearInterval(backgroundInterval);
}
})})





//Select landing page element
let landingpage=document.querySelector(".landing-page");
let imagearr=["01.jpg","02.jpg","03.jpg","04.jpg"];
//change background image Url
//get random number


function randomizeImage(){
if(backgroundOption === false){
    clearInterval(backgroundInterval);

}

    if(backgroundOption === true){
        backgroundInterval=setInterval(() => {
let RandomNum =Math.floor(Math.random()*imagearr.length);
landingpage.style.backgroundImage='url("img/'+imagearr[RandomNum]+'")'

},1000);
    }
}



randomizeImage();


// skills start 
// select skills selector
let ourSkills=document.querySelector(".Skills");
window.onscroll=function(){
//skills ofset top
let skillsOffsetTop=ourSkills.offsetTop;

//this.console.log(skillsOffsetTop);
//skills outer height
let skillsOuterHeight=ourSkills.offsetHeight;
//console.log(skillsOuterHeight);
//
let windowHight=this.innerHeight;
//console.log(windowHight);

//window scroll height
let windowScrollTop=this.pageYOffset;
//console.log(windowScrollTop);
if(windowScrollTop>(skillsOffsetTop+skillsOuterHeight-windowHight)){
}
let allSkills=document.querySelectorAll(".skill-box .skill-progres span" );
allSkills.forEach((skill)=>{
skill.style.width=skill.dataset.progres;
})
}

//end skills

//create Popup with the Image
let ourGallery=document.querySelectorAll(".gallery img");

ourGallery.forEach((ele)=>{


ele.addEventListener('click',(e)=>{
    //create over lay ele
    let overlay=document.createElement("div");
    //add class to over lay
    overlay.className='popup-overLay';
    document.body.appendChild(overlay);
    let popupBox=document.createElement("div");
popupBox.className='popup-box';
    
    if(ele.alt!=null){
//create hidding
let imageHeading=document.createElement("h3");
// create text for heading
let imgText=document.createTextNode(ele.alt);
//append the text on the heading 
imageHeading.appendChild(imgText);
//append the heading on the popup box 
popupBox.appendChild(imageHeading);


}



//create the image
let popupImage=document.createElement("img");
//set image source 
popupImage.src=ele.src;
//add image to popup box 
popupBox.appendChild(popupImage);
//append hte popup box to body
document.body.appendChild(popupBox);

//add alt text in popupbox 
let closeButton=document.createElement("span");
let closeButtonText=document.createTextNode("X");

closeButton.className='closeButton';
closeButton.appendChild(closeButtonText);
popupBox.appendChild(closeButton);



});

});

document.addEventListener("click",(e)=>{
    //remove the popup
if(e.target.className=='closeButton'){
e.target.parentNode.remove();
//REMOVE OVERlay

document.querySelector(".popup-overLay").remove();


}
});

//end popup 
const allBullets=document.querySelectorAll(".navBullets .bullet");
const allLinks=document.querySelectorAll(".links a");
// start nav bullet
// 
// allBullets.forEach((bullet)=>{
//     bullet.addEventListener("click",(e)=>{
//         let section=e.target.dataset.section;
//         document.querySelector(section).scrollIntoView ({
//             behavior:'smooth'
//         });
//     })
// })

// // end nav bullet
// //start navbar
// 
// allLinks.forEach((links)=>{
//     links.addEventListener("click",(e)=>{
//         e.preventDefault();
//         let section=e.target.dataset.features;
//         document.querySelector(section).scrollIntoView ({
//             behavior:'smooth'
//         });
//     })
// })
//end navbar

//we can combine the two code above in 
function scrollToSomeWhere(element){
element.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        e.preventDefault();
        let section=e.target.dataset.section;
        document.querySelector(section).scrollIntoView ({
            behavior:'smooth'
        });
    })
})
}
scrollToSomeWhere(allLinks);
scrollToSomeWhere(allBullets);

function HandleActive(event){
    event.target.parentElement.querySelectorAll(".active").forEach((ele)=>{
        ele.classList.remove("active");
    })
    
    event.target.classList.add("active");
}

let bulletOption=document.querySelectorAll(" .Testing-Option span");
let bulletsContainer= document.querySelector(".navBullets");
let bulletStorge=localStorage.getItem("bullets-option");


if(bulletStorge!=null){
document.querySelectorAll(" .Testing-Option span").forEach((span)=>{
span.classList.remove("active");
})
if (bulletStorge=='show') {
    bulletsContainer.style.display='block'
    document.querySelector(".Testing-Option .show").classList.add('active');
}
else{
    bulletsContainer.style.display='none';  
    document.querySelector(".Testing-Option .hide").classList.add('active');
}

}
bulletOption.forEach((span)=>{
    span.addEventListener("click",(e)=>{
if(span.dataset.display=='show'){
    bulletsContainer.style.display='block'
    localStorage.setItem("bullets-option",'show');
}
else{
    bulletsContainer.style.display='none';  
    localStorage.setItem("bullets-option",'hide');
 
}
HandleActive(e);
    })
 })


 //reset button 
 document.querySelector(".reset-option").onclick=function() {
    //localStorage.clear();//remove every thing in local storge
localStorage.removeItem("bullets-option");//remove only the the storge with the name 
localStorage.removeItem("background-option");
localStorage.removeItem("color_option");
window.location.reload();//reload window
    
 }