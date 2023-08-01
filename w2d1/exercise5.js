//Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.

function addArray(arr, num) {    
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === num ) {
            return arr;
        } 
    }
    arr.push(num);
    return arr;
}

console.log(addArray([1, 2], 3));
console.log(addArray([1, 2], 2));
console.log(addArray([1, 2], 1));


