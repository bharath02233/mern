var ob={'name':'bharath','mobileno':[{'airtel':'9550637601'},{'bsnl':'9652132155'}]};

// var ob1={...ob};
// ob1.mobileno[0]='222222';


// console.log(ob);
// console.log(ob1);


var deepcopy=JSON.parse(JSON.stringify(ob));

deepcopy.mobileno[0]='111111111';
console.log(ob);
console.log(typeof deepcopy);

var ar=[1,2,3];
console.log(JSON.parse(JSON.stringify(ar)));