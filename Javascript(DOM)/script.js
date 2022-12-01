
// variables
const title = document.getElementById('title');
const textarea = document.getElementById('textarea');
const saveBtn = document.getElementById('saveBtn');
const searchBtn = document.getElementById('searchBtn');
const cardsContainer = document.getElementById('totalContainer');
const checks = document.querySelectorAll('.container__buttons__color>span')
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');

let colorsNumber = 0;

let deleteSvg = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="Content_deleteBtn__mQsUR" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path></svg>`

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

function cardColor(color=colorsNumber){
    let col=[]
    switch(colorsNumber){
        case 1:
            col.push("rgb(240, 98, 146)","rgba(240, 98, 146, 0.4)")
            return col
        case 2:
            col.push("rgb(186, 104, 200)","rgba(186, 104, 200, 0.4)")
            return col
        case 3:
            col.push("rgb(79, 195, 247)","rgba(79, 195, 247, 0.4)")
            return col
        case 4:
            col.push("rgb(255, 213, 79)","rgba(255, 213, 79, 0.4)")
            return col
        case 5:
            col.push("rgb(174, 213, 129)","rgba(174, 213, 129, 0.4)")
            return col
    }
}

saveBtn.onclick=()=>{
    if(title.value.trim()=='') return alert("Pls write Title")

    if(textarea.value.trim()=='') return alert("Pls write Note")

    if(colorsNumber==0) return alert("Pls choose Color")

    let color =cardColor()

    let card = document.createElement('div');
    let deletebtn = document.createElement('div');

    deletebtn.innerHTML=deleteSvg;
    deletebtn.onclick=()=>{
        let result = confirm("Want to delete?");
        if(result) cardsContainer.removeChild(card)
    }
    
    card.style.borderColor=color[0];
    card.className="totalContainer__card";
    card.innerHTML= `<h4 style="background-color:${color[1]};">${title.value} </h4> <p>${textarea.value}</p>`;
    card.firstElementChild.appendChild(deletebtn)
    cardsContainer.appendChild(card)
}