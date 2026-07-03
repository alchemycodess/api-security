import express, { json } from "express"
import "./config/redis.js"
import redisClient from "./config/redis.js"

const app = express()
const PORT = 3000

app.use(express.json())

app.get("/", async (req, res) => {
    const count = await redisClient.incr(req.ip)
    
    if(count === 1) {
        await redisClient.expire(req.ip, 60)
    }

    if(count > 100) {
        res.status(429).json({
            message: "Too many requests..."
        })
    }
    res.send(`Count: ${count}`)
})

app.listen(PORT, () => {
    console.log(`server running at PORT: ${PORT}`)
})