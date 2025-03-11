// // Task 1
// // Printing Hello world in console
// console.log("Hello World")
// alert("Hello World")


// // Task 2
// // Adding two numbers
// let num1 = prompt("Enter first number")
// let num2 = prompt("Enter second number")
// let sum = Number(num1) + Number(num2)
// console.log("Sum:", sum)


// // Task 3
// // Finding square root 
// let userNum = prompt("Enter number")
// let result = Math.sqrt(userNum)
// console.log(result) 




// // Task 4
// // Finding Area of a triangle
// let base = prompt("Enter Base of triangle")
// let height = prompt("Enter height of triangle")

// let area1 = (base * height) / 2
// console.log("The area of triangle is:", area)


// // Task 5
// // Finding Area of triangle by Heron's formula
// let a = Number(prompt("Enter first side")) 
// let b = Number(prompt("Enter second side"))
// let c = Number(prompt("Enter third side"))

// let s = (a+b+c)/2
// let area2 = s*(s-a) * (s-b) * (s-c)
// area2 = Math.sqrt(area2)
// console.log("The Area of triangle by Heron's formula:", area2)




// // Task 6
// // Swapping two numbers stored in variable
// let a = 1
// let b = 2
// console.log("Before swapping:")
// console.log(`a = ${a}, b = ${b}`)
// let temp = a
// a = b
// b = temp
// console.log("After swapping:")
// console.log(`a = ${a}, b = ${b}`)


// // Task 7
// // Kilometers into miles conversion
// function intoMiles(km){
//     const factor = 0.6213
//     return km * factor
// }
// let km = 5
// let result = intoMiles(km)
// console.log(`${km} Kilo-Meter is equal to ${result} Miles`)




// // Task 8
// // Celsius to Fahrenheit
// function intoFeh(c){
//     return c * 1.8 + 32 
// }
// let cel = 32
// let result1 = intoFeh(cel)
// console.log("The Celsius into Fahrenheit is: ", result1) 

// // Task 9
// // Identifying whether a number is positive negative or zero
// function identify(x){
//     let result = ""
//     if (x == -1){
//         result = "The number is negative"
//     }else if (x == 0){
//         result = "The number is zero"
//     }else if (x == 1){
//         result = "The number is positive"
//     }else{
//         result = "Not a number" 
//     }
//     return result   
// }
// let num = Math.sign(0)
// let result = identify(num)
// console.log("The number is", result)



// // Task 10
// // Generating a random number
// let random = (Math.random()*10)+1
// random = Math.floor(random)
// console.log("The random number is: ", random)


// // Task 11
// // Identifying whether a number is Even or Odd
// function identify(x){
//     let result
//     if (x % 2 == 0){
//         result = "The number is even"
//     }else if (x % 2 != 0){
//         result = "The number is odd"
//     }else{
//         result = "Not a number"
//     }
// }

// let num = 2
// let result = identify(num)
// console.log(result)



// // Task 12
// // identifying prime and composite numbers

// function identify(num) {
//     if (num == 1){
//         return `${num} can't be a prime number`
//     }else if (num < 1){
//         return "neither prime nor composite"
//     }else{
//         for (let i = 2; i <= 14; i++){
//             if(num%i == 0){
//                 return `Composite number at ${i}`
//             }else{
//                 return "Prime number"
//             }
//         }
//     }
            
// }

// let num = 4
// let result = identify(num) 
// console.log(result)



// Task 13
// Finding max value by user-defined function
// function max(a, b ,c){
//     if (a >= b && a >= c){
//         return a
//     }else if(b >= a && b >= c){
//         return b
//     }else if(c >= a && c >= b){
//         return c
//     }
// }

// let num1 = 2
// let num2 = 3
// let num3 = 4

// let result = max(num1 , num2 , num3)
// console.log(`In numbers ${num1}, ${num2}, ${num3}`)
// console.log("Largest:", result)



// // Task 14
// // Finding Factorial
// let numUser = 5
// let result1 = 1
// for (i = 1; i <= num; i++){
//     result1 = result1 * i
// }
// console.log(`The factorial of ${numUser} is: ${result1}`)

// // Task 15
// // Finding Factorial through recursion
// let num = 5
// let counter = 1 
// let result = 1

// function fact(x){
//     if (counter <= num){
//         result = result * counter
//         counter = counter + 1
//         fact()
//     }
// }
// fact(5)
// console.log(`The factorial of ${num} is ${result}`)


// // Task 16
// // Print table of User defined value using function
// function table(num){
//     for(i = 1; i <= 10; i++){
//         console.log(`${num} * ${i} = ${num * i}`)
//     }
// }
// let tableChoice = prompt("Enter a table: ")
// table(tableChoice)











