import { MongoMemoryServer } from "mongodb-memory-server"; // Import MongoMemoryServer để tạo MongoDB trong bộ nhớ cho môi trường test
import mongoose from "mongoose"; // Import mongoose để quản lý kết nối và tương tác với MongoDB
import { app } from "../app";

let mongo: any;

// Hook chạy trước tất cả các test case
beforeAll(async () => {
  process.env.JWT_KEY = 'asafsdfa'; // Đặt khóa JWT giả trong biến môi trường để kiểm thử
  const mongo = await MongoMemoryServer.create(); // Tạo instance MongoDB trong bộ nhớ
  const mongoUri = mongo.getUri(); // Lấy URI để kết nối tới MongoDB trong bộ nhớ

  await mongoose.connect(mongoUri, {}); // Kết nối tới MongoDB
});

// Hook chạy trước mỗi test case
beforeEach(async () => {
  if (mongoose.connection.db) {
    const collections = await mongoose.connection.db.collections(); // Lấy tất cả các collection csdl

    for (let collection of collections) {
      await collection.deleteMany({}); // Duyệt qua từng collection và xóa dữ liệu
    }
  }
});

// Hook chạy sau tất cả các test case
afterAll(async () => {
  if (mongo) {
    await mongo.stop(); // Dừng instance MongoDB trong bộ nhớ
  }
  await mongoose.connection.close(); // Đóng kết nối với MongoDB
});
