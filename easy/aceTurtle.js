// U have to print false if any element in array is <5 with out using if condition use high other function forEach is preferred
// Write a call back function code [conditions]
// Add 2 no in such a way that 1no is outside the scope of other function
// What is promise
// If node js is single-threaded then how it handles multiple requests
// Add all elements in the array using reduce function
// Many many more etc


// first question answer

let arr =[ 6,7,9,3,4,12];
let result = true;

arr.forEach((data)=>{
  result = result && data < 5;
});

console.log(result)


// call back functions

let a = (b)=> {
    b()
    console.log('a');
   
};

let b = ()=>{
  setTimeout(()=>{
    console.log('b')
  }, 3000) 
};


a(b)

