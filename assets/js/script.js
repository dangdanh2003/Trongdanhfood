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


const nav_items =document.querySelector(".nav-items");
const menuIcon =document.querySelector(".menu-icons");

menuIcon.addEventListener("click", ()=>{
    nav_items.classList.toggle("nav_open");
    menuIcon.classList.toggle("open");
});

const menuItems=document.querySelectorAll(".nav-link");
    for(var i=0;i<menuItems.length;i++){
        var menuItem=menuItems[i];
        
        // this chính là chọn chính cái thẻ ta bấm vào
        menuItem.onclick=function(event){
            var isParentMenu=this.nextElementSibling && this.nextElementSibling.classList.contains('nav-items');
            if(isParentMenu){
                event.preventDefault();
            }
            else{
                nav_items.classList.remove("nav_open");
                menuIcon.classList.remove("open");
            }
        }
    }




