var express = require("express");
var router = express.Router();
var novedadesModel = require("../../models/novedadesModel");

var util = require("util");
var cloudinary = require("cloudinary").v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

//Abajo LISTAMOS LAS NOVEDADES:
router.get("/", async function (req, res, next) {
  var novedades = await novedadesModel.getNovedades();

  novedades = novedades.map((novedad) => {
    if (novedad.img_id) {
      const imagen = cloudinary.image(novedad.img_id, {
        width: 100,
        height: 80,
        crop: "fill",
      });
      return {
        ...novedad, //Muestra nombre, dirección y detalles.
        imagen,
      };
    } else {
      return {
        ...novedad,
        imagen: "",
      };
    }
  });

  res.render("admin/novedades", {
    layout: "admin/layout",
    usuario: req.session.nombre,
    novedades,
  });
});

/* Para ELIMINAR una NOVEDAD: */
router.get("/eliminar/:id", async (req, res, next) => {
  var id = req.params.id;

  let novedad = await novedadesModel.getNovedadById(id);
  if (novedad.img_id) {
    await destroy(novedad.img_id);
  }

  await novedadesModel.deleteNovedadById(id);
  res.redirect("/admin/novedades");
}); // Cierra Get de ELIMINAR una NOVEDAD

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
    var img_id = "";
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (
      req.body.nombre != "" &&
      req.body.direccion != "" &&
      req.body.detalles != ""
    ) {
      await novedadesModel.insertNovedad({
        ...req.body,
        img_id,
      });
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

/* INICIA POST Modificar: */
router.post("/modificar", async (req, res, next) => {
  try {
    let img_id = req.body.img_original;
    let borrar_img_vieja = false;
    if (req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await destroy(req.body.img_original);
    }
    var obj = {
      nombre: req.body.nombre,
      direccion: req.body.direccion,
      detalles: req.body.detalles,
      img_id,
    };

    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect("/admin/novedades");
    message: "No se modifico la novedad";
  } catch (error) {
    console.log(error);
  } //cierro Try
}); // Cierro Post

module.exports = router;
