function getMaxLessThanK(n, k) {
    let decimalNumber = 0;
    let maxResultLessThan = 0;
    
    for(let i=1; i<n; i++) {
        console.log("i = "+i);
        for(let j=i+1; j<=n; j++) {
            console.log("j = "+j);
            decimalNumber = i & j;
            console.log("decimal number: "+decimalNumber);
            if(decimalNumber < k) {
                if(decimalNumber > maxResultLessThan) {
                    maxResultLessThan = decimalNumber;
                }
            }
        }
        
    }
    
    return maxResultLessThan;
    
}

console.log(getMaxLessThanK(5,2));
