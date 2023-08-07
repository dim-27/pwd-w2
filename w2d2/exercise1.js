//Create a function to calculate array of student data
/**The object has this following properties :
○ Name → String
○ Email → String
○ Age → Date
○ Score → Number 

Parameters : array of student
● Return values :
○ Object with this following properties :
■ Score
    ● Highest
    ● Lowest
    ● Average
■ Age
    ● Highest
    ● Lowest
    ● Average
*/

function calculateArray(arr) {
    let obj = {
        score: {
            highest: arr[0].score,
            lowest: arr[0].score,
            average: 0
        },
        age: {
            highest: Math.floor((new Date() - arr[0].age) / (365 * 24 * 60 * 60 * 1000)),
            lowest: Math.floor((new Date() - arr[0].age) / (365 * 24 * 60 * 60 * 1000)),
            average: 0
        }
    }

    let totalScore = 0
    let totalAge = 0

    for(let i = 0; i < arr.length; i++) {
        let realAge = Math.floor((new Date() - arr[i].age) / (365 * 24 * 60 * 60 * 1000));
        totalScore += arr[i].score;
        totalAge += realAge;

        if(arr[i].score > obj["score"].highest) {
            obj["score"].highest = arr[i].score;
        }
        if(arr[i].score < obj["score"].lowest) {
            obj["score"].lowest = arr[i].score;
        }
        if(realAge > obj["age"].highest) {
            obj["age"].highest = realAge;
        }
        if(realAge < obj["age"].lowest) {
            obj["age"].lowest = realAge;
        }

    }

    obj["score"].average = totalScore/arr.length;
    obj["age"].average = totalAge/arr.length;

    return obj
}

console.log(calculateArray([
    {
        name: 'Ahmad',
        email: 'ahmad@mail.com',
        age: new Date("1997-08-24"),
        score: 75
    },
    {
        name: 'James',
        email: 'james@mail.com',
        age: new Date("1999-01-12"),
        score: 60
    },
    {
        name: 'Dany',
        email: 'dany@mail.com',
        age: new Date("2004-11-04"),
        score: 95
    },
    {
        Name: 'Andi',
        Email: 'andi@mail.com',
        age: new Date("1990-01-29"),
        score: 55
    }

]))

