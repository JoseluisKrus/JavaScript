function squareOfStars(n){
    let string = "";
    if(n==null){
        n = 5;
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
               string +="*";
            }
            string += "\n";
        }
    }else {
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
               string +="*";
            }
            string += "\n";
        }
    }
    console.log(string);
}
squareOfStars();
