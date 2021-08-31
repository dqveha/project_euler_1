export { mults3or5 }

// recursive attempt
// const mults3or5 = (listArray = [], sumArray = [], i = 0) => {
//   if (i >= 1000) {
//     const total = sumArray.reduce(function(currentValue, element) {
//       return element + currentValue;
//     }, 0);
//     return total;
//   }
//   if (listArray === []) {
//     listArray = [...Array(1000).keys()].slice(1)
//     mults3or5(listArray)
//   } else {
//     if (listArray[i] % 3 || listArray[i] % 5) {
//       sumArray.push(listArray[i])
//       mults3or5(listArray[i+1], sumArray)
//     }
//   }
// }


const mults3or5 = (listArray = [], sumArray = [], i = 0) => {
  listArray = [...Array(1000).keys()].slice(1);
 if (i >= 1000) {
   const totalArray = sumArray.reduce(function(currentValue, element) {
     return element + currentValue;
   }, 0);
   return totalArray;
 } else if (listArray[i] % 3 === 0 || listArray[i] % 5 === 0) {
     sumArray.push(listArray[i])
     i++
     return mults3or5(listArray[i], sumArray, i)
 } else {
    i++
    return mults3or5(listArray[i], sumArray, i)
 }
}

mults3or5();

// 