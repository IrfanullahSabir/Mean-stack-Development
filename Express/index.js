const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());

const courses = [
    { id:1 , name:'Django'},
    { id:2 , name:'MangoDb'},
    { id:3 , name:'Angular'},
    { id:4 , name:'NodeJS'},
    { id:5 , name:'Flutter'}
];

app.get('/', (req,res)=>{
    res.send("Wellcome")
})

//find by id

app.get('/api/courses/:id', (req, res)=>{
    const course = courses.find( c => c.id === parseInt(req.params.id));
     // 404 for page not found 
    if(!course) res.status(404).send(' id not found');
    res.send(course);
})

//adding

app.post('/api/courses', (req, res)=>{

    const schema = Joi.object({
        name: Joi.string()
            .min(3)
            .max(30)
            .required()
        })

    const result = schema.validate(req.body);
    const { error } = validateCourse(req.body);
    if(error){
        // bad request
        res.status(400).send(result.error.details[0].message);
        return;
    }


    const course = {
        id: courses.length + 1,
        name: req.body.name
    } 
    courses.push(course);
    res.send(`${course} has been added`);
})

//Update

app.put('/api/courses/:id', (req, res)=>{
    const course = courses.find( c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send(' id not found');

    const { error } = validateCourse(req.body);
    if(error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    courses.name = req.body.name;
    
});

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string()
            .min(3)
            .max(30)
            .required()
        })

    return schema.validate(course);
}


const port = process.env.PORT || 3000;

app.listen(port,()=>{console.log(`Listning on port ${port} ....`)})