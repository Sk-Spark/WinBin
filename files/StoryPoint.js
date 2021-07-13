let a = 0,  b = 1,  c,  n;

n = 23;
// m = 5;
// console.log(process.argv);
console.log('For Hours:',parseInt(process.argv[2]));
n = parseInt(process.argv[2]);
// console.log(b);
while (true) {
  c = a + b;
  // process.stdout.write(b,c);
//   console.log(c);  
  if (n == b) {
    console.log(`Story Point:`, b);
    break;
  } else if (n == c) {
    console.log(`Story Point:`, c);
    break;
  } else if (b < n && n < c) {
    if (n - b < c - n) {
      console.log(`Story Point:`, b);
      break;
    } else {
      console.log(`Story Point:`, c);
      break;
    }
  }
//   m--;
  a = b;
  b = c;  
}
