const evenOrOdd= prompt("pari o dispari?");
console.log(evenOrOdd)
const number= parseInt ( prompt("inserisci un numero da 1 a 5"));
console.log(number)
const computerNumber= parseInt(getRndInteger(1, 5));
console.log(computerNumber)
const winner=document.getElementById("winner");
const loser=document.getElementById("loser");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function sommaNumeri(a, b){
    return a+b;
  }

  let tot = sommaNumeri(number, computerNumber)
  console.log(tot)

  function evenOdd(sommaNumeri){
    if(sommaNumeri % 2 == 0){
        return "pari";
    }else{
        return "dispari";
    }
  }

  let check=evenOdd(tot);

  if(evenOrOdd == check){
    console.log("hai vinto!");
    winner.innerHTML=(`${tot},"Hai vinto!"`)

  }else{
    console.log("ha vinto il computer")
    loser.innerHTML=(`${tot},"Hai perso!"`)
  }