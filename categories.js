let arr=Array.from(document.querySelectorAll(".ele"))
arr.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        window.location="./question.html";
    })
})