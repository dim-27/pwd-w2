//Write a function to split a string and convert it into an array of words

function wordsToArray(words) {
    let newArr = [];
    let fill = "";
    for(let i = 0; i < words.length; i++) {
        if (words[i] !== " ") {
            fill += words[i];
        }
        if(words[i] === " " || i === words.length - 1 ) {
            newArr.push(fill);
            fill = "";
        }
    }
    return newArr;
}





console.log(wordsToArray("Hello World My Name Is James"));
