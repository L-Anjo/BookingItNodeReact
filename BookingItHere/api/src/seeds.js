const {faker} = require('@faker-js/faker');
// Database
require('./database/index')

const User = require('./models/User');
const UserType = require("./models/UserType");
const House = require("./models/House");
const StatusHouse = require("./models/StatusHouse");
const HouseServices = require("./models/HouseServices");
const PostalCode = require("./models/PostalCode");
const Service = require("./models/Service");
const Reservation = require("./models/Reservation");
const ReservationServices = require("./models/ReservationServices");
const bcrypt = require("bcrypt");
const ReservationState = require('./models/ReservationState');
const Announcement = require('./models/Announcement');
const Feedback = require('./models/Feedback');
const Payment = require('./models/Payment');
const PaymentState = require('./models/PaymentState');
const AnnouncementPayment = require('./models/AnnouncementPayment');
const postalCodes = require('./database/seeders/postalcodes')
const concelhos = require('./database/seeders/concelhos')
const distritos = require('./database/seeders/distritos')
const {Sequelize} = require("sequelize");

/**
 * Seed Postal Codes
 *
 * @author João Ponte
 * @returns {Promise<string>}
 */
async function seedPostalCodes() {
    let insertPostalCode = {};
    let postalcode;
    let i;
    for (i = 0; i < postalCodes.length; i++) {
        postalcode = postalCodes[i]
        insertPostalCode = {}

        insertPostalCode.postalCode = postalcode.postal_code.substr(0, 4);

        if (!await PostalCode.findByPk(insertPostalCode.postalCode)) {
            if (parseInt(postalcode.addresses_city_id) && typeof concelhos[parseInt(postalcode.addresses_city_id) - 1] != "undefined")
                insertPostalCode.concelho = concelhos[parseInt(postalcode.addresses_city_id) - 1].nome

            if (parseInt(postalcode.addresses_district_id) && typeof distritos[parseInt(postalcode.addresses_district_id) - 1] != "undefined")
                insertPostalCode.district = distritos[parseInt(postalcode.addresses_district_id) - 1].nome

            if (insertPostalCode.postalCode && insertPostalCode.concelho && insertPostalCode.district) {
                await PostalCode.create(insertPostalCode)
            }
        } else {
            continue;
        }
    }
    return 'Postal Codes=' + (i === postalCodes.length ? 'done' : 'fail');
}

/**
 * Generate random users
 *
 * @author João Ponte
 * @param num
 * @returns {Promise<string>}
 */
async function generateUsers(num) {
    let i;
    for (i = 0; i < num; i++) {
        const firstname = faker.name.firstName();
        const lastname = faker.name.lastName();
        const name = firstname + ' ' + lastname;
        let type = faker.datatype.number({min: 1, max: 2});
        const password = faker.internet.password();
        const email = faker.internet.email(firstname, lastname + i, 'bookingithere.com');
        const phone = faker.phone.number('9########');
        const createdAt = faker.date.past();

        //type = await UserType.findOne({code: type})

        await User.create({
            email: email,
            password: bcrypt.hashSync(password, parseInt(process.env.BCRYPT_SALTROUNDS)),
            name: name,
            phone: phone,
            user_type_id: type,
            status: 1
        });
    }
    return 'Users=' + (i === num ? 'done' : 'fail');
};

// House Seeds
async function generateHouses(num) {
    let i = 0;
    const postalCodesDB = await PostalCode.findAll();
    if (postalCodesDB) {
        do {
            const name = faker.name.firstName();
            const doorNumber = faker.datatype.number({min: 1, max: 1000});
            let floorNumber = faker.datatype.number({min: 1, max: 14});
            const price = parseFloat(faker.finance.amount());
            const guestsNumber = faker.datatype.number({min: 1, max: 14});
            const status = faker.datatype.number({min: 1, max: 3});
            const road = faker.address.street();
            const propertyAssessment = faker.datatype.number({min: 50000, max: 1000000});
            const service = faker.datatype.number({min: 1, max: 3});
            const pricee = faker.datatype.number({min: 10, max: 50});
            const imageUrls = [
                `${process.env.CLIENT_API_BASE_URL}/images/test.jpg`,
                `${process.env.CLIENT_API_BASE_URL}/images/testt.jpg`,
                `${process.env.CLIENT_API_BASE_URL}/images/testtt.jpg`
            ];
            const aleimage = imageUrls[faker.datatype.number({min: 0, max: 2})];

            const postalCode = (postalCodesDB.sort(() => Math.random() - 0.5))[0]

            let findpostalCode = await PostalCode.findOne({where: {postalCode: postalCode.postalCode}});
            if (!findpostalCode) {
                continue;
            }

            let findUser = await User.findOne({
                where: {
                    user_type_id: 2
                },
                order: Sequelize.literal('rand()'),
                limit: 1
            });

            if (findUser.user_type_id !== 2) {
                continue;
            }

            let house = await House.create({
                name: name,
                doorNumber: doorNumber,
                floorNumber: floorNumber,
                price: price,
                guestsNumber: guestsNumber,
                status: status,
                postalCode: findpostalCode.postalCode,
                road: road,
                propertyAssessment: propertyAssessment,
                user_id: findUser.id,
                imageUrls: [aleimage]
            });
            await HouseServices.create({
                house_id: house.id,
                service_id: service,
                price: pricee,
            })
            i++;
        } while (i < num);
    }
    return 'Houses=' + (i === num ? 'done' : 'fail');
};

async function generateReservations(num) {
    let i = 0;
    for (i = 0; i < num; i++) {
        const init_date = faker.date.past();
        const end_date = faker.date.future();
        const guestsNumber = faker.datatype.number({min: 1, max: 10});
        const user_id = faker.datatype.number({min: 1, max: 50});
        const house_id = faker.datatype.number({min: 1, max: 100});
        const state_id = faker.datatype.number({min: 1, max: 3});
        const service = faker.datatype.number({min: 1, max: 3})
        const paymentState = faker.datatype.number({min: 1, max: 2})
        const creationDate = faker.date.past();
        const payment = faker.date.future();


        let findUser = await User.findOne({where: {id: user_id}});
        let findHouse = await House.findOne({where: {id: house_id}});
        let findHService = await HouseServices.findOne({where: {house_id: house_id, service_id: service}});
        let findService = await Service.findOne({where: {id: service}});


        let findPaymentState = await PaymentState.findOne({where: {id: paymentState}})
        if (findUser && findHouse && findHService && findPaymentState) {

            let reservation = await Reservation.create({
                init_date: init_date,
                end_date: end_date,
                guestsNumber: guestsNumber,
                user_id: user_id,
                house_id: house_id,
                state_id: state_id,
            });
            await ReservationServices.create({
                reservation_id: reservation.id,
                service_id: service,
                price: findHService.price,
            })
            const services = [{'name': findService.name}];

            const valor = await Reservation.calculateTotalPrice(house_id, init_date, end_date, services, House, Service, HouseServices);
            await Payment.create({
                reservation_id: reservation.id,
                state_id: paymentState,
                creationDate: creationDate,
                paymentDate: payment,
                paymentMethod: "MBway",
                paymentValue: valor
            })
        }

    }
    return 'Reservations=' + (i === num ? 'done' : 'fail');
};

// Feedback Seeds
async function generateFeedbacks(num) {
    let i = 0;
    for (i = 0; i < num; i++) {
        const reservation = faker.datatype.number({min: 1, max: 40});
        const comment = faker.lorem.sentence();
        const classification = faker.datatype.number({min: 1, max: 5});

        let findReservation = await Reservation.findOne({where: {id: reservation}});
        if (findReservation) {
            const feedback = await Feedback.create({
                reservation: reservation,
                comment: comment,
                classification: classification,
            });
        }
    }
    return 'Feedbacks=' + (i === num ? 'done' : 'fail');
};

// Announcements Seeds
async function generateAnnouncements(num) {
    let i = 0;
    for (i = 0; i < num; i++) {
        const priceClick = faker.datatype.number({min: 0.1, max: 5});
        //const totalMonth = faker.datatype.number({min: 30, max: 200});
        const numbClicks = faker.datatype.number({min: 1, max: 1000});
        const state = faker.datatype.number({min: 0, max: 1});
        const end_date = faker.date.future();
        const house_id = faker.datatype.number({min: 1, max: 100});
        const status = faker.datatype.number({min: 1, max: 2});
        const creationDate = faker.date.past();
        const paymentDate = faker.date.future();
        const paymentValue = faker.datatype.number({min: 30, max: 200});


        let findHouse = await House.findOne({where: {id: house_id}});
        let findAnnouncement = await Announcement.findOne({where: { house_id: house_id }});
        if (findHouse && findHouse.status != 1 && !findAnnouncement) {

            let announcement = await Announcement.create({
                priceClick: priceClick,
                //totalMonth: totalMonth,
                numbClicks: numbClicks,
                house_id: house_id,
                state: state,
                end_date: end_date,
            });
            
            await AnnouncementPayment.create({
                announcement: announcement.id,
                status: status,
                creationDate: creationDate,
                paymentDate: paymentDate,
                paymentMethod: "MBway",
                paymentValue: paymentValue,
            })
        }

    }
    return 'Announcements=' + (i === num ? 'done' : 'fail');
};

// Seed function
const seedCall = async () => {
    console.log('Seeding DB...');
    let result;
    let exist;

    try {
        exist = await PostalCode.count()
        if (!exist) {
            console.log('Postal Code');
            result = await seedPostalCodes()
            console.log(result)
        }
    } catch (e) {

    }

    try {
        exist = await UserType.count()
        if (!exist) {
            console.log('UserTypes');
            await UserType.bulkCreate([
                {name: 'Utilizador'},
                {name: 'Anunciante'},
                {name: 'Admin'}
            ]);
            console.log('UserTypes=done');
        }
    } catch (e) {
    }

    try {
        exist = await User.count()
        if (!exist) {
            console.log('Users');
            result = await generateUsers(100);
            console.log(result);
        }
    } catch (e) {
    }

    try {
        exist = await StatusHouse.count()
        if (!exist) {
            console.log('StatusHouses');
            await StatusHouse.bulkCreate([
                {status: 'Suspenso'},
                {status: 'Disponivel'},
                {status: 'Em Utilização'}
            ]);
            console.log('StatusHouses=done');
        }
    } catch (e) {
    }

    try {
        exist = await Service.count()
        if (!exist) {
            console.log('Services');
            await Service.bulkCreate([
                {name: 'Limpeza', state: 1},
                {name: 'Wifi', state: 1},
                {name: 'Parque', state: 1}
            ]);
            console.log('Services=done');
        }
    } catch (e) {
    }

    try {
        exist = await House.count()
        if (!exist) {
            console.log('Houses');
            result = await generateHouses(200);
            console.log(result);
        }
    } catch (e) {
    }

    try {
        exist = await ReservationState.count()
        if (!exist) {
            console.log('ReservationStates');
            await ReservationState.bulkCreate([
                {state: 'Pendente'},
                {state: 'Em uso'},
                {state: 'Completa'},
                {state: 'Avaliada'},
                {state: 'Cancelada'},
                {state: 'Aprovada'}
            ]);
            console.log('ReservationStates=done');
        }
    } catch (e) {
    }

    try {
        exist = await PaymentState.count()
        if (!exist) {
            console.log('PaymentStates');
            await PaymentState.bulkCreate([
                {state: 'Pendente'},
                {state: 'Completo'},
                {state: 'Reembolsado'}
            ]);
            console.log('PaymentStates=done');
        }
    } catch (e) {
    }

    try {
        exist = await Reservation.count()
        if (!exist) {
            console.log('Reservations');
            result = await generateReservations(100);
            console.log(result);
        }
    } catch (e) {
    }

    try {
        exist = await Feedback.count()
        if (!exist) {
            console.log('Feedbacks');
            result = await generateFeedbacks(100);
            console.log(result);
        }
    } catch (e) {
    }

    try {
        exist = await Announcement.count()
        if (!exist) {
            console.log('Announcements');
            result = await generateAnnouncements(100);
            console.log(result);
        }
    } catch (e) {
    }
}

seedCall().then(() => {
    console.log('done')
    process.exit()
});