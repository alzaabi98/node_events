const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/events', (err)=> {

    if (err) {
        console.log(err)
    } else {
        console.log('connected to db succcesfuly...')
    }
})