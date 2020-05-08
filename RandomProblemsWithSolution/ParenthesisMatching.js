// Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

function getClosingParen(sentence, OpeningParenIndex){
    let openNestedParens = 0;

    for (let position = openNestedParens + 1; position < sentence.length; i++){
        const char = sentence[position];

        if (char === '('){
            openNestedParens +=1;
        }
        else if (char === ')'){
            if (openNestedParens.length ===0){
                return position;
            }
            openNestedParens -=1;
        }
    }
    throw new Error("No closeing :(");
}
 
Complexity --- O(n), Space -O(n)