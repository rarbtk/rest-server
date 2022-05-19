const express = require("express");
const router = express.Router();
const {
  usersGet,
  userPut,
  userPost,
  userDelete,
  userPatch
} = require("../controllers/users");

router.get("/", usersGet);
router.put("/put/:id", userPut);
router.post("/post",userPost);
router.delete("/delete", userDelete)
router.patch("/patch", userPatch);

module.exports = router; 


