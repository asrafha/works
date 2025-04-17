//q1
//יהיה alert 

//q2
let a = (prompt("what the name of Java script"))
if (a == "ECMAScript") {
  console.log("correct")
} else {
  console.log("are you not know ? is a ECMAScript")
}

//q3
let score = 95;

let grade = (score >= 90) ? "A" : (score >= 80) ? "B" : (score >= 70) ? "C" : (score >= 60) ? "D" : "F";
console.log(grade)

//q4
let b = (prompt("right a number "))
if (b > 0) {
  console.log(1)
} else if (b < 0) {
  console.log(-1)
} else if (b == 0) {
  console.log(0)
}

//q5
let result = (a + b < 4) ? "not enough" : "A lot ";
console.log(result)

//q6 

let login = (prompt("enter login ")) 
let message = (login == 'Employee') ?  'Hello' : (login == 'Director') ? 'Hello' : (login == '') ?  'No login' :  '';
console.log(message)



//q7 
console.log(false || 'jjj');   -- jjj
console.log(false && '');   ---  false
console.log(true || '')   --- true
console.log(true && '')  ---  ' '
console.log(undefined || null)   ---null
console.log(undefined || null || 0)   ---0 
console.log(undefined && 0 && null) ----null
console.log(1 || 0) --- 1
console.log(null || 1)  ----1
console.log(null || 0 || 1)  ----- 1