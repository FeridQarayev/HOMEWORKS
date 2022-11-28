// 1
function fullN(fullNa){
    console.log(fullNa);
}
fullN('Zalimov Nerbala');

// 2
let fullName=(firstName,lastName)=>{
    return `${firstName} ${lastName}`;
}
console.log(fullName('Nerbala','Zalimov'));

// 3
function perimeterOfRectangle(length,width){
    return 2*(length+width);
}
console.log(perimeterOfRectangle(2,4))

// 4
function BMI(kg,height){
    let bmi=kg/(height*height);
    // console.log(bmi);
    if(bmi<18.5){
        console.log('BMI is less than 18.5')
    }
    else if(bmi<=24.9){
        console.log('BMI is 18.5 to 24.9')
    }
    else if(bmi<=29.9){
        console.log('BMI is 25 to 29.9')
    }
    else{
        console.log('BMI is 30 or more')
    }
}
BMI(65,1.90);

// 5
function findMax(num1,num2,num3){
    return Math.max(num1,num2,num3);
}
console.log(findMax(0,-10,-5));

// 6
function reverseArray(array){
    var rev=new Array;
    for(i=0;i<array.length;i++){
        rev.push(array[array.length-1-i])
    }
    return rev;
}
console.log(reverseArray([1,2,3,4,5,9,10,35]));

// 7
let pow=(x,n)=>{
    return Math.pow(x,n);
}
console.log(pow(1,100))