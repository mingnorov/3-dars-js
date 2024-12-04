//let text = 'Hello World!'
//console.log (text.toUpperCase ())
//console.log (text.toLocaleLowerCase())//


//let user = {
//    age: 2,
//    filali: 5,
//    student: 1600,
//    glavni:('yunusobod')
//}
//let ism = prompt('Mars xaqida');
//alert(user[ism]);

// let user = prompt ('hozir sizda random sonlar chiqadi');
// alert (user);
// console.log (user);
// let familiya = prompt ('familiyangoizni kiriting');
// alert ('familiya');
// console.log (familiya)
// let age = prompt ('yoshingizni kiriting');
// alert (age);
// console.log (age);
// let fan =prompt ('yoqtirgan faningizni  kiriting');
// alert ('yoqtirgangan faningizni kirting');
// console.log (yoqtirgan faningizniu kiriting);
// let locotion =prompt(yashash manzilingizni kiriting);
// console.log (yashash manzilingizni kiriting);
// alert ('malumitingzi uchun raxmat!');

const randomNum = Math.random() * 100;
const result = randomNum / 2;
if (!Number.isInteger(randomNum)) {
  alert('hozir sizda random sonlari chiqadi');
} else {
  alert("Son: " + randomNum);
}
alert(result);