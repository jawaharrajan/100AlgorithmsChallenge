function allLongestStrings(inputArray: string[]): string[] {
    let strRet: string[] = [];
    let longestString: number = 0;

    inputArray.forEach((word: string)=>{
        longestString = longestString < word.length ? word.length : longestString;
    });

    inputArray.forEach((word: string)=>{
        if (word.length === longestString){
            strRet.push(word);
            //console.log(strRet);
        }        
    });
    return strRet;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));