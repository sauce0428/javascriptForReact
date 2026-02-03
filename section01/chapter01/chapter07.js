//1.대입연산자 
let a = 1;  
 
//2. 산술연산자 
let a = 1;  
let b = 2;  
console.log(a + b);  
console.log(a - b);  
console.log(a * b); 
console.log(a / b);   //0.5 
console.log(a % b);  //1 
 
//3.연결연산자 
let a = “1”;  
let b = “2”;  
console.log(a+ b);  //”12” 
 
//4.복합대입연산자 
let a = 5;  
a += 10;    //+=, -=, /=, %=, *= 
console.log(a);  //15 
 
//5.증감연산자 
let a = 10;  
a++;     // a--  
console.log(a);   //11 
console.log(a++);   //11 후위연산자   a-- 
console.log(a);  //12 
console.log(++a);   //13 전위연사자  --a 
console.log(a);  //13 
 
//6.논리연산자 
console.log(!true);  //false 
console.log(!false);  //true 
console.log(true && true);  //true   피연산자, 연사자(&&) 개념을이해할것 
console.log(true || true);  //true   피연산자, 연사자(||) 
 
//7.비교연산자 
let compareA = 1 == “1”;  
console.log(compareA);  //true  자바스크립트는 = = 비교연산자는 값만 비교한다.(타입비교안함) 
 
let compareA = 1 === “1”;  
console.log(compareA);  //false  자바스크립트는 = = = 비교연산자는 값과 타입을 함께 비교한다. 
 
let compareA = 1 != “1”;  
console.log(compareA);  //false 
 
let compareA = 1 != = “1”;  
console.log(compareA);  //true 
 
//주의: = = 사용하지말고 = = = 사용하자. 
//주의: != 사용하지말고 != = 사용하자. 
 
let compareA = 1 > 2; //1 >= 2 
console.log(compareA);  //false 
 
let compareA = 1 < 2; // 1 <= 2 
console.log(compareA);  //true 
 
//8.자바스트립트 동적타입기능 
//: 타입의 유연성을제공하지만 에러를 발생할수 있는 기능임 
let compareA = 1; //현재는 정수형타입 
