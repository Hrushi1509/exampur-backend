const express = require('express')

const router = express.Router()

const db = require('../db')

router.get('/allusers', async (req,res)=>{
    try{
        const response = await db.promise().query('SELECT * FROM users')
        console.log(response[0])
        res.status(200).json(response[0])
    }
    catch(err){
        res.status(400).json(err)
    }
})


router.get('/search/:userId', async (req,res)=>{
    try{
        const userId = req.params.userid;
        const response = await db.promise().query(`SELECT * FROM users WHERE userid = '${userId}'`)
        res.status(200).json(response[0])
    }
    catch(err){
        res.status(400).json(err)
    }
})
router.get('/finduser/', async (req,res)=>{
    try{
        const userId = req.query.id;
        const response = await db.promise().query(`SELECT * FROM users WHERE userid = '${userId}'`)
        res.status(200).json(response[0])
    }
    catch(err){
        res.status(400).json(err)
    }
})


// /users/removeuser/:userid
router.delete('/removeuser/:userId', async (req,res)=>{
    try{
        const userId = req.params.id;
        const response = await db.promise().query(`DELETE FROM users WHERE userid = '${userId}'`)
        res.status(200).json(response[0])
    }
    catch(err){
        res.status(400).json(err)
    }
})




module.exports = router;