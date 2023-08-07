//function to get an intersection of two objects

function isObjInt(obj1, obj2) {

    let objKey1 = Object.keys(obj1);
    let objKey2 = Object.keys(obj2);
    // console.log(objKey1);
    let newObj;

    if(objKey1.length !== objKey2.length) {
        return false;
    } else {
        for (let i = 0; i < objKey1.length; i++) {
            if(obj1[objKey1[i]] === obj2[objKey2[i]]) {
                newObj = {
                    objKey1: obj1[objKey1[i]]
                };
                return newObj;
            }
        } 
    }
}


console.log(isObjInt({"a": 1, "b": 2}, {"a": 1, "b": 3}));
console.log(isObjInt({"a": 3, "b": 2}, {"a": 1, "b": 2}));