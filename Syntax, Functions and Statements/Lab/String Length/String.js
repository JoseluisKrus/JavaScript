function printNumber(word1, word2, word3){
    let sum = word1.length + word2.length + word3.length;
    let avg =Math.floor(sum/3);
    console.log(sum);
    console.log(avg);
}
printNumber('Hello', 'JavaScript', 'World');