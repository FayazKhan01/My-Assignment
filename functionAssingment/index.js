// Q 1

function numberReverse(num = 322423){
    var n =parseFloat ( num.toString().split("").reverse().join("")) * Math.sign(num);
    document.write(n + "<br><br>"); 
    console.log(n);
}
numberReverse(-654321);

// Q 2

function palindrome(str = prompt("Enter any palindrome value")){
    var p = str.split('').reverse().join('');
    if (str === p){
        document.write("Yes the entered value " +"'"+ str+"'"+ " is palindrome.<br><br>" )
    }else {
        document.write("No, " +"'"+ str+"'"+ " is not palindrome. <br><br>")       
    }
}
palindrome();

// Q 3

function combinations(strr){
    var d = strr.

combinations("dog");}

// Q 4

function alphabatical(letters){
    let l = letters.split('').sort().join('');
    document.write(l +" <br><br> ");

}
alphabatical("webmaster");

// Q 5

function firstLetterCapital(capital){
    let first =capital.split(" ");
    for (var i=0; i<first.length ; i++){
    
        first[i] = first[i][0].toUpperCase() + first[i].substring(1);
    }
    var f = first.join(" ");
    document.write(f + "<br><br>");
}
firstLetterCapital("the quick brown fox jump over the wall.");

// Q 6 

function findLongestWord(sttr){
    var long = sttr.split(" ")
    var longestWord = long[0];
    var word ;

    for (var i= 0 ; i < long.length ; i++){
        if (longestWord < long[i].length){
           longestWord = long[i].length;
            word = long[i];
        }   
 }
    return word ;
}
document.write(findLongestWord("Hh this is an apples ") +" <br><br> ");

// Q 7 

function vowelsCount(vowel){
    var vowels = "aeiouAEIOU";
    var vWords = 0 ;
    for (var i = 0 ; i < vowel.length ; i++){
        if (vowels.indexOf(vowel[i]) !== -1){
            vWords ++;

        }
    } 
    return vWords;
}
document.write("Total vowels in the given sentence "+  " are " + vowelsCount("Hi i am an engineer")+" <br><br> ");

// Q 8

var n ;
function primeNo(n){
    for (var i = 2 ; i < n ; i ++ ){
        if (n % i === 0 )
            return false ;
            return n > 1 ;
    }
}
document.write(n + " is not a prime number " + primeNo (n = +prompt("Enter any  number ")) +" <br><br> ");
// console.log(n + " is not a prime number " + primeNo (n = +prompt("Enter any  number ")) +" <br><br> ");

// Q 9 Return data type

function checkDataType(value){
var datatypes = [ Function, String, Boolean, Number, Object ];
    if ( typeof value === datatypes){
        for (var i= 0 ; i < datatypes.length ; i++){
            if (value instanceof datatypes[i]){
                return datatypes[i];
            }
        }
    }
    return typeof value;
}
document.write(checkDataType("this is a laptop" ) + "<br><br>");
console.log(checkDataType(3) + "<br><br>");

// Q 10 


function secondGreatestAndLowestNo(){
    var soretdArr = num.sort();
var result = [];

    result.push(soretdArr[1],num[num.length-2]);

    return result;

}
document.write( "Second Greatest and Lowest No are : "+ secondGreatestAndLowestNo ( num = [1,2,4,5,7,9,6]));
console.log(secondGreatestAndLowestNo ( num = [1,2,4,5,7,9,6]));

