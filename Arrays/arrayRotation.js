

function rotate(inputarray,rotationtimes, rotateDirection) {
    // Method 1
console.log(inputarray,'intial array');
if(rotateDirection == 'left'){
    for (let index = 0; index < rotationtimes; index++) {//1 4 7 3 2 
        inputarray.push(inputarray[index]);
        
    }
    inputarray=inputarray.slice(rotationtimes);
}
if(rotateDirection == 'right') {
for (let index = inputarray.length-1; index >inputarray.length-1-rotationtimes; index--) {
    inputarray.unshift(inputarray[inputarray.length-1]);
    inputarray.pop();
    
}
}
console.log(inputarray,rotationtimes,rotateDirection);
}

rotate([1,4,7,3,2],3, 'left');
rotate([1,4,7,3,2],3, 'right');






