var a="bharath kumar reddy kumar";

var b=['a','e','i','o','u'];

console.log(a.split('').filter((ele)=>{ return b.includes(ele)}));


var reg=/[aeiou]/g;
console.log(a.match(reg));