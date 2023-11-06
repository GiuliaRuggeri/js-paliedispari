let word = prompt("inserisci la parola");
const palinDrome = document.getElementById("palindrome");


function palindrome(palindromeWord) {


    let reverseWord = "";

    for (let i = palindromeWord.length - 1; i >= 0; i--) {
        console.log(palindromeWord)
        reverseWord += palindromeWord[i];

    }

    console.log(reverseWord)

    if (palindromeWord == reverseWord) {

        return true;

    } else {
        return false;
    }
}

palindrome(word)


if(palindrome(word) == true){
    console.log("la parola è palindroma");
    palinDrome.innerHTML=(`${word}, la parola è palindroma`);


}else{
    console.log("la parola non è palindroma")
    palinDrome.innerHTML=(`${word}, la parola non è palindroma`);
}