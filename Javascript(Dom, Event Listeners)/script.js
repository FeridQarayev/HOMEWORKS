const totalmoney=document.querySelector('.body__totalmoney').firstElementChild;
const sellbtn = document.querySelectorAll('.body__cards__card__down__sellbtn')
const buybtn = document.querySelectorAll('.body__cards__card__down__buybtn')
const input = document.querySelectorAll('.body__cards__card__down__inp')


let max = 20;
const regex = /\d/g;

for (let i = 0; i < input.length; i++) {
    // Input Event
    input[i].addEventListener('input',(e)=>{
        if (!Math.abs(e.target.value)) {
            e.target.value=Math.abs(e.target.value)
            // if(e.target.value<0) e.target.value=0
        }
        if (Math.abs(e.target.value.charAt(0))==0&&e.target.value.length>1) {
            e.target.value=e.target.value.slice(1)
        }

        if (e.target.value != 0) {
            sellbtn[i].classList.add("active")
        }
        else{
            sellbtn[i].classList.remove("active")
        }
        // if (e.target.value >= max) {
        //     buybtn[i].classList.add("deactive")
        // }
        // else{
        //     buybtn[i].classList.remove("deactive")
        // }
        calcCash(e)
    })

    // Sell Button
    sellbtn[i].addEventListener('click',(e)=>{
        if (input[i].value > 0) {
            input[i].value-- ;
            if (buybtn[i].classList[1] == 'deactive') {
                buybtn[i].classList.remove('deactive')
            }
        }
        if (input[i].value == 0) {
            e.target.classList.remove("active")
        }
    })

    // Buy Button
    buybtn[i].addEventListener('click', (e)=>{
        if (input[i].value == max-1) {
            e.target.classList.add('deactive')
        }
        if(input[i].value < max){
            input[i].value ++;
            if (sellbtn[i].classList[1] == undefined) {
                sellbtn[i].classList.add('active')
            }
        }
    })
}


var money = 187000000000;
let calcmoneys = []
let calcmoney = 0;
let qaliq = 0;
let tmoney=money;
let models= [{index:0,qaliqq:0}];

//Money Calculator
function calcCash(e){
    //let productCost = e.target.parentElement.parentElement.firstElementChild
    //.nextElementSibling.nextElementSibling.textContent.match(regex).join('');
    
    tmoney = money;
     for (let i = 0; i < input.length; i++) {
        console.log("ALAKSKSALLSLLALSSALAMSALAMALAMASL")
         let productCost = input[i].parentElement.parentElement.firstElementChild
             .nextElementSibling.nextElementSibling.textContent.match(regex).join('')

             
        let calc=(productCost * input[i].value)
        calcmoney = tmoney - (productCost * input[i].value);
        //console.log('tmoney', tmoney)
        //console.log('calcmoney', calcmoney)
        
         if (calcmoney < tmoney&& calcmoney>=0) {
             tmoney = calcmoney
             totalmoney.textContent = tmoney
             console.log('-------------------------------------------------------------')
         }
         else{
            let productCost = e.target.parentElement.parentElement.firstElementChild
             .nextElementSibling.nextElementSibling.textContent.match(regex).join('')
             if (input[i].value != 0) {
                 //console.log('inp value ',input[i].value)
                 //console.log('targetin value ',e.target.value)
                console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++')

                //calcBonus(i)
                
                //totalmoney.textContent = tmoney -(productCost * Math.floor(((money/productCost)-(money-tmoney)/productCost)))
                //let displaymoney = totalmoney.textContent
                //console.log('display money',displaymoney)

                //console.log('productun qiymeti',productCost)
                console.log('mehsul sayi',Math.floor(((money/productCost)-(money-tmoney)/productCost)))
                e.target.value = Math.floor(((money/productCost)-(money-tmoney)/productCost));

                //input[i].value = Math.floor(tmoney/productCost);
                //calcmoney = tmoney - (productCost * Math.floor((money/productCost)-(money-tmoney)/productCost))
                //tmoney = calcmoney
                }
            }
         //console.log('tenin money',tmoney)
     }

    // if (next < 0) {
    //     for (let i = input.length-1; i >= 0; i--) {
            
    //         let productCost = e.target.parentElement.parentElement.firstElementChild
    //             .nextElementSibling.nextElementSibling.textContent.match(regex).join('');         
            
            
    //          calcmoney=0
    //          if (e.target.value != 0) {
    //             calcmoney = tmoney - (productCost * Math.floor((money/productCost)-(money-tmoney)/productCost))
    //              input[i].value = Math.floor((money/productCost)-(money-tmoney)/productCost);
    //              tmoney = calcmoney
    //          }
            
    //          //console.log('mehsul sayi',Math.floor(((money/productCost)-(money-tmoney)/productCost)))
    //      }
    //  }
    console.log('money',tmoney)

 
   // console.log(money)
//    let tmoney = money;
//    let calcmoney = 0;
//    for (let i = 0; i < input.length; i++) {
//        let productCost = input[i].parentElement.parentElement.firstElementChild
//        .nextElementSibling.nextElementSibling.textContent.match(regex).join('');
//        calcmoney = tmoney - (input[i].value * productCost)
//        console.log('Hesablanan mebleq', calcmoney)
//        if (calcmoney>=0) {
//            tmoney=calcmoney;
//            money=tmoney;
//        }
//        else{
         
//                 input[i].value = Math.floor(tmoney/productCost);
//                 console.log('bu saydi',Math.floor(tmoney/productCost))
//             tmoney = tmoney-(Math.floor(tmoney/productCost)*productCost);
//         }
//     }
//     for (let i = 0; i < input.length; i++) {
//         let productCost = input[i].parentElement.parentElement.firstElementChild
//         .nextElementSibling.nextElementSibling.textContent.match(regex).join('');
//         if(parseInt(productCost) > parseInt(tmoney)){
//             buybtn[i].classList.add('deactive')
//         }
//         else{
//             if(buybtn[i].classList[1]=='deactive'){
//                 buybtn[i].classList.remove('deactive');
//             }
//         }
//     }
//     console.log('mebleq',money)
//     console.log(' elimideki mebleq',tmoney)
//     totalmoney.textContent= makeShow(tmoney)
}

function calcBonus(id){
    let sum = 0
    tmoney = money;
    console.log('id',id)
    console.log('input length',input.length)
     for (let i = 0; i < input.length; i++) {
        console.log("*****************************************************************")
         let productCost = input[i].parentElement.parentElement.firstElementChild
             .nextElementSibling.nextElementSibling.textContent.match(regex).join('')

        if (id!=i && input[i].value != 0) {
            console.log('i',i)
            let calc=(productCost * input[i].value)
            calcmoney = tmoney - (productCost * input[i].value);
        }
        sum = calcmoney
        console.log('sum',sum)
        return sum
    }
}

function makeShow(text){
    text = text.toString();
    let skip = 3
    let newText = '';
    let endText =''

    for (let i = 0; i < text.length/3; i++) {
        if (text.length%3==1 && i==0){
            newText += text.slice(0,1);
            endText=text.slice(1)
        }
        else if(text.length%3==2 && i==0){
            newText += text.slice(0,2);
            endText=text.slice(2)
        }
        else if(text.length%3==0 && i==0){
            newText += text.slice(0,3);
            endText=text.slice(3)
        }
        else{
            newText += ',' + endText.slice(skip-3,skip);
            skip = skip +3
        }
    }
    console.log('yeni texti',newText)
    return newText;
}