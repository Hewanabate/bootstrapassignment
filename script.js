/* 

for(initialization; condition; afterthought) {
    statements
}

*/
/* 

for(initialization; condition; afterthought) {
    statements
}

FLOW OF FOR LOOP

1. Initializes for loop with some kind of expression. This is where we define our iterator counter.
    a. let i = 0;
    b. let j = 0;
    c. let i = someVariable;

    Note: it needs to be a number so we can do math things with it.

2. Run our for loop only if we meet our condition.
    a. i < 0;
    b. i >= someVariable.length
    c. i <= 10;

    Note: will result into a true or false

3. If we meet our condition, results in true. We run the code block. 

4. After code block executes, run afterthought. This is where we increase our iterator counter.
    a. i++
    b. i = i + 1
    c. i = i + 2
    d. i += 3

*/

/* for (let i=0; i<0; i++){
    console.log(i);
}

for (let i=10; i>0; i=--)
    {
    console.log(i);
} */

/* for (let i = 1; i < 10; i += 2) {
  console.log(i);
}
 */

/* for (let i=1; i<=10; i++){
    if(i%2===0)
    {
        console.log(i)
    }
}
 */

/* for (let i = 1; i <= 60; i++) {
    if (i % 3 == 0) {
      console.log(i);
    }
  } */

// output of multiples of 3 starts from 6 and ending at 60
/*  for (let i=6; i<=60; i+=3)
 {
    console.log(i)
 } */

/*  for (let i = 6; i<=60; i++){(i>=6)&&!(i%3)&& console.log(i);} */

/* for (let i = 1; i <= 7; i++) {
    console.log("#".repeat(i)); 
  } */

//loop that iterates from 1 to 20

// Print"prime" for all prieme numer

//print "even"for all even numbers
/* for (let i=1; i<=20; i++){
    if(i%2===0)
    console.log(i+"-Even")
} */

// print "odd" for all odd numbers
/* for (let i=1; i<=20; i++){
    if(!(i%2===0))
    console.log(i+"-ODD")
} */

// Treat 2 as an evern number and 1&3 as odd, rather than prime

// SOLUTION
//for(let i = 1; i <= 20; i++) {
// num === i
// Go through 1 to 20 and figure out which numbers are prime.
// Let's meet some of our edge cases
/* if(i === 1 || i === 3) {
        console.log(`${i} is an odd number.`)
    } else if(i === 2) {
        console.log(`${i} is an even number.`)
    } else {
        // We need to print all the primes as well evens and odds
        let isPrime = true

        for(let j = 2;  j < i; j++) {
            if(i % j === 0) {
                isPrime = false;
            }
        }

        if(isPrime) {
            console.log(`${i} is a prime number and an odd number.`)
        } else {
            // check to see if something is even
            // anything divided by 2 with a remainder of zero is an even number
            if(i % 2 === 0) {
                console.log(`${i} is an even number.`)
            } else {
                console.log(`${i} is an odd number.`)
            }
        }
    }
}
 */

//Looping over string
/* const str = "Hello World";

for (let i = 0; i < str.length; i++) 
{
	console.log(str[i]);
}
 */
//will continue to the end of the enumerable object
/* const str2='Goodbye Class';
for (const i in str2)
{
    console.log(str2[i]);
} */

//FOR ..OF
/* const str3= "Congratulations Class!";
for (const char of str3){
    console.log(char);
} */

// CONTINUE STATEMENT
/*const str4="Hello World"

 for(let i=0; i<str4.length;i++){
    if (str4[i]==='l'){
        continue;
    }
    console.log(str4[i]);
} */

/* const str5 = "Hello World";

for (const i in str5) {
	if (str5[i] == "l") {
		continue;
	}

	console.log(str5[i]);
}

for (const c of str5) {
	if (c == "l") {
		continue;
	}

	console.log(c);
} */

//WHILE LOOPS

// As long as the condition statement is true, the while loop will continue going all logic should happen inside the while loop bracket.

/* let x=0;
while(x<10){
    console.log(x)
    x++
} */

/* let x = 30
while(x > 0) {
    x /= 2;
    // console.log(x /= 2)
    x--
    // console.log(x)
    
    if(x % 1 != 0) {
        break;
    }

    console.log(x)
} */
/* 
let x = 30
for(x = x/2 - 1; x >= 0; x = x/2 - 1){
    if (x % i !=0){
        break;
    }
    console.log(x);
} */
//Count down to 0 from a given numbe
/* let x=10

while(x>0){
    console.log(x--);
} */
/* 
let x=0;
 while(x <= 100){
console.log(x);
x+=5;

 } */

//Loop over names array
/* const names = ["shamaine","Charles","Corey"];
 const greetings=[];
 for(let i=0; i<names.length;i++){
    greetings[i]=`Hello ${names[i]}!`;
    console.log(greetings[i]);
 } */
//  console.log(greetings[i]);

/* const nums = Array(2,5,18);
console.log(nums); */

/* const movies=["Caddtshack","Interstellar","Scarface"];
const firstMovie = movies[0];
movies[0]="Caddatshack 2";

movies[10]="Sherk";
console.log(movies.length);
console.log(movies); */

let x;
x = '10' + 5;
console.log(x);