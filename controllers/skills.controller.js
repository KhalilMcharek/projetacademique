const SkillModel = require("../models/Skill.model")


const create = (req, res) => {
    let item = new SkillModel(req.body)

    item.save().then(() => {
        res.send({ message: 'Added successfully' })
    }).catch((err) => {
        res.status(410).send(err.errorResponse)
    })
}
const getAll = async (req, res) => {
    let result = await SkillModel.find()
    res.send(result)
}



const getById = async (req, res) => {
    let id = req.params.x
    try {
        let data = await SkillModel.findOne({ _id: id })
        res.send(data)
    } catch (err) {
        res.status(420).send(err)
    }
}

const update = async(req, res) => {
    let id = req.params.id
    try{
       let result =await SkillModel.updateOne({_id : id} ,req.body)
       res.send(result)
    }catch(err){
        res.status(420).send(err)
    }

}

const remove = (req, res) => {
    let id = req.params.id
    SkillModel.deleteOne({_id : id})
    .then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.status(420).send(err)
    })
}

module.exports = { create , getAll , getById , update , remove }