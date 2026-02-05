/*
//클래스속에 멤버변수를 반복문을 이용해서 출력
const person = { 
name: "김동진", 
age: 25, 
tall: 179 
};

const personKeys = Object.keys(person);
console.log(personKeys);

//const personKeys = ['name', 'age', 'tall']
for (let index = 0; index < personKeys.length; index++) {
  const key = personKeys[index];
  console.log(` ${key} = ${person[key]}`);
  
}

const valuesArray = Object.values(person);
for (let index = 0; index < valuesArray.length; index++) {
  console.log(` ${valuesArray[index]}`);
}
console.log(values);
*/
const info = {
  name : "홍길동",
  age : 100,
  weight : 80
}

const infoKeys = Object.keys(info)
console.log(info)

for (let i = 0; i < infoKeys.length; i++) {
  const key = infoKeys[i]
  console.log(`${key} = ${info[key]}`)
}

const valuesArray = Object.values(info);
for (let i = 0; i < valuesArray.length; i++) {
  console.log(`${valuesArray[i]}`);
}
console.log(values);