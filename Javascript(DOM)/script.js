
// variables
const title = document.getElementById('title');
const textarea = document.getElementById('textarea');
const saveBtn = document.getElementById('saveBtn');
const searchBtn = document.getElementById('searchBtn');
const checks = document.querySelectorAll('.container__buttons__color>span')
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');

let colorsNumber = 0;

// functions
function offAllColors(check=checks){
    for (let i = 0; i < checks.length; i++)
        checks[i].style.display='none';
}

btn1.onclick = ()=>{
    if(btn1.firstElementChild.style.display=="block"){
        offAllColors()
        colorsNumber=0;
        btn1.firstElementChild.style.display="none"
    }
    else{
        offAllColors()
        colorsNumber=1;
        btn1.firstElementChild.style.display="block"
    }
}
btn2.onclick = ()=>{
    if(btn2.firstElementChild.style.display=="block"){
        offAllColors()
        colorsNumber=0;
        btn2.firstElementChild.style.display="none"
    }
    else{
        offAllColors()
        btn2.firstElementChild.style.display="block"
        colorsNumber=2;
    }
}
btn3.onclick = ()=>{
    if(btn3.firstElementChild.style.display=="block"){
        offAllColors()
        colorsNumber=0;
        btn3.firstElementChild.style.display="none"
    }
    else{
        offAllColors()
        btn3.firstElementChild.style.display="block"
        colorsNumber=3;
    }
}
btn4.onclick = ()=>{
    if(btn4.firstElementChild.style.display=="block"){
        offAllColors()
        colorsNumber=0;
        btn4.firstElementChild.style.display="none"
    }
    else{
        offAllColors()
        btn4.firstElementChild.style.display="block"
        colorsNumber=4;
    }
}
btn5.onclick = ()=>{
    if(btn5.firstElementChild.style.display=="block"){
        offAllColors()
        colorsNumber=0;
        btn5.firstElementChild.style.display="none"
    }
    else{
        offAllColors()
        btn5.firstElementChild.style.display="block"
        colorsNumber=5;
    }
}

saveBtn.onclick=()=>{
    if(title.value.trim()=='') return alert("Pls write Title")

    if(textarea.value.trim()=='') return alert("Pls write Note")

    if(colorsNumber==0) return alert("Pls choose Color")
    
    
}