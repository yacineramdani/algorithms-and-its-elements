let str = "At this checkpoint, you are asked to write an algorithm that read a sentence."
const sentenceRead = (str) => {
    return str
}
console.log(sentenceRead(str));
let wordCount = str.match(/(\w+)/g).length;
console.log(wordCount); 
const vowels= ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
const countVowels = (str) => {
   let count = 0;

   for (let letter of str) {
       if (vowels.includes(letter)) {
           count++;
       }
   }

   return count; 
}
console.log(countVowels(str));