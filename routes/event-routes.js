const express = require("express")
const router = express.Router()
const Event = require('../models/Evnet')

// route to home events
router.get('/', (req,res)=> {   
    Event.find({}, (err,events)=> {
   //     res.json(events)
        let chunk = []
        let chunkSize = 3
        for (let i =0 ; i < events.length ; i+=chunkSize) {
            chunk.push(events.slice( i, chunkSize + i))
        }
        //res.json(chunk)
         res.render('event/index', {
             chunk : chunk
         })
    })
  
})

// show single event

router.get('/:id', (req,res)=> {
    
    res.render('event/show')
})


module.exports = router 