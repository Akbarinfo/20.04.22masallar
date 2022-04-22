// masala 206
// let count = 0

// function isPrimeNumber(num){
//   for(let i = 2; i < num; i++){
//     let bnum = true;
//     for(let j = 2; j < i; j++) {
//       if(i % j == 0) {
//         bnum = false;
//         break;
//       }
//     }
//     if(bnum){
//       count++
//     }
//   }
//   return count
// }
// console.log(isPrimeNumber(100))

// masala 207

// let get = "-5+3-9+8"

// function sum(n) {
//   return Function("return" + n)()
// }

// console.log(sum(get))

// masala 208

// let get = 'Joke😊'

// function getCharacterCount(i) {
//   let a = [...i];
//   console.log(a.length);
// }
// getCharacterCount(get);


// masala 209

// let str = null;

// function parseint(str){
//   if(str.match(/['0-9']/) && !str.includes('-')){
//     return str.length
//   }
//   if(str.match(/['0-9']/) && str.includes('-')){
//     return '-'+ str.length - 2
//   }
//   if(!str.match(/'[0-9]'/)){
//     return null
//   }
// }
// console.log(parseint("Bu manfiy son - 22 -"));


// masala 215

// let arr = [15, 1, 54, -5, 56, -52, 65, 5];

// function sort(arr){
//   for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr.length; j++){
//       if(arr[j] > arr[j + 1]){
//         let a = arr[j+1]
//         arr[j+1] = arr[j]
//         arr[j] = a
//       }
//     }
//   }
//   return arrx
// }

// console.log(sort(arr))

// masala 216

// let arr = [1, -10, 2, 4, 1, 8];
// let arr = [3, 22, 29, 18, 31];
// let arr = [7, 11, 17, 23, 31, 37];

// function min(arr){
//   for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//           if(arr[0] > arr[j]){
//             arr[0] = arr[j]
//           }
//         }
//       }
//       return arr[0]
// }

// console.log(min(arr))

// masala 217

// let num = 10

// function showMessage(n){
//   let result = n % 2 == 0 ? 'Juft': 'Toq'
//   console.log(result)
// }

// function oddOrEven(l){
//   showMessage(l)
// }

// oddOrEven(num)

// masala 218

// let array = [1, [2, [3, 4], 5], 6]
// let newarray = []

// function flatArray(el) {
//   for(let item of el){
//     if(Array.isArray(item)){
//       flatArray(item)
//     }else{
//       newarray.push(item)
//     }
//   }
//   return newarray
// }

// console.log(flatArray(array))


// masala 219

// let numb = 5;

// function sum(num){
//   if(num == 1){
//     return 1
//   }
//   return num * sum(num - 1)
// }

// console.log(sum(numb))


// masala 220

// let numb = 5;

// function sum(num){
//   if(num == 1){
//     return 1
//   }
//   return num * sum(num - 1)
// }

// console.log(sum(numb))