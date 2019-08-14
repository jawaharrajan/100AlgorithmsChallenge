function addTwoDigits(n: any): number {

    let s: string = n.toString();
    let ss: string[] = s.split("");
    let nReturn: number =0;

    ss.forEach((el)=>{
        nReturn += parseInt(el);
    });
    return nReturn;
}

console.log(addTwoDigits(99));