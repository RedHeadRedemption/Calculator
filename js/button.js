let screen = document.getElementById("res");

//Button 0
let btn0 = document.getElementById("btn0");
btn0.addEventListener('click', ()=>{
    screen.innerHTML += 0;
});

//Button 1
let btn1 = document.getElementById("btn1");
btn1.addEventListener('click', ()=>{
    screen.innerHTML += 1;
});

//Button +
let btnSum = document.getElementById("btnSum");
btnSum.addEventListener('click', ()=>{
    screen.innerHTML += "+";
});

//Button -
let btnSub = document.getElementById("btnSub");
btnSub.addEventListener('click', ()=>{
    screen.innerHTML += "-";
});

//Button *
let btnMul = document.getElementById("btnMul");
btnMul.addEventListener('click', ()=>{
    screen.innerHTML += "*";
});

//Button /
let btnDiv = document.getElementById("btnDiv");
btnDiv.addEventListener('click', ()=>{
    screen.innerHTML += "/";
});

//Button C
let btnClr = document.getElementById("btnClr");
btnClr.addEventListener('click', ()=>{
    screen.innerHTML = "";
});

//Button =
let btnEql = document.getElementById("btnEql");
btnEql.addEventListener('click', ()=>{
    let screenResult = screen.innerHTML;

    screenResult.replace(/[0,1]+/g, match =>{

        return parseInt(match, 2);
    });
    
    screen.innerHTML = eval(screenResult).toString(2);
});