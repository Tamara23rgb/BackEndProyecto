const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async (req, res) => {
    const users = await User.findAll()
    return res.json(users);
});

const create = catchError(async(req, res) => {
    const {first_name, last_name, email, password, birthday} = req.body
    const userBody = {
        first_name,
        last_name,
        email,
        password,
        birthday
    }
    const user = await User.create(userBody)
    return res.status(201).json(user)
})

const getOne = catchError(async(req,res) => {
    const {id} = req.params
    const user = await User.findByPk(id) 
    return res.json(user)
})

const remove = catchError(async(req,res) => {
    const {id} = req.params
    await User.destroy({where: {id}})
    return res.sendStatus(204)
}) 

module.exports = {
    getAll,
    create,
    getOne,
    remove
};