const express = require("express")
const app = express()


app.get('/', (req,res)=> {

    res.send(" it is working from web")
})

// bringg events routes

const events = require('./routes/event-routes')
app.use('/events', events)

// listen to port 3000

app.listen(3000, ()=> {

    console.log(' app is wokring on port 3000, i am in lesson 3')
})