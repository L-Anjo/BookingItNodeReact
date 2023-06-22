const Reservation = require('../../src/models/Reservation');
const House = require('../../src/models/House');
const Service = require('../../src/models/Service');
const HouseServices = require('../../src/models/HouseServices');
const {faker} = require('@faker-js/faker');
/**
 * Reservation Model Test
 *
 * @author Luís Anjo
 */
describe('Reservation model methods', () => {
  it('Deve calcular corretamente o preço total da reserva', async () => {
    // Crie mocks dos modelos House, Service e HouseServices
    const houseMock = {
      id: 1,
      price: faker.finance.amount(),
      findOne: jest.fn().mockResolvedValue({ price: 100 })
    };

    const serviceMock = {
      id: 1,
      name: 'Serviço de Teste',
      findOne: jest.fn().mockResolvedValue({ id: 1 })
    };

    const houseServicesMock = {
      price: faker.finance.amount(),
      findOne: jest.fn().mockResolvedValue({ price: 50 })
    };

    // Chame a função calculateTotalPrice com os mocks
    const totalPrice = await Reservation.calculateTotalPrice(
      houseMock.id,
      '2023-06-05',
      '2023-06-08',
      [{ name: 'Serviço de Teste' }],
      houseMock,
      serviceMock,
      houseServicesMock
    );

    // Verifique se o preço total é calculado corretamente
    expect(totalPrice).toEqual(350); // (100 por noite * 3 noites) + 50 de serviço
  });
});
