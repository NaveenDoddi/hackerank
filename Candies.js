// function candies(n, arr) {
//     // Write your code here
//     var sum = 0;
//     var arrr = []
//     var count = 0
//     for(let i=0; i<n; i++){
//         if(arr[i] <= arr[i+1]){
//             count = 1
            
            
//         }
//         else{
//             count++ 
//             if (arr[i+1] <+ arr[i+2]){
//                count = 1
//                count++
//             }
            

//         }
//         sum += count
//         arrr[i] = count
//         // console.log(arr[i]<arr[i+1])
//         console.log(arrr)
        
        
//     }
// return sum
// }


var a = [3,3,5,9,9]
var count = 1
var sum = 0
for(let i=0; i<a.length; i++){
    for(let j=0; j<count; j++){
        console.log(a[j])
    }
    count++
}