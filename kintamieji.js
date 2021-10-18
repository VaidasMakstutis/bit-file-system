let a = 5;
let b = 88;
console.log('a =', a);
console.log('b =', b);

b = a;
console.log('a =', a);
console.log('b =', b);

a = 11;
console.log('a =', a);
console.log('b =', b);

console.log('-------------');

let c = [1, 2];
let d = [33, 44];
console.log('c =', c);
console.log('d =', d);

d = c;
console.log('c =', c);
console.log('d =', d);

c[0] = 7;
console.log('c =', c);
console.log('d =', d);