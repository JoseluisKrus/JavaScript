function solved(numbers) {
    const result = [];
  
    for(let num of numbers){
        if (num <0){
            result.unshift(num);
        }
        else{
            result.push(num);
        }
    }
    
    console.log(result.join('\n'))
      
  }