
// function primeArray(arrayLeng) {
// let result = []

//   for (let i = 2; i < 100; i++) {
//     let isPrime = true
//     for (let j = 2; j < i; j++) {
//      if(i%j === 0) {isPrime = false; break}
//          }
//       result.length < arrayLeng && isPrime ? result.push(i) : result
//   }
//  return result
// }
// console.log(primeArray(5)) 
// console.log(primeArray(7))


// //filter numInString

// const string = "У Пети было 10 яблок, 2.5 он отдал Маше, 3.5 Васе и 4 оставил себе."
// console.log(string.split(' ').filter(el => !isNaN(Number(el))).map(el => Number(el)))


// //count repeat str

// clearString = str => {               
//   const valid = str.match(/(.)\1{1,}/g)
//       for(let i in valid) { 
//         str = str.replace(valid[i], valid[i].substr(0,1)+ valid[i].length)
//   }           
//   return str;
// }
// console.log(clearString('assdssddffffrrreeeweggggg'))


//get value in path

// const exampleArr = [{a:{b:[{c:4}, {c:5}]}}, {a:{b:[{c:6},{c:7}]}}]
// const exampleObj = { a:{b:{c:5}}}
// let string = '1.a.b.1.c'
// let string2 = 'a.b'

// function closure(obj, str) {
//   const arrs = str.split('.')
//   let currentObj = obj
//    for (let i = 0; i < str.length; i++) {
//         let one = arrs.shift() 
//         if (currentObj[one]) {
//         currentObj = currentObj[one]
//      } 
//    }
    
  
//   return currentObj
// }

// console.log(closure(exampleObj, string2));


// Promises Quque

// class ConcurencyQueue {
//   constructor(concurency) {
//     this.queueCurrent = [];
//     this.concurency = concurency;
//   }

//   queue(value) {
//     return  Promise.resolve(() => {
//       return this.queueCurrent.push(value)
//     });
//   }
   
//    deQueue() {
//     return  Promise.resolve(() => {
//       return this.queueCurrent.shift();
//     });
//   }

//   async queuing(req) {
//        while (this.concurency) {
//         await req.then(data => data())
//         this.concurency--
//        }
//   }
// }

// const concQueue = new ConcurencyQueue(3);

// const req1 = concQueue.queue(5);
// const req2 = concQueue.deQueue();
// concQueue.queuing(req1);
// console.log(concQueue);





