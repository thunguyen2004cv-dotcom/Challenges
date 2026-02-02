// Bài 3: Tạo module: Tạo file greetings.js với hàm sayHello(name) và import vào hello.js.
//Gợi ý Module: module.exports = { sayHello };
// Module là cách chia nhỏ chương trình thành nhiều file.
// Node.js dùng:
// module.exports để xuất
// require() để import
function sayHello(name) {
    return `Hello, ${name}!`;
}
module.exports = { sayHello };
