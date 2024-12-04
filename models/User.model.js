const mongoose = require('mongoose')
const SkillModel = require('./Skill.model')

const schema = mongoose.Schema({
    firstName : String,
    lastName : {type : String},
    email : {type : String , required : true , unique : true},
    salary : {type : Number , default : 0},
    image : {
        name : String,
        path : String
    },
   
    password : String,
    skills: [{type : mongoose.Schema.Types.ObjectId , ref : SkillModel}],
    supervisorId : {type : mongoose.Schema.Types.ObjectId , ref : 'User'},
    resetKey : String,
    resetTimeout : Date
})

module.exports = mongoose.model('User' , schema)