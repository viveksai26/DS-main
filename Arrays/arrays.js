

function rotate(inputarray, rotationtimes, rotateDirection) {
  console.log(inputarray, "intial array");
  if (rotateDirection == "left") {
    //right to left rotation
    for (let index = 0; index < rotationtimes; index++) {
      inputarray.push(inputarray[index]);
    }
    inputarray = inputarray.slice(rotationtimes);
  }
  if (rotateDirection == "right") {
    //left to right rotation
    for (
      let index = inputarray.length - 1;
      index > inputarray.length - 1 - rotationtimes;
      index--
    ) {
      inputarray.unshift(inputarray[inputarray.length - 1]);
      inputarray.pop();
    }
  }

  console.log(inputarray, rotationtimes, rotateDirection);
}
function isPalindrome(plaindrome) {

    for(let index=0 ; index<plaindrome.length/2 ; index++){
        if(plaindrome[index]!=plaindrome[plaindrome.length-1-index]){
            return false;
        }
    }
    return true;
}

// console.log(isPalindrome("mom"));
// rotate([1, 4, 7, 3, 2], 3, "left");
// rotate([1, 4, 7, 3, 2], 3, "right");






