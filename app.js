const express = require('express')
const app = express()
const db = require('./db')
const User = require('./models/user.js')

app.use(express.json())

// const db_array = [
//     {fName:'Mohammad',favFood:'Shawerma'},
//     {fName:'Hosam',favFood:"Cheese Sandwich"}
// ]

// app.get('/',(req,res)=>{
//     res.json('Server is working')
// })
// app.get('/all',(req,res)=>{
//     res.json(db_array)
// })

// app.delete('/lastElement',(req,res)=>{
//     db_array.pop()
//     res.json(db_array)
// })

// app.put('/favFood/:index',(req,res)=>{
//     // db[req.params.index].favFood = req.body.newFood هذي طريقة
//     // وهذي طريقة ثانية وهي الأفضل . مرتبة بشكل جيد
//     const id = req.params.index
//     const newFavFood = req.body.newFood
//     db_array[id].favFood = newFavFood
//     // اذا تبغا تغير الستاتس
//     // res.status(anyNumber).json(db);
//     // for example: res.status(201).json(db);
//     res.json(db)
// })

// app.post('/newElement',(req,res)=>{
//     db_array.push(req.body)
//     res.json(db_array)
// })

// app.listen(5000,()=>{
//     console.log('Server ON PORT 5000 ... ')
// })

// هنا خلصنا CRUD Operations for Express والحمد لله
// Coming next ...
// MongoDB

app.get('/',(req,res)=>{
    res.json('Server is working')
})

app.get('/all',(req,res)=>{
    User.find({},(err,users)=>{
        if(err) {
            return handleError(err);
        }
        // console.log("GET", users);
        res.json(users);
    })
})

app.post('/insert',(req,res)=>{
    User.create({fName:'Saeed',favFood:'Mshawi'},
    (err, newData)=>{
        if(err) {
            return handleError(err);
        }
        // console.log("DATA", newData);
        res.json("Success create new user")
    })
})

console.log('==========')
console.log(User);

app.listen(5000,()=>{
    console.log('Server ON PORT 5000 ... ')
})