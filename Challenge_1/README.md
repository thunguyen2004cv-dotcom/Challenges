1. Tổng quan bài toán
Mục tiêu chính
Hiểu cách Express.js hoạt động như một HTTP Server
Biết cách: Tạo server
            Định nghĩa route
            Xử lý GET / POST
            Dùng middleware
            Làm việc với params, query, static files
Express thực chất là một framework chạy trên Node.js, giúp:
Viết server gọn hơn
Không cần tự xử lý HTTP low-level
2. Các bước cơ bản để tạo HTTP Server với Express
Bước 1: Cài đặt Express
--Tạo file package.json
npm init -y 
--Tải thư viện Express vào node_modules
npm install express
Bước 2: Tạo file server.js : Đây là entry point của server.
3. Giải thích từng phần code chính
Bước 1: Import Express và tạo app
const express = require('express'); --import thư viện Express
const app = express(); --trả về một object app : app ở đây đại diện cho toàn bộ server
