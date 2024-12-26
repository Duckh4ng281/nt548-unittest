import request from 'supertest';
import { app } from '../../app';

// Khi cung cấp thông tin xác thực hợp lệ, hệ thống sẽ phản hồi với cookie có thể được sử dụng cho các phiên làm việc tiếp theo
it('responds with a cookie when given valid credentials', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201); //Mong đợi máy chủ trả về mã trạng thái 201 (Created)

  const response = await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(200); //Mong đợi máy chủ trả về mã trạng thái 200 (OK)

  expect(response.get('Set-Cookie')).toBeDefined();
});
