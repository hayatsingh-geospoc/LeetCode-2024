
// Longest word in a given  sentence 


let string = "The quick brown fox jump over the lazy dog".split(' ');
let longestWord  = "";
for(let i = 0;i<= string.length-1; i++){
    if(string[i].length > longestWord.length){
        longestWord = string[i];
    }
}

console.log(longestWord)


