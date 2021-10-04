const express= require('express')
const router = express.Router()
let USERS=require('../Models/USERS')

router.get('/test',(req,res)=>{
    res.send('it is working')
})

//http://localhost:5000/api/users/add
router.post('/add', async (req,res)=>{

    const{name,email}=req.body

    try{

        const newUser= new USERS({name,email})

        const user = await newUser.save()
        // console.log({msg:`${name} has been added`,user})
        // console.log('END ADD')
res.json({msg:`${name} has been added`,user})
console.log('has been added')
    } catch (error){
        console.log(error)
    }
})


//get all users
//http://localhost:5000/api/users/allusers

router.get('/allusers',async (req,res)=>{

    const{name,email}=req.body

    try{

        const users= await USERS.find()

        console.log({users})  
res.json({users})
console.log('has been added')
    } catch (error){
        console.log(error)
    }
})

// update user
//http://localhost:5000/api/users/delete/:id
router.put('/update/:email',async (req,res)=>{

    const mail = req.params.email

    try{

        const user = await USERS.findOneAndUpdate({email:mail},{$set:req.body})

        res.json({user})
    } catch (error){
        console.log(error)
    }
})


//detele user
//http://localhost:5000/api/users/delete/:id
router.delete('/delete/:id',async (req,res)=>{

    const idt = req.params.id

    try{

        const user = await USERS.findByIdAndDelete(idt)

        res.json({msg:'has been deleted',user})
    } catch (error){
        console.log(error)
    }
})
module.exports= router
