// const request = require('supertest');
// const app = require('../../src/app');
// const {faker} = require('@faker-js/faker');

// /**
//  * Endpoints Users Test
//  *
//  * @author João Ponte
//  */
// describe('Endpoints Users', () => {
//     it('create User', async () => {
//         let response;
//         try {
//             const firstname = faker.name.firstName();
//             const lastname = faker.name.lastName();
//             const name = firstname + ' ' + lastname;
//             const password = faker.internet.password(6);
//             const email = faker.internet.email(firstname, lastname, 'bookingithere.com');
//             const phone = faker.phone.number('9########');

//             response = await request(app)
//                 .post('/users')
//                 .send({
//                     email: email,
//                     password: password,
//                     name: name,
//                     phone: phone
//                 });

//         } catch (err) {
//             console.error(err);
//         }
//         expect(response.status).toBe(201);
//     });
// });