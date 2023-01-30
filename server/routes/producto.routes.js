const controllerProducto= require('../controllers/producto.controllers');

module.exports = (app) => {
  app.post('/api/crear/producto', controllerProducto.crearproducto)
  app.get('/api/prodcutos', controllerProducto.listaproducto)
  
}