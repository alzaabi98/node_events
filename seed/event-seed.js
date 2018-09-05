const db = require('../config/database')
const Event = require('../models/Evnet')

let newEvent = new Event({
    title: ' this is event 1',
    description: ' ths is the best event in world',
    location: 'oman',
    date: Date.now()

})

newEvent.save( (err)=> {
    
    if(!err) {
        console.log('record was added')
    } else {
        console.log(err)
    }
    
})




