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

// Task 2: Object Manipulation

const books = [
    { title: "Ekattorer Dinguli", author: "Jahanara Imam", year: 1986 },
    { title: "Padma Nadir Majhi", author: "Manik Bandopadhyay", year: 1936 },
    { title: "Lalsalu", author: "Syed Waliullah", year: 1948 },
    { title: "Aparajito", author: "Bibhutibhushan Bandyopadhyay", year: 1932 },
  ];
  


  function getBookTitles (boookArry){
    return boookArry.map(book=> book.title);
  }


const bookTitles= getBookTitles(books);

console.log(bookTitles)


// Task 3: Function Composition

function square(number){
 return number * number;
}


function double(number){
    return number * 2;

}

function addFive(number){
    return number + 5;
}



// Composed function
function composedFunction(number){
   const squared= square(number);
   const doubled=double(squared);
   const  finalResult=addFive(doubled);
   return finalResult; 
}


console.log(composedFunction(3));


// Task 4 : Sorting Objects
const cars=[
    { make: "Toyota", model: "Corolla", year: 2010 },
    { make: "Honda", model: "Civic", year: 2005 },
    { make: "Ford", model: "Fiesta", year: 2018 }
  ]



  function sortCarsByYear(carsArray){
     return carsArray.sort((a,b)=> a.year - b.year);
  }


  console.log(sortCarsByYear(cars));

//   Task 5: Find and Modify


const peoples = [
    { name: "Rafiq", age: 25 },
    { name: "Jamil", age: 30 },
    { name: "Karim", age: 35 },
  ];
  
  
  function updatePersonAge(array, name, newAge) {
    // Loop through the array to find the person
    const person = array.find((p) => p.name === name);
  
    if (person) {
      // Update the age if the person is found
      person.age = newAge;
      console.log(`${name}'s age has been updated.`);
    } else {
      console.log(`${name} was not found.`);
    }
  
    // Print the updated array
    console.log(array);
  }
  
  // Step 3: Call the function
  updatePersonAge(peoples, "Jamil", 32); 
  updatePersonAge(peoples, "Eve", 28); 
  