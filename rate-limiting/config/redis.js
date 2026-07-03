import { createClient } from "redis"

const redisClient = createClient()

await redisClient.connect()

console.log("Redis connected")

export default redisClient