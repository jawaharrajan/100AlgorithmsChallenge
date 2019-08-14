function adjacentElementsProduct(inputArray: number[]): number {
    let nReturn: number = 0;
    let inputArrayLength: number = inputArray.length;
    let nRet: number[] = []

    for(var i = 0; i < inputArray.length;i++){
        nRet[i] = inputArray[i] * inputArray[i+1];
        //console.log(nRet);
        nRet.sort((n1,n2) => n2 - n1);
        //console.log(nRet);
    }
    return nRet[0];
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));