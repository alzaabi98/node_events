const express = require("express")
const router = express.Router()

// route to home events
router.get('/', (req,res)=> {
    
    res.render('event/index')
})

// show single event

router.get('/:id', (req,res)=> {
    
    res.render('event/show')
})


module.exports = router 