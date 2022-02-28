console.log("test");

const firstLetterName = function (name){
    alert("The name " + name + " starts with the letter " + name[0]);
}

const divisibleByTwo = function(number){
    if(number % 2 === 0){
        console.log("true");
        return true;
    } else {
        console.log("false");
        return false;
    }
}

const largestNum = function(arr){
    console.log(arr);
    let comp = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > comp){
            comp = arr[i];
        }
    }
    console.log(comp);
    return comp;
}


firstLetterName("Valerie");
divisibleByTwo(17);
largestNum([5, 8, 45, 9]);