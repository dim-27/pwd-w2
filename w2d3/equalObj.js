//Create a function to check if two objects are equal

function isObjEqual(obj1, obj2) {
    // let obj1Prop = Object.getOwnPropertyNames(obj1);

    let objKey1 = Object.keys(obj1);
    let objKey2 = Object.keys(obj2);
    // console.log(objKey1);
    if(objKey1.length !== objKey2.length) {
        return false;
    } else {
        for (let i = 0; i < objKey1.length; i++) {
            if(obj1[objKey1[i]] === obj2[objKey2[i]]) {
                return true;
            } else {
                return false;
            }
        } 
    }
    
}


console.log(isObjEqual({"a": 1, "b": 2}, {"a": 2, "b": 2}));
console.log(isObjEqual({"a": 2, "b": 2}, {"a": 2, "b": 2}));
console.log(isObjEqual({"a": 2, "b": 1}, {"a": 1, "b": 2}));