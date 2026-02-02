// bài 1: Cài đặt Node.js (nếu chưa có).
// Tạo một file hello.js.
// Viết code để in ra "Hello World" trên console.
// Chạy script bằng lệnh node hello.js.
// console.log("Hello, World!");
//Bài 2:In biến: Tạo biến name với giá trị tên của bạn và in ra "Hello, [name]!".
// const name = "Thư";
// console.log(`Hello, ${name}!`);
// hello.js
const greetings = require("./greetings");   // ./ → cùng thư mục

// Gọi hàm
console.log(greetings.sayHello("Thư"));
