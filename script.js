
const firstLetterName = function (name){
    alert("The name " + name + " starts with the letter " + name[0]);
}

const divisibleByTwo = function(number){
    if(number % 2 === 0){
        return true;
    } else {
        return false;
    }
}

const largestNum = function(arr){
    let largestNumber = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largestNumber){
            largestNumber = arr[i];
        }
    }
    return largestNumber;
}


firstLetterName("Valerie");
console.log("The number 17 is divisible by two: " + divisibleByTwo(17));
console.log(largestNum([5, 8, 45, 9]));