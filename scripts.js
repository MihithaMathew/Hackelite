console.log("hello world");
console.log(document)

//let username=window.prompt("enter you name")
//console.log(`helloo ${username}`);

var a =10;  //fexible ,will change whenever it is changed
let b=20;   // semi fexible, wil change in if statements , but outside remains the same
const c= 30;  // constant, cannot be changed

if(true) {
    var a =40;
    let b=50;
   // console.log(a);
   // console.log(b);

}
console.log(a);
console.log(b);
let name = "alice";
let age=25;
let isStudent=true;
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log("")
let y="21"
console.log(typeof y);
let x=Number(y);
console.log(typeof x);

//conditional operation if else
age = 20;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

let grade = "B";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  default:
    console.log("Needs Improvement");
}

let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

//function in javascript
/*function add(a, b) {
    return a + b;
  }
  console.log(add(5, 3));


let text="the rain in spain"
let pattern=/rain/;

if(pattern.test(text)){ //to check whether the pattern is there in the statement
console.log("match found")
console.log(text.match(pattern)); // ['rain'
}
else{
console.log("no match")
}
*/

let text = "The in Spain falls mainly in the plain";

let pattern=/^[a-z0-9]+@[a-z]+\.com$/;


const email = document.getElementById("email");
console.log(email);
//console.log(email.value);

const submit = document.getElementById("validate");
submit.addEventListener("click", function(){
    const result = document.createElement("p");
    if(email.value.match(pattern)){
        console.log("Email is valid");

        
        result.innerText="Email is valid";
        result.style.backgroundColor="green";
        result.style.color="white";
        document.body.appendChild(result);
        

    }
    else{
        
        result.innerText="Email is invalid";
        result.style.backgroundColor="red";
        result.style.color="white";
        document.body.appendChild(result);
    }
})

//document.querySelectorAll("p")


const listElements = document.querySelectorAll("li");

for (let element of listElements){
    element.style.backgroundColor = "blue";
}