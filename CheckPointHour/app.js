function maxOccur(text) {
    let array = text.split('')
    let errorMsg = 'No Repetition'
    let char = [];
    let charMax = 1;
    let temp;
    let tempChar = 1;
    let index = 0;
    for (let i=0; i<array.length; i++){
        for (let j=0; j<array.length; j++){
            if (i === j) continue;
            if (array[i] === array[j]){
                tempChar += 1;
                temp = array[i];
            }
        }
        if ((tempChar > charMax) && (!char.includes(temp)))  {
            char[index] = temp;
            index++;
            tempChar = 1;
        }
    }
    if (char.length === 0) {
        return errorMsg;
    }
    return char;
}

console.log(maxOccur("Computer Science"))
console.log(maxOccur("Edabit"))
console.log(maxOccur("system admin"))
console.log(maxOccur("the quick brown fox jumps over the lazy dog"))