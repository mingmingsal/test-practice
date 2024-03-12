function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
}
function reverseString(word) {
    return word.split('').reduce(function (reverse, letter) {
        reverse = letter + reverse;
        return reverse;
    }
        , "")
}
function calculator(operator, val1, val2) {
    switch (operator) {
        case "add":
            return val1 + val2;
        case "subtract":
            return val1 - val2;
        case "divide":
            return val1 / val2;
        case "multiply":
            return val1 * val2;
        default:
            return "invalid operation";
    }
}
function caesarCypher(string, shift) {
    let newString = "";
    
    for(let i =0;i<string.length;i++){
        string = string.toUpperCase();
        let wrapLettersCode = (string.charCodeAt(i)+shift-65)%26 + 65;
        if(string.charAt(i).toUpperCase() !== string.charAt(i).toLowerCase()){
            newString += String.fromCharCode(wrapLettersCode).toUpperCase();
        }
        else newString += string.charAt(i);
        
    }
   
}
function analyzeArray(arr) {
    return {
        length: arr.length,
        average: arr.reduce((total,cur) => total += cur)/arr.length,
        min:  arr.reduce((minimum,cur)=>{
            if(minimum>cur) minimum = cur;
            return minimum;
        }),
        max: arr.reduce((maximum,cur)=>{
            if(maximum<cur) maximum = cur;
            return maximum;
        })
    }
}
module.exports = { caesarCypher, capitalize, reverseString, calculator, analyzeArray };