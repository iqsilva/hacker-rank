function miniMaxSum(arr) {
    // Write your code here
    var sortArr = arr.sort((a,b) => a - b)
    let minSum = 0;
    let maxSum = 0;
    for(let i=0; i < sortArr.length-1 ; i++){
        minSum += sortArr[i];
    }
    for(let j=1; j < sortArr.length; j++){
        maxSum += sortArr[j];
    }
    console.log(minSum + " " + maxSum);
}
