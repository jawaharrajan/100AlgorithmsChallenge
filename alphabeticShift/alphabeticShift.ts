function alphabeticShift(inputString: string): string {
    let strToReturn: string = "";
  
    inputString.split("").forEach((letter: string)=>{
        //console.log(letter.charAt(0));
        //console.log(letter.charCodeAt(0));
        //console.log(letter.charCodeAt(0) + 1);
        //console.log(String.fromCharCode(letter.charCodeAt(0) + 1));

        strToReturn += (letter.charAt(0) === "z" ? "a" :
            String.fromCharCode(letter.charCodeAt(0) + 1));
    });

    return strToReturn;
}

console.log(alphabeticShift('crazy'));