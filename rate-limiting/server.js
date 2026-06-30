import express from "express"

const app = express()
const PORT = 3000

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(PORT, () => {
    console.log(`server running at PORT: ${PORT}`)
})