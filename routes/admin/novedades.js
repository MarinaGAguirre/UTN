var express = require("express");
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

//Acá el get trae la vista de NOVEDADES:
router.get("/", async function (req, res, next) {
  var novedades = await novedadesModel.getNovedades();
  res.render("admin/novedades", {
    layout: "admin/layout",
    usuario: req.session.nombre, novedades
  });
});

/* Para ELIMINAR una NOVEDAD: */
router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await novedadesModel.deleteNovedadById(id);
  res.redirect('/admin/novedades')
});

module.exports = router; 
