import redis from 'redis';

const redisClient = redis.createClient();

const cache = (req, res, next) => {
    const key = req.url.replace('/', '');
    console.log(key)
    redisClient.get(key, (err, result) => {
        if (err === null && result !== null) {
            console.log("From cache")
            res.send(JSON.parse(result))
        } else {
            res.sendResponse = res.send
            res.send = (body) => {
                console.log(body)
                redisClient.set(key, body, (err, reply) => {
                    if (reply === 'OK')
                        console.log(reply)
                    res.sendResponse(body)
                })
            }
            next()
        }
    })
}

export default cache;