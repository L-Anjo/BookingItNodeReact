const db = require('../../src/database/index');
const User = require('../../src/models/User')
const bcrypt = require("bcrypt");

/**
 * Users model Test
 *
 * @author João Ponte
 */
describe('Users model methods', () => {
    it('Deve retornar true ao usar o metodo comparePassword',  async () => {
        let response;
        const passwod = "123456";
        const user = new User({
            name: 'User teste',
            email: 'userteste@bookingithere.com',
            password: bcrypt.hashSync(passwod, parseInt(process.env.BCRYPT_SALTROUNDS)),
            user_type_id: 1
        });

        response = await user.comparePassword(passwod)
        expect(response).toBe(true);
    });
});