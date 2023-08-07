//Create a function to merge two array of student data and remove duplicate data

function merArr(student1, student2) {
    let newArr = [];

    for(let i = 0; i < student1.length; i++) {
        // console.log("gaada ===> ", obj[student1[i].email]);
        let obj = {};
        obj.name = student1[i].name;
        obj.email = student1[i].email;
        newArr.push(obj)

        obj = {};
        obj.name = student2[i].name;
        obj.email = student2[i].email;
        newArr.push(obj)
        // for(let j = i; j < student2.length; j++) {
            // if(student1[i].email === student2[j].email) {
            //     obj.name = student2[j].name;
            //     obj.email = student2[j].email;
            //     newArr.push(obj)
            // } else   {
            //     obj.name = student2[j].name;
            //     obj.email = student2[j].email;
            //     newArr.push(obj)
            //     obj = {};
            // }
            // obj.name = student1[j].name;
            // obj.email = student1[j].email;
            // newArr.push(obj)
            // obj = {};
        // }    
    }
    
    let objName = {};
    let objMail= {};

    let result = [];

    for(let i = 0; i < newArr.length; i++) {
        let keyMail = newArr[i].email;
        let keyName = newArr[i].name;

        if(objMail[keyMail] === undefined || objName[keyName === undefined]) {
            objMail[keyMail] = 0;
            objName[keyName] = 0;
        }
        objMail[keyMail]++
        objName[keyName]++


        if(objMail[keyMail] < 2 && objName[keyName] < 2) {
            let objResult = {
                name: newArr[i].name,
                email: newArr[i].email
            }
            result.push(objResult);
        }
    }

    // console.log(newObj);
    return result;

    // for (let i = 0; i < newArr.length; i++) {
    //     let result = []
    //     let newObj = {};
    //     for(let j = i+1; j < newArr.length; j++) {
    //         if(newArr[i].name !== newArr[j].name) {
    //             newObj.name = newArr[j].name;
    //             newObj.email = newArr[j].email;
    //             result.push(newObj)
    //             newObj = {}
    //         }  

    //         if(newArr[i].name === newArr[j].name) {
    //             newObj.name = newArr[j].name;
    //             newObj.email = newArr[j].email;
    //             result.push(newObj)
    //             newObj = {}
    //         }  
               
    //     }
    // }
    // return result;

}

console.log(merArr([
    { name: "Student 1", email : "student1@mail.com" },
    { name: "Student 3", email : "student3@mail.com"}
],
[
    { name: "Student 2", email : "student2@mail.com" },
    { name: "Student 3", email : "student3@mail.com"}
] 
));

console.log(merArr([
    { name: "Student 2", email : "student2@mail.com" },
    { name: "Student 3", email : "student3@mail.com"}
],
[
    { name: "Student 2", email : "student2@mail.com" },
    { name: "Student 3", email : "student3@mail.com"}
] 
));

console.log(merArr([
    { name: "Student 3", email : "student3@mail.com" },
    { name: "Student 3", email : "student3@mail.com"}
],
[
    { name: "Student 3", email : "student3@mail.com" },
    { name: "Student 3", email : "student3@mail.com"}
] 
));