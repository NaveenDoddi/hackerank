let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
var s = aabbcd
function isValid(s) {
    // Write your code here
    var count = 1
    var arr = []
    var arr2 = s.split("")
    for (let i =0; i<arr2.length; i++){
        for(let j=i+1; j<arr2.length; j++){
            if(arr2[i]==arr2[j]){
                count++
                arr2.splice(j, 1);
            }
        }
        arr.push(count)
        count = 1
        
    }
    console.log(arr2)
    var count1 = 0
    // var arr1 = arr.sort(a,b=>(a-b))
    var max = Math.max(...arr)
    for (let i=0; i<s.length; i++){
        if (max==arr[i]){
            count1++
            
        }
    }
    max=max-1;
    var count2 = 0;
    for (let i=0; i<s.length; i++){
        if(max==arr[i]){
            count2++
            
        }
    }
    console.log(count1, count2)
    if (count1==Math.floor(s.length/2) || count2==Math.floor(s.length/2)){
        return 'YES'
    }else{
        return 'NO'
    }
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = isValid(s);

    ws.write(result + '\n');

    ws.end();
}