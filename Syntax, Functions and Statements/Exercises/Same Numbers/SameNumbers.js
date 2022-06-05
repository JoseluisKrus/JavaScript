function equal(a){
     let numbers = a.toString().split('');
     let sum = Number(numbers[0]);
     let isSame = true;
        for (let index = 1; index < numbers.length; index++) {
            sum += Number(numbers[index]);
           if(numbers[index] != numbers[index -1]){
               isSame = false;
           }
        }
    console.log(isSame);
    console.log(sum);
}
 equal(111);