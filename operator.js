/* today we ar going to discuss about operators. */
// These are the arithmetic operators:
//  +, // Addition
//  -, // Subtraction
//  *, // Multiplication
//  /, // Division
//  %, // Modulus
//  ++, // Post and Pre Increment
//-- // Post and Pre Decrement

/* lets dicuss them one by one.  */
console.log(2 + 3); /* addition of two numbers  */
console.log(5 - 2); /* subraction of two numbers. */
console.log(5 * 2); /* multiplication of two numbers */
console.log(10 % 2); /* which is modulos and gives remainder as the about */
console.log(
  10 / 2
); /* which is division here it will give quotient as the output */
/* now lets discuss about post increment and pre increment */
var a = 10; /* intially declare a variable as follows */
console.log(
  ++a /* here output will be 11 */
); /* it is pre-increment means increment by 1 first  and use later */

/* lets see similarly post increment as well */
var b = 20;
console.log(
  b++ /* here the output will be 20 only. */
); /* here it is post increment means use the number first and later increment by 1 */
console.log(b); /* here the output will be 21 as it was incremented by 1. */

/* similarly pre -decrement and post decrement will work as same. */
var a = 10;
console.log(
  --a
); /* here the output will be 9 as it is pre-decrement means decrease by 1 and use later. */
var b = 30;
console.log(
  b--
); /* here the output will be 30 only as it is posy decrement the will be used first and decremented by 1 later. */

/* now we hav Assignment operators as well lets look into them as well accordingly */

//  +=
// var sum += value
// This is a shorthand for var sum = sum + value
// Similarly,
// -=,/* var sum-=value and it is also equivalent to sum=sum-value*/
// *=, /* var sum*=value and it is also equivalent to sum=sum*value*/
// /=,/* var sum/=value and it is also equivalent to sum=sum/value*/
// %=/* var sum%=value and it is also equivalent to sum=sum%value*/

// these are all the assignment operators.

/* lets moving forward we have Comparision operators. lets look into them as well */

// Comparison Operators: ==, ===, !=, !==, <, <= , >, >=
// Logical Operators: &&, ||, !
// Ternary Operator: “(condition)? //expression for true : //expression for false

/* in the aboove we are aware of ternary operator  */
// syntax for ternary operator
// (Condition)?'true part':'false part';

console.log(
  10 > 5 ? "true part" : "false part"
); /* here the output will be true part as 10>5 */

/* lets look into comparision operator. */
// ==: here it will only check the value it wont look into the data type. lets see
if (10 == "10") {
  console.log(
    "equal"
  ); /* here the output will be equal as == will look only into the value it wont matter whatever the data type will be. */
}

// ===:here it will look into both value and the data type as well if they are same then it will print true otherwise false will be printed.
if (10 === "10") {
  console.log("equal");
} else {
  console.log("not equal");
} /* here not equal will be printed in the console as === will look both data type and value . */

if ("10" === "10") {
  console.log("equal");
} else {
  console.log("not equal");
} /* here the output in the console will be equal as both data type and values are same. */

// then we have something called as !=,!== here the operators will be indicating not equal but != this will only look into value while !== will look both value and the datatype as well.lets see
if (10 != "10") {
  console.log("true");
} else {
  console.log("false");
} /* here the output will be false but according to us what will be output true as we know they both are not equal always remaind  this != will only check value.*/

if (10 !== "10") {
  console.log("true");
} else {
  console.log("false");
} /* here the output will be true as this !== will check both value and data type. */

//  <: it is less than operator.
//  >: it is greater than operator.
//  <= it is less than or equal to.
//  >= it is greater than or equal to.

/* then we have something called as logical operators as well. */

//  && : it is for logical and operation as we know and operator will return true if both the conditions are true.
if (10 > 5 && 10 > 6) {
  console.log("true");
} else {
  console.log("false");
} /* here the output in the console will be true as 10> 5 will be true and 10>6 will be true then operator will be true. */

if (10 < 5 && 11 > 5) {
  console.log("true");
} else {
  console.log("false");
} /* here the output will be false as 10<5 will be false and 11>5 will be true and true and false in operator will return false. remind onething always an logical && operator will always true if both the conditions are true. */

//  || : it is for loical OR  operator and it will return  ture if one of the specifed condition true.

if (10 < 5 || 10 > 6) {
  console.log("true");
} else {
  console.log("false");
} /* here the output in the console will be true and logical OR operator will return true if one of the condtion is true. */

/* lets moving forward we are going to learn about coercion. 
coercion meand converting of one data type into another data type. 
it can be done in two ways.
1.implicit coercion : here coercion will be automatically done 
2.explicit coercion: here it is done by programatically  by us.*/

/* moving forward we are going to learn about Objects.
Objects are nothing collection of properties.
lets take an example a car 
car: object
properties of car. 
1.car brand.
2. color
3.model
4.speed.
5.mailage. etc.. these are all properties. */

/* syntax for obj
{
    prop1:val1,
    prop2:val2,
    prop3:val3,
    ......etc.
} */
/* lets create an object  */
var car = {
  name: "rolls riose",
  brand: "american",
  price: 500000,
  speed: "25kmp/h",
  mailege: "17/lt",
};
console.log(car); /* printing an object in the console. */
console.log(typeof car); /* in the output the datatype of car will be object. */
console.log(car.name); /* accesing properties of car. */
console.log(car.price);

/* we can also have any type of data type inside an object as well.lets look into them as well */
var student = {
  name: "ramakanth",
  age: 20,
  gender: "male",
  marks: {
    maths: 50,
    science: 75,
    computer_science: 95,
  },
  address: {
    street: "road1",
    village: "Atp",
    zipcode: 515003,
    state: "Andhra pradesh",
  },
};
console.log(student); /* here the output will be student object */
console.log(
  student.marks
); /* here the output will marks object which is inside student object. */
console.log(
  student.marks.maths
); /* here the console will be marks of maths of student object. */
console.log(
  student.marks.science
); /* here the output will be science marks of that student object. */
console.log(
  student.address
); /* here the console will be address object which is inside student object. */
console.log(student.address["street"]);
console.log(student.address.state);
console.log(student.address.village);
