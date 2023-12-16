
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
