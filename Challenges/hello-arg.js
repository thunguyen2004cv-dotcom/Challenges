//Bài 3: Sử dụng process.argv: Nhận tên từ command line arguments và in "Hello, [arg]!".
// 2-hello-arg.js
console.log("=== Chương trình chào hỏi từ command line ===");

// Xem toàn bộ những gì được truyền vào
console.log("Tất cả tham số:", process.argv);

// process.argv là một mảng (array), các phần tử phổ biến:
console.log("process.argv[0]:", process.argv[0]);  // đường dẫn đến node.exe hoặc node
console.log("process.argv[1]:", process.argv[1]);  // đường dẫn đến file đang chạy (2-hello-arg.js)
console.log("process.argv[2] trở đi: tham số do bạn truyền");

// Lấy tên người dùng (nếu có)
// Nếu không truyền gì → dùng giá trị mặc định "World"
const ten = process.argv[2] || "World";

// In lời chào
console.log(`Hello, ${ten}!`);
console.log("Chào mừng bạn đến với Node.js ♥");