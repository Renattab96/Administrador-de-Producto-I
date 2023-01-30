const {Producto} = require('../models/producto.models')

const listaproducto = (req, res)=>{
    Producto.find()
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const crearproducto = (req, res)=>{
    Producto.create(req.body)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}



module.exports={
    crearproducto,
    listaproducto
}