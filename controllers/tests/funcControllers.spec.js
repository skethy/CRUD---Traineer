const request = require('supertest')
const app = require('../../index')
const User = require('../../models/funcModels')

beforeAll(() => User.remove({}))

describe('Func', () => {

    describe('Create', () => {
      test('Should create a employee', async () => {
        const response = await request(app).post('/user').send(
          {
            name: "Ulisses",
            cpf:"06494228569",
            telefone:"79981365084",
            cep:"49037420",
            numero: "172",
            complemento: "Casa"
          }
        );
        expect(response.status).toBe(201);
      });
  
      test('Should not create a employee with the same cpf', async () => {
        const response = await request(app).post('/user').send(
          {
            name: "Pablo",
            cpf:"06494228569",
            telefone:"79999665588",
            cep:"49037420",
            numero: "222",
            complemento: "Apt"
          }
        );
        expect(response.status).toBe(500);
      });
      test('Should not employee a without cpf and name', async () => {
        const response = await request(app).post('/user').send(
          {
            telefone:"79911228844",
            cep:"49037420",
            numero: "846",
            complemento: "Casa"
          }
        );
        expect(response.status).toBe(500);
      })
    });
  
    describe('Find', () => {
      test('Should find a user', async () => {
        const user = await User.create(        {
            name: "Ulisses",
            cpf:"06485698541",
            telefone:"79981365084",
        });
        const response = await request(app).get('/user/06485698541');
        expect(response.status).toBe(200);
      });
    })
});
