const next=document.querySelector('.next');
const prev=document.querySelector('.prev');
const comment=document.querySelector('.list-comment');
const commentItem=document.querySelectorAll('.list-comment .item');
var translateY=0;
var count=commentItem.length;

next.addEventListener('click',function(event){
    event.preventDefault()
    if(count==1){
        return false
    }
    translateY+=-250
    comment.style.transform=`translateY(${translateY}px)`
    count--
})

prev.addEventListener('click',function(event){
    event.preventDefault()
    if(count==4){
        return false
    }
    translateY+=250
    comment.style.transform=`translateY(${translateY}px)`
    count++
})

// menu
const navbar_menu =document.querySelector(".menu");
const menuButton=document.querySelector(".navbar_icons");

    menuButton.addEventListener("click", ()=>{
    navbar_menu.classList.toggle("navbar_open");
    menuButton.classList.toggle("open");
});