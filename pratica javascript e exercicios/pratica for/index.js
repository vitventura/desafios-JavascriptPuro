let spaceShip = prompt("informe o nome da nave:")
let charToReplace = prompt("qual caractere voce deseja substituir?")
let replacementChar = prompt("por qual caractere deseja substituir?")
let newSpaceship = ""
for(let i = 0; i < spaceShip.length; i++){
    if(spaceShip[i] === charToReplace){
        newSpaceship += replacementChar
    }else{
      return  newSpaceship += spaceShip[i]
    }
}