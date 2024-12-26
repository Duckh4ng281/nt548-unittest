## Cài đặt:

Cài đặt các gói cần thiết cho việc:
- Kiểm thử (Jest, ts-jest, @types/jest)
- Kiểm thử API HTTP (Supertest, @types/supertest)
- Mô phỏng cơ sở dữ liệu MongoDB trong bộ nhớ (mongodb-memory-server)


```
npm install --save-dev @types/jest @types/supertest jest ts-jest supertest mongodb-memory-server
```

## Setup môi trường test:
1. Tạo thư mục test trong đường dẫn ticketselling/auth/src
2. Tạo file [setup.ts](./auth/src/test/setup.ts)

## Test 
#### Đăng ký
- Tạo file [signup.test.ts](./auth/src/routes/__test__/signup.test.ts) trong đường dẫn ticketselling/auth/src/routes/`__test__`/signup.test.ts


#### Đăng nhập
- Tạo file [signin.test.ts](./auth/src/routes/__test__/signin.test.ts) trong đường dẫn ticketselling/auth/src/routes/`__test__`/signin.test.ts

## Chạy test
- Di chuyển đến đường dẫn ticketselling\auth
- Chạy lệnh: ```npm run test```