function fatorial (num){
  console.log("numero:" + num)
  if (num === 0){
    return 1
  }else if (num === 1){
  return 1
  }else{
    console.log (num + "* !" + (num - 1))
    return num * fatorial(num - 1)
  }
}console.log(fatorial(70))
//e uma funçao que pode se chamar infinitamente!