
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
e.target.parentElement.querySelectorAll(".active").forEach((ele)=>{
    ele.classList.remove("active");
})

e.target.classList.add("active");

})
})
//switch background option
const randomBackground=document.querySelectorAll(".random-background span");
randomBackground.forEach((span)=>{
span.addEventListener("click",(e)=>{
    

e.target.parentElement.querySelectorAll(".active").forEach((ele)=>{
    ele.classList.remove("active");
})

e.target.classList.add("active");
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

},5000);
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

