import request from 'supertest';
import { app } from '../../app';
import { Password } from '../../services/password';

//Kiểm tra xem đăng ký thành công có trả về mã trạng thái 201 hay không
it('returns a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup') //Gửi post request đến route đăng ký
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201); //Mong đợi máy chủ trả về mã trạng thái 201 (Created)
});


//Kiểm tra email không hợp lệ
it('returns a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup') //Gửi post request đến route đăng ký
    .send({
      email: 'fasfadsf', //Email không hợp lệ
      password: 'password'
    })
    .expect(400); // Mong đợi máy chủ trả về mã trạng thái 400 (Bad Request)
});


//Kiểm tra mật khẩu không hợp lệ
it('returns a 400 with an invalid password', async () => {
    return request(app)
      .post('/api/users/signup') //Gửi post request đến route đăng ký
      .send({
        email: 'test@test.com',
        password: 'p'//Mật khẩu không hợp lệ
      })
      .expect(400); // Mong đợi máy chủ trả về mã trạng thái 400 (Bad Request)
});


//Kiểm tra thiếu email và password  
it('returns a 400 with missing email and password', async () => {
  await request(app)
    .post('/api/users/signup') //Gửi post request đến route đăng ký
    .send({
      email: 'test@test.com'
    })
    .expect(400); // Mong đợi máy chủ trả về mã trạng thái 400 (Bad Request)
  
  await request(app)
    .post('/api/users/signup') //Gửi post request đến route đăng ký
    .send({
      password: 'alskjdf'
    })
    .expect(400); // Mong đợi máy chủ trả về mã trạng thái 400 (Bad Request)
});



it('set a cookie after successfully signup', async () => {
  const response = await request(app)
    .post('/api/users/signup') //Gửi post request đến route đăng ký
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201); //Mong đợi máy chủ trả về mã trạng thái 201 (Created)
  
  expect(response.get('Set-Cookie')).toBeDefined();
});