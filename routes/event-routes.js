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

//create new events

router.get('/create', (req,res)=> {

    res.render('event/create')
})
// save event to db

router.post('/create', (req,res)=> {

    console.log(req.body)
    let newEvent = new Event({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        location: req.body.location,
        created_at: Date.now()
    })

    newEvent.save( (err)=> {
        if(!err) {
            console.log('event was added')
            res.redirect('/events')
        } else {
            console.log(err)
        }
    })
})

// show single event
router.get('/:id', (req,res)=> {
    Event.findOne({_id: req.params.id}, (err,event)=> {
        
       if(!err) {
           
        res.render('event/show', {
            event: event
        })

       } else {
           console.log(err)
       }
    
    })
 
})


module.exports = router 