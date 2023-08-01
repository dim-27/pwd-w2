//write function to get the lowest the highest and average value in an array

function sortArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]) {
                let fill = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = fill;
            }
        }
    }
    return arr;
}



function getNoSort(arr, command) {
    let result;
    let total = 0

    for(let i = 0; i < arr.length; i++) {
        if(command == "max") {
            if(arr[i] > arr[0]) {
                arr[0] = arr[i];
                result = arr[i];
            }
        } 

        if(command == "min") {
            if(arr[i] < arr[0]) {
                arr[0] = arr[i];
                result = arr[i];
            }
        } 

        if(command == "avg") {
            total += arr[i];
        } 
    }
    if(total) {
        result = (total/arr.length).toFixed(2);
    }
    return result
}

console.log(sortArray([8, 4, 25, 10, 20, 12]));
console.log(sortArray([34, 44, 33, 5, 11]));

console.log(sortArray(getNoSort([8, 4, 25, 10, 20, 12], 'max')));
console.log(sortArray(getNoSort([34, 44, 33, 5, 11], 'min')));


// console.log(getNoSort([8, 4, 25, 10, 20, 12], 'max'));
// console.log(getNoSort([8, 4, 25, 10, 20, 12], 'min'));
// console.log(getNoSort([8, 4, 25, 10, 20, 12], 'avg'));
// console.log(getNoSort([34, 44, 33, 5, 11], 'avg'));
// console.log(getNoSort([34, 44, 33, 5, 11], 'min'));
// console.log(getNoSort([34, 44, 33, 5, 11], 'max'));




