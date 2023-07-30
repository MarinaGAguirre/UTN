var express = require("express");
var router = express.Router();

//Acá el get trae la vista, el layout de admin:
router.get("/", function (req, res, next) {
  res.render("admin/ventas", {
    layout: "admin/layout",
    usuario: req.session.nombre,
  });
});

module.exports = router;
