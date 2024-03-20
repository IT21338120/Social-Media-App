const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authCtrl ={
    register: async (req, res) => {
        try {
            const { fullname, username, email, password, gender } = req.body
            let newUserName = username.toLowerCase().replace(/ /g, '')

            const user_name = await Users.findOne({username: newUserName})
            if(user_name) return res.status(400).json({msg: "This username is already exists"})

            const user_email = await Users.findOne({email})
            if(user_email) return res.status(400).json({msg: "This email is already exists"})

            if(password.length < 8)
            return res.status(400).json({msg: "Password must be at least 8 characters"})

            const passwordHash = await bcrypt.hash(password, 12 )

            const newUser = new Users({
                fullname, username: newUserName, email, password: passwordHash, gender
            })

            console.log(passwordHash)

            res.json({msg: 'Registed Successfully!'})

        }catch(err) {
            return res.status(500).json({msg: err.message})
        }
    },
    login: async (req, res) => {
        try {

        }catch(err) {
            return res.status(500).json({msg: err.message})
        }
    },
    logout: async (req, res) => {
        try {

        }catch(err) {
            return res.status(500).json({msg: err.message})
        }
    },
    generateAccessToken: async (req, res) => {
        try {

        }catch(err) {
            return res.status(500).json({msg: err.message})
        }
    },

}

module.exports = authCtrl