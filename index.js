const express = require('express');
const app =express();

app.use(express.json());

const uuid = require('uuid');

//connect to server

app.listen(2000,()=>{
    console.log('server started 2000');
});

let Persons =[
    {
        id:uuid.v4(),
        name:'Guna',
        age:19
    },
    {
        id:uuid.v4(),
        name:'harish',
        age:32
    },
    {
        id:uuid.v4(),
        name:'Logesh',
        age:24
    }
]

                                    // GET

// Get group of values 
app.get('/persons',(req,res)=>{
    res.send(Persons);
})
// Get perticular value
app.get('/:id',(req,res)=>{
    let perticular = Persons.filter(e => e.id === req.params.id)
    res.status(200).send(perticular);
})

app.get('/',(req,res)=>{
    res.send('Hi friends');

})

app.get('/about',(req,res)=>{
    res.send('Hi friends i am about');
})

// POST


app.post('/', async (req,res)=>{   
  Persons.push(req.body);
  res.status(200).json(Persons);
})        
















//database connection

//  mongoose.connect('mongodb://localhost:27017/persons',(err)=>{
//     if(err){
//         console.log('DB not connected');
//     }
//     else{
//         console.log('DB is connected');
//     }
// });
