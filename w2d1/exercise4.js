//Write a function to calculate each element in the same position from two arrays of integer.Assume both arrays are of the same length.`

function sumArrays(arr1, arr2) {
    let newArr = [];
    let result = 0;

    for(let i = 0; i < arr1.length; i++) {
        result = arr1[i] + arr2[i];
        newArr.push(result);
    }

    return newArr;
}

console.log(sumArrays([1, 2, 5], [3, 2, 1]))
console.log(sumArrays([7, 2, 5, 4], [3, 1, 1, 2]))