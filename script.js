let selectedButton= document.querySelector("button");

let id=setInterval(()=>{
    let red = Math.ceil(Math.random()*255);
    let green = Math.ceil(Math.random()*255);
    let blue = Math.ceil(Math.random()*255);
    document.body.style.backgroundColor=`rgb(${red},${green},${blue})`;

},1000);

selectedButton.addEventListener("click",()=>clearInterval(id));