const express = require("express")
const app = express()
const db = require('./config/database')
// bring ejs template

app.set('view engine', 'ejs')

//bring static

app.use(express.static('public'))
app.use(express.static('node_modules'))

app.get('/', (req,res)=> {

    res.send(" it is working from web")
})

// bringg events routes

const events = require('./routes/event-routes')
app.use('/events', events)

// listen to port 3000

app.listen(3000, ()=> {

    console.log(' app is wokring on port 3000')
})