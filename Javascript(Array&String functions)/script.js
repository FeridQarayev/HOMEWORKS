let arr=[1, 73, 99, 20,19]

// 1
let getFirst =(array,indexx)=>{
    return array.filter((_,index)=>index<=indexx-1);
}
console.log(getFirst(arr,1))

//2
let join=(array,simvol)=>{
    return array.join(simvol)
}
console.log(join(arr,'*'))

//3
function Swap(param){
    let words=param.split(' ')
    return words.map((item)=>{
    return item.slice(0,1).toLowerCase()+item.slice(1).toUpperCase();
}).join(' ')
}
console.log(Swap('Salam Necesen Aleykum'))

// 4
function clear(array){
    return array.filter(item=>item!=null&&item!=undefined&&item)
}
console.log(clear([1, 73, 99, 20,19,null,undefined,false,""]))

// 5
function clearDuplicate(array){
    return array.filter((value,index)=>array.indexOf(value)===index)
}
console.log(clearDuplicate([1,4,8,4,true,9,",",true]))

// 6
function isEqual(array1,array2){
    return array1.length === array2.length && array1.every((value, index)=>{return value === array2[index]})
}
console.log(isEqual([1,2,3],[1,2,3]))
