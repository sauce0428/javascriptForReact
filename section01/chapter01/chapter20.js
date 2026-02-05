//내장함수 (반복문 => 자기스타일로 변경한 반복문)

//1.forEach 멤버함수 (화살표함수)
//const array = [1,2,3,4];

/*
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

array.forEach((value, index, array)=>{
  console.log(`value = ${value}`);
  console.log(`index = ${index}`);
  console.log(`array = ${array}`);
  console.log(`******************************************`);
});

array.forEach((value)=>{
  console.log(`${value}`);
});

console.log(array);
*/
/*
const array = [1,2,3,4,5,6]

for (let i = 0; i < array.length; i++) {
  console.log(array[i])  
}

array.forEach((value, index, array)=>{
  console.log(`value = ${value}`)
  console.log(`index = ${index}`)
  console.log(`array = ${array}`)
})

*/

/*
//2.MAP
const array = [1,2,3,4];
const newArray = [];

for (let i = 0; i < array.length; i++) {
  let value = array[i];
  value = value * 10;
  newArray.push(value);
}
console.log(array);
console.log(newArray);

let _newArray = array.map((value)=> value * 10);
console.log(_newArray);
*/
/*
const array = [1,2,3,4,5,6]
const array2 = []

for (let i = 0; i < array.length; i++) {
  let value = array[i]
  value = value * 5;
  array2.push(value)  
}
console.log(array)
console.log(array2)

let array3 = array.map((value)=>value + 5)
console.log(array3)
*/
/*
//3. filter 
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환 
let array1 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
];

let newArray1 = [];
for (let i = 0; i < array1.length; i++) {
  let item = array1[i];
  if (item.hobby === "독서") {
    newArray1.push(item);
  }
}

console.log(array1);
console.log(newArray1);

let newArray2 = array1.filter((value)=>value.hobby === "테니스");

console.log(newArray2);


const tennisPeople = array1.filter( 
(item) => item.hobby === "테니스" 
); 
Console.log(tennisPeople);    
// [{ name: "구길동", hobby: "테니스" }, { name: "저길동", hobby: "테니스" }] 배열이 출력됨.
*/
/*
let array = [
  {name : "홍길동", age : "20"},
  {name : "김길동", age : "20"},
  {name : "장길동", age : "30"},
  {name : "박길동", age : "20"},
  {name : "이길동", age : "30"},
  {name : "한길동", age : "20"},
]

let array2 = []
for (let i = 0; i < array.length; i++) {
  let info = array[i]
  if (info.name === "홍길동") {
  array2.push(info)    
  }  
}
console.log(array)
console.log(array2)

let array3 = array.filter((value)=>value.age === "20")
console.log(array3)
const gen = array.filter((info)=>info.age === "30")
console.log(gen)

*/

/*
//4.find, findIndex
let array1 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
];

let findItem = null;
for (let i = 0; i < array1.length; i++) {
  let item = array1[i];
  if (item.hobby === "독서") {
    findItem = item;
    break;
  }
}

console.log(findItem);

let findItem2 = array1.find((value)=>value.hobby === "독서");

let findIndex = array1.findIndex((value)=>value.hobby === "독서");

const array = [1,2,3,4];
let findIndex2 = array1.indexOf({name: "저길동", hobby: "테니스"});
console.log(findIndex2);
*/
/*
let array = [
  {name : "홍길동", age : "20"},
  {name : "김길동", age : "20"},
  {name : "장길동", age : "30"},
  {name : "박길동", age : "20"},
  {name : "이길동", age : "30"},
  {name : "한길동", age : "20"},
]

let findInfo = null;
for (let i = 0; i < array.length; i++) {
  let info = array[i];
  if (info.age === "20") {
    findInfo = info;
    break;
  }
}
console.log(findInfo);
let findInfo2 = array.find((value)=>value.age === "20");
let findIndex = array.findIndex((value)=>value.age === "20");
;

*/


/*
//5.slice(start, end)
let array1 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
{ name: "홍길동2", hobby: "독서2" }, 
{ name: "홍길동3", hobby: "독서3" }, 
{ name: "홍길동4", hobby: "독서4" }, 
];

let newArray = array1.slice(0,3);
console.log(newArray);
*/
/*
let array = [
  {name : "홍길동", age : "20"},
  {name : "김길동", age : "20"},
  {name : "장길동", age : "30"},
  {name : "박길동", age : "20"},
  {name : "이길동", age : "30"},
  {name : "한길동", age : "20"},
]

let array2 = array.slice(1,5)
console.log(array2)

*/

/*
//6.concat
let array1 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
];

let array2 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
];


let array3 = array1.concat(array2);
console.log(array3);
*/
/*
let array = [
  {name : "홍길동", age : "20"},
  {name : "김길동", age : "20"},
  {name : "장길동", age : "30"},
  {name : "박길동", age : "20"},
  {name : "이길동", age : "30"},
  {name : "한길동", age : "20"},
]

let array2 = [
  {name : "조길동", age : "30"},
  {name : "신길동", age : "30"},
  {name : "고길동", age : "20"},
]


let array3 = array.concat(array2);
console.log(array3);
*/


/*
//7.sort, sort(),reverse()
// 배열을 사전순으로 내림차순 정렬하는 메서드 
// 자바스크립트는 문자단위 정렬
//숫자단위 정렬은 문제가 발생한다
let array3 = [0,1,3,2,10,30,20]; 
array3.sort((num1, num2)=> num2 - num1);

//문자단위 정렬 
let array4 = ["acd","dfs","sdf","sdd","fff"]; 
console.log(array4);
array4.sort();

let array5 = ["acd","dfs","sdf","sdd","fff"]; 
array6 = array5.sort().reverse();
console.log(array6);

//8.join, split
const arr6 = ["김동진","님","안녕하세요","반가워요"]; 
const joined = arr6.join("=="); 
console.log(joined);

const array7 = joined.split("==");
console.log(array7);
*/

const array = ["오늘의","메뉴는","스테이크","입니다"]; 
const joined = array.join("**"); 
console.log(joined);

const array2 = joined.split("**");
console.log(array2);