const request = require('supertest');
const app = require('../../src/app');
const {faker} = require('@faker-js/faker');
const House = require("../../src/models/House");
const houseMessage = require("../../src/messages/houseMessage");
const User = require("../../src/models/User");

let token, response, user, house;

// User
const firstname = faker.name.firstName();
const lastname = faker.name.lastName();
const name = firstname + ' ' + lastname;
const password = faker.internet.password(6);
const email = faker.internet.email(firstname, lastname, 'bookingithere.com');
const phone = faker.phone.number('9########');

// House
const houseName = faker.name.firstName();
const houseDoorNumber = faker.datatype.number({min: 1, max: 1000});
const houseFloorNumber = faker.datatype.number({min: 1, max: 14});
const housePrice = faker.finance.amount();
const houseGuestsNumber = faker.datatype.number({min: 1, max: 14});
const houseStatus = faker.datatype.number({min: 1, max: 3});
const housePostalCode = faker.datatype.number({min: 1000, max: 9999});
const houseRoad = faker.address.street();
const housePropertyAssessment = faker.datatype.number({min: 50000, max: 1000000}).toString();
const houseConcelho = faker.address.city();
const houseDistrict = faker.address.state();

// House Services
const houseService = faker.datatype.number({min: 1, max: 3});
const houseServiceName = faker.name.jobDescriptor();
const houseServicePrice = faker.datatype.number({min: 10, max: 50});

//Announcement
const priceClick = faker.datatype.number();
const numbClicks = faker.datatype.number({min: 1, max: 1000});
const state = faker.datatype.number({min: 0, max: 1});
const end_date = faker.date.future();

//Announcement Error
const housee = faker.datatype.number({min:100000, max:200000})

let userId;
let houseId;
let reservationIdd;
let feedbackId;
/**
 * Reservation Test
 *
 * @author Luís Anjo
 */
describe('Anunciante', () => {
    /**
     * Create
     */
    it('create Anunciante', async () => {
        try {
            response = await request(app)
                .post('/users')
                .send({
                    email: email,
                    password: password,
                    confirmPassword: password,
                    name: name,
                    phone: phone
                });
            // userId = response.body.user.id;
        } catch (err) {
            console.log(err);
        }
        expect(response.status).toBe(201);
    });

    /**
     * Login
     */
    it('Login Anunciante', async () => {
        try {
            response = await request(app)
                .post('/auth/login')
                .send({
                    email: email,
                    password: password
                });

            token = response.body.token;
            user = response.body.user;

        } catch (err) {
            console.error(err);
        }
        expect(response.status).toBe(200);
    });

/**
    * Registar uma casa
*/
    it('Registar uma casa', async () => {
        try {
            response = await request(app)
                .post('/houses')
                .set({
                    Authorization: `Bearer ${token}`
                })
                .send({
                    name: houseName,
                    doorNumber: houseDoorNumber,
                    floorNumber: houseFloorNumber,
                    price: parseFloat(housePrice),
                    guestsNumber: houseGuestsNumber,
                    postalCode: housePostalCode,
                    road: houseRoad,
                    propertyAssessment: housePropertyAssessment,
                    concelho: houseConcelho,
                    district: houseDistrict,
                    services: [
                        {
                            // id: 0,
                            name: houseServiceName,
                            price: houseServicePrice
                        }
                    ]
                });

            houseId = response.body.data.id;

        } catch (err) {
            console.error(err);
        }
        expect(response.status).toBe(201);
    });

/**
    * Registar um anuncio
*/

    it('Registar um anuncio', async () => {
        try {

            response = await request(app)
                .post('/announcements')
                .set({
                    Authorization: `Bearer ${token}`
                })
                .send({
                    priceClick: priceClick,
                    numbClicks: numbClicks,
                    house_id: houseId,
                    state: state,
                    end_date: '2023-10-28'
                });


        } catch (err) {
            console.error(err);
        }
        expect(response.status).toBe(201);
    });

/**
    * Erro casa inválida
*/
    
    it('Registar um anuncio', async () => {
        try {

            response = await request(app)
                .post('/announcements')
                .set({
                    Authorization: `Bearer ${token}`
                })
                .send({
                    priceClick: priceClick,
                    numbClicks: numbClicks,
                    house_id: housee,
                    state: state,
                    end_date: '2023-10-28'
                });


        } catch (err) {
            console.error(err);
        }
        expect(response.status).toBe(400);
    });

/**
    * Erro casa já com anuncio
*/

    it('Registar um anuncio', async () => {
        try {

            response = await request(app)
                .post('/announcements')
                .set({
                    Authorization: `Bearer ${token}`
                })
                .send({
                    priceClick: priceClick,
                    numbClicks: numbClicks,
                    house_id: houseId,
                    state: state,
                    end_date: '2023-10-28'
                });

        } catch (err) {
            console.error(err);
        }
        expect(response.status).toBe(401);
    });
});