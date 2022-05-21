const Dbconecction = require("mongoose")

const coneccion = async ()=>{

    try{
        await Dbconecction.connect(process.env.MONGODB)
      
        

    }catch(err){console.log(err)} 
}

module.exports = {
    coneccion
}

