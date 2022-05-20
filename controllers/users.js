const {response} = require("express");
const Usuarios = require("../models/usuarios")
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

const usersGet = (req, res = response) => {
res.render("index")};

const userPut = (req, res = response) => {
const id = req.params.id
    res.json({
    msg: "put API",
    id
  });
};

const userPost = async(req, res = response) => {
let {name,password,state,mail,} = req.body;


let usuarios = new Usuarios(req.body)
const salt = bcrypt.genSaltSync(10);


usuarios.password = bcrypt.hashSync(password, salt);



res.json({
    msg:"Soy un Post",
    name,password,state,mail,
})
};

const userDelete = (req, res = response) => {
  res.json({
    msg: "delete API",
  });
};
const userPatch= (req, res = response) => {
    res.json({
      msg: "patch API",
    });
  };

module.exports = {
  usersGet,
  userPut,
  userPost,
  userDelete,
  userPatch
};
