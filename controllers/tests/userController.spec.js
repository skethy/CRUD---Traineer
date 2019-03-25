const request = require('supertest');
const app = require('../../index');
const User = require('../../models/userModel');

beforeAll(() => User.remove({})); // antes de iniciarmos cada teste vamos limpar o banco de dados 

describe('Users', () => {

  describe('Create', () => {
    test('Should create a user', async () => {
      const response = await request(app).post('/user').send(
        {
          email: 'test',
          password: 'test123',
          name: 'name',
        }
      );
      expect(response.status).toBe(201);
    });

    test('Should not create a user with the same email', async () => {
      const response = await request(app).post('/user').send(
        {
          email: 'test',
          password: 'test123',
          name: 'name',
        }
      );
      expect(response.status).toBe(500);
    });
    test('Should not create a without email', async () => {
      const response = await request(app).post('/user').send(
        {
          password: 'test123',
          name: 'name',
        }
      );
      expect(response.status).toBe(500);
    })
  });

  describe('Find', () => {
    test('Should find a user', async () => {
      const user = await User.create(        {
        email: 'test2',
        password: 'test123',
        name: 'name',
      });
      const response = await request(app).get('/user/test2');
      expect(response.status).toBe(200);
    });
  })

});
