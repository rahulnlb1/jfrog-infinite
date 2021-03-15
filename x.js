// var x = [];

// while (1) {
//     x.push("hello");
// }
'use strict';
const list = [];
setInterval(()=> {
  const record = new MyRecord();
  list.push(record);
},10);
function MyRecord() {
  var x='hii';
  this.name = x.repeat(10000000);
  this.id = x.repeat(10000000);
  this.account = x.repeat(10000000);
}
setInterval(()=> {
  console.log(process.memoryUsage())
},10000);
