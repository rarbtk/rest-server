const {response} = require("express")
const usersGet = (req, res = response) => {
res.render("index")
};

const userPut = (req, res = response) => {

const id = req.params.id
    res.json({
    msg: "put API",
    id
  });
};

const userPost = (req, res = response) => {
let {name,lastname} = req.body;
res.json({
    msg:"Soy un Post",
    name,
    lastname
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
