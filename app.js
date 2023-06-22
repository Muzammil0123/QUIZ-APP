let a=1;
dow.addEventListener("click",()=>{
    if(a){
    drop.style.top="50px";
    a--;
    }
    else{
        drop.style.top="-100px";
        a++;  
    }

})
main.getElementsByTagName("button")[0].addEventListener("click",()=>{
    window.location="./categories.html";
})



