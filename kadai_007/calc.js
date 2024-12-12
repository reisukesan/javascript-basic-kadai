let num = 10;
let strAnswer;
if(num % 3 === 0){
  if(num % 5 === 0){
    strAnswer = '3と5の倍数です';
  }else{
    strAnswer = '3の倍数です';
  }
}else if(num % 5 === 0){
  strAnswer = '5の倍数です';
}else{
  strAnswer = num;
}
console.log(strAnswer);