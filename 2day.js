//IF ELSE
function getGrade(score) {
    let grade;
    // Write your code here
    if (25 < score && score <= 30){
        grade = "A"
    }
    if (20 < score && score <= 25){
        grade = "B"
    }
    if (15 < score && score <= 20){
        grade = "C"
    }
    if (10 < score && score <= 15){
        grade = "D"
    }
    if (5 < score && score <= 10){
        grade = "E"
    }
    if (0 < score && score <= 5){
        grade = "F"
    }
    return grade;
}

//

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here
    switch (true) {
        case 'aeiou'.includes(s[0]):
            letter = "A";
            break;
        case 'bcdefg'.includes(s[0]):
            letter = "B";
            break;
        case 'hijklm'.includes(s[0]):
            letter = "C";
            break;
        case 'nopqrstuvwxyz'.includes(s[0]):
            letter = "D";
            break;
        default:
            console.log("Default switch.");
    }
    return letter;
}

//
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
     var vowels = "aeiou";
    var consonants = "";

    for (var i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        } else {
            consonants += s[i] + '\n';
        }
    }
    console.log(consonants.trim());

}
