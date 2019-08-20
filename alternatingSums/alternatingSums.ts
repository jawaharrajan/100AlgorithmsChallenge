function alternatingSums(a: number[]): number[] {
    let retVal: number[] = [];
    let atot: number = 0;
    let btot: number = 0;

    for(let i = 0; i < a.length; i++){
        if (i % 2 !== 0){
            atot += a[i];
            console.log(atot);
        } else {
            btot+= a[i];
            console.log(btot);
        }
    }
    retVal.push(btot);
    retVal.push(atot);
    return retVal;
}

console.log(alternatingSums([50, 60, 60, 45, 70]))
console.log(alternatingSums([1,2,3,4,5,6,7,8,9]))