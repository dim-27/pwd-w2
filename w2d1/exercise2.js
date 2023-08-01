//write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.

function listWords(arr) {
    let result = ""
    for(let i = 0; i < arr.length; i++) {
        if(i !== arr.length - 1 && i !== arr.length - 2) {
            result += arr[i];
            result += ", ";
        } else if( i == arr.length - 2) {
            result += arr[i];
            result += " and ";
        } else {
            result += arr[i];
        }
    }
    return result;
}

console.log(listWords(["Dimas", "Andi", "Ahmad", "Andy", "Thomas"]));
console.log(listWords(["Nala", "Ayeesha"]));