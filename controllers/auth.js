const bcrypt = require('bcryptjs');
const User = require('../models/User');
const keys = require('../config/keys');
const jwt = require('jsonwebtoken');
const errorHandler = require('../utils/errorHendler');


module.exports.login = async function(req, res) {
  const candidate = await User.findOne({email: req.body.email});

  if(candidate) {
    const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);
    if(passwordResult){
      //Генерим токен для пользователя
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate._id
      }, keys.jwt, {expiresIn: 60 * 60});

      res.status(200).json({
        token: `Bearer ${token}`,
      })  
    } else {
      res.status(401).json({
        message: "Password not allowed, try again"
      })
    }
  } else {
    res.status(404).json({
      message: "User not Found! try again"
    })
  }
}

module.exports.register = async function(req, res) {

  const candidate = await User.findOne({email: req.body.email});
  
  if(candidate) {
    // проверка на дубль пользователя
    res.status(409).json({
      message: 'duplicate email, Try another adress'
    });
  } else {

    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password;

    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(password, salt),
  });
  try{
    await user.save();
    res.status(201).json(user);
    } catch(e) {
      errorHandler(res, e);
    }
  }
  user.save().then( () => console.log('User created'))
}