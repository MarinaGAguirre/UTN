var express = require("express");
var router = express.Router();
var novedadesModel = require("../../models/novedadesModel");

//Acá el get trae la vista de NOVEDADES:
router.get("/", async function (req, res, next) {
  var novedades = await novedadesModel.getNovedades();
  res.render("admin/novedades", {
    layout: "admin/layout",
    usuario: req.session.nombre,
    novedades,
  });
});

/* Para ELIMINAR una NOVEDAD: */
router.get("/eliminar/:id", async (req, res, next) => {
  var id = req.params.id;
  await novedadesModel.deleteNovedadById(id);
  res.redirect("/admin/novedades");
}); // Cierra ELIMINAR una NOVEDAD

//Abajo vemos la vista de agregar.hbs método .get
router.get("/agregar", (req, res, next) => {
  res.render("admin/agregar", {
    //agregar.hbs dentro del admin
    layout: "admin/layout",
  }); //cierra render
}); // cierra get

/* Insertamos la NOVEDAD, que se guarde y se muestre en el LISTADO: */

router.post("/agregar", async (req, res, next) => {
  try {
    if (
      req.body.nombre != "" &&
      req.body.direccion != "" &&
      req.body.detalles != ""
    ) {
      await novedadesModel.insertNovedad(req.body);
      res.redirect("/admin/novedades");
    } else {
      res.render("admin/agregar", {
        layout: "admin/layout",
        error: true,
        message: "Todos los campos son requeridos",
      });
    }
  } catch (error) {
    console.log(error);
    res.render("admin/agregar", {
      layout: "admin/layout",
      error: true,
      message: "No se cargó la novedad",
    });
  }
});

router.get("/modificar/:id", async (req, res, next) => {
  let id = req.params.id;
  let novedad = await novedadesModel.getNovedadById(id);
  res.render("admin/modificar", {
    layout: "admin/layout",
    novedad,
  });
}); //FIN Get Modificar

router.post("/modificar", async (req, res, next) => {
  try {
    let obj = {
      nombre: req.body.nombre,
      direccion: req.body.direccion,
      detalles: req.body.cuerpo,
    };
    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect("/admin/novedades");
  } catch (error) {
    console.log(error);
    res.render("admin/modificar", {
      layout: "admin/layout",
      error: true,
      message: "No se modifico la novedad",
    });
  } //cierro Catch
}); // Cierro Post

module.exports = router;
