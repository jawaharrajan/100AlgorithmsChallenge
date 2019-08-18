function almostIncreasingSequence(sequence: number[]): boolean {
    let result = 0;
    for(let i =0; i < sequence.length; i++)
    {
        if(sequence[i] <= sequence[i-1]){
            result++;
            console.log(result);
            if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]){
                return false;
            }
        }
    }

    return result <= 1;
}

 console.log(almostIncreasingSequence([1, 3, 2, 1])) 
 console.log(almostIncreasingSequence([1, 3, 2])) 