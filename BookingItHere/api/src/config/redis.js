const redis = require('redis')

const redisClient = redis.createClient({
    socket:{
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
    },
    password: process.env.REDIS_PASSWORD
});

/**
 * Redis connection
 *
 * @author João Ponte
 */
(async () => {
    redisClient.on('error', (err) => {
        console.log('Redis Client Error', err);
    });
    //redisClient.on('ready', () => console.log('Redis is ready'));

    await redisClient.connect();

    await redisClient.ping();
})();
module.exports = redisClient;