function bigger(arr) {
    let size = arr.length;
    if (size%2 ==1){
        size=Math.floor(size/2);
    }else{
        size = size/2;
    }
   let result = arr.sort((a,b)=> a-b).slice(size, arr.length);
  return result;
}