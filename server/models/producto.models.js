const mongoose = require ('mongoose')

const ProductoSchema = mongoose.Schema({
    title:{
        type:String
    },
    price:{
        type:Number
    },
    descripcion:{
        type:String
        
    },
},{timestamps:true})


module.exports.Producto = mongoose.model('Producto',ProductoSchema)