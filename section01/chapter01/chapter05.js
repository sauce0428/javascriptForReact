// 1. 템플릿 리터널
let b = null;
console.log(b);
// 2. String Type 
let myName = "김동진"; 
let myLocation = "박촌"; 
let introduce = myName + myLocation; 
//3, 템플릿 리터널 문법(주의: ` 백틱에서 진행해야 한다) 
let introduceText = `${myName}은 ${myLocation}에 거주합니다`; 
console.log(introduceText); 
//4. Boolean Type 
let isSwitchOn = true; 
let isEmpty = false; 
//5. Null Type (아무것도 없다) 
let empty = null; 
//6. Undefined Type 
let none; 
console.log(none);