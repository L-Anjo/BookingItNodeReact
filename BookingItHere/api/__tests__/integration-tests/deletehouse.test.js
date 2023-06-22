const request = require('supertest');
const app = require('../../src/app');
const {faker} = require('@faker-js/faker');
const Reservation = require("../../src/models/Reservation");
const House = require("../../src/models/House");
const Payment = require("../../src/models/Payment");
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

//Reservation
const datainit = faker.date.past();;
const dataend = faker.date.future();

let reservationId;
let userId;
let houseId;
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
                userId = response.body.user.id;


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
     * Efetua uma Reserva
     */
    it('Efetuar uma Reserva', async () => {
        try {
            response = await request(app)
                .post('/reservation')
                .set({
                    Authorization: `Bearer ${token}`
                })
                .send({
                    init_date: '2023-06-06',
                    end_date: '2023-06-07',
                    guestsNumber: houseGuestsNumber,
                    house_id: houseId,
                    services: [
                        {
                            name: houseServiceName,
                        }
                    ]
                });
                reservationId = response.body.data.id;
        } catch (err) {
            console.error(err);
        }
        console.log(response);
        expect(response.status).toBe(201);
    });

    it('Delete House', async () => {
        try {       
            const deleteResponse = await request(app)
            .delete(`/houses/${houseId}`)
            .set('Authorization', `Bearer ${token}`);
    
        // Verifique se a resposta indica sucesso
        expect(deleteResponse.status).toBe(200);
    
        // Verifique se a casa foi excluída do banco de dados
        const deletedHouse = await House.findByPk(houseId);
        expect(deletedHouse).toBeNull();
        const checkres = await Reservation.findByPk(reservationId);
        expect(checkres.state_id).toEqual(5);
        const checkpay = await Payment.findOne({where:{reservation_id: reservationId}});
        expect(checkpay.state_id).toEqual(3);
    } catch (err) {
        console.error(err);
    }
    });

});




  

