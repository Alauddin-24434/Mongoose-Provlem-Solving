// Task 1: Array Filtering and Mapping

const people=[
    {
        name:"Alauddin",
        age:"25",
        gender:"male",
    },
    {
        name:"Tamanna",
        age:"23",
        gender:"female",
    },
    {
        name:"Tanvir",
        age:"26",
        gender:"male",
    },
] 



const males= people.filter(person=> person.gender=== "male")

const maleNames= males.map(person=> person.name)



console.log(maleNames)