
function switchVal(arr) {
    let newArr = []
    let obj = {}

    for(let i = 0; i < arr.length; i++) {
        let arrObject = arr[i]
        for(let key in arrObject) {
            let value = arrObject[key];
            obj[value] = key;
        }
        newArr.push(obj);
    }

    return newArr;
}

console.log(switchVal([
    { name: "David", age : 20 },
]
));