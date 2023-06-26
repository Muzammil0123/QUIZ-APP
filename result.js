let loader=document.querySelector(".circular-loader");
let p=document.querySelector(".circular-loader p");
 
let i=0;
let ans=localStorage.getItem('score');
ans=JSON.parse(ans);
ans=Number.parseInt(ans);
let score=4;
let id=setInterval(()=>{
     i++;
     p.textContent=`${i}%`
     loader.style.background=`conic-gradient(green ${3.6*i}deg, red 0deg)`;
     if(i==ans*10 ||i==100){
     clearInterval(id);
     
    let a=document.querySelector('.appre');
       a.innerHTML=` Congratulations you scored ${ans}/10`;
    
    }
},90)
