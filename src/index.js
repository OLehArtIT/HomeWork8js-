// // 1.
for (let i = 20; i <= 30; i = i + 0.5) {
    console.log(i)
};
// 2.
for (let i = 10; i <= 100; i = i + 10) {
    console.log(i * 27)
};

// // 3.

const n = 100
for (let i = 1; i <= 100; i++) {
   if (i*i <= n) {
    console.log(i) 
}
};

// // 4.

let i = 5 
if (i / i === 1 && i / 1 === i ) {
    console.log ( ' Это простое число')
};

// 5.

function degree(num) {
    while (num % 3 == 0) {
      num /= 3;
    }
    return num == 1;
  }
  
  console.log(degree(81));
  console.log(degree(126));