// Cài đặt Node.js (nếu chưa có).
// Tạo một file hello.js.
// Viết code để in ra "Hello World" trên console.
// Chạy script bằng lệnh node hello.js.
console.log("Hello, World!");
//Bài 1:In biến: Tạo biến name với giá trị tên của bạn và in ra "Hello, [name]!".
// const name = "Thư";
// console.log(`Hello đây là bài 1, ${name}!`);
//bài 2: Sử dụng process.argv: Nhận tên từ command line arguments và in "Hello, [arg]!".
//process là đối tượng toàn cục (global object)
//Cung cấp thông tin và điều khiển tiến trình Node.js đang chạy
// process.argv là mảng chứa các tham số dòng lệnh .Node tự động truyền các tham số khi chạy chương trình
// process.argv[0] → đường dẫn Node
// process.argv[1] → đường dẫn file .js
// process.argv[2] → tham số đầu tiên do người dùng nhập
const name = process.argv[2] || "World";
console.log(`Hello đây là bài 2, ${name}!`);
//Bài 3: 
const { sayHello } = require('./greetings');
console.log(sayHello("đây là bài 3"));
//Bài 4: setTimeout()
// Là hàm bất đồng bộ
// Dùng để trì hoãn thực thi code
// Sử dụng setTimeout: In "Hello World" sau 2 giây.
// setTimeout: setTimeout(() => console.log('Hello World'), 2000);
setTimeout(() => {
    console.log("Hello, đây là bài tập 4");
}, 2000);
//Bài 5: Đọc file: Tạo file message.txt với nội dung "Hello from file!" và đọc in ra.
//File: const fs = require('fs'); fs.readFile('message.txt', 'utf8', (err, data) => console.log(data));
const fs = require('fs');
fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
