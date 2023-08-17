var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var novedadesModel = require("../models/novedadesModel");
var cloudinary = require("cloudinary").v2;

/* GET home page. */
router.get('/', async function (req, res, next) {
  novedades = await novedadesModel.getNovedades();
  novedades = novedades.splice(0,5); //Selecciona los primeros 5 elementos del array.
  novedades = novedades.map(novedad => {
    if (novedad.img_id) {
      const imagen = cloudinary.url(novedad.img_id, {
        width: 320,
        crop: "fit",
      });
      return {
        ...novedad,
        imagen
      };
    } else {
      return {
        ...novedad,
        imagen: "/images/noimage.jpg"
      }
    }
  });

  res.render("index",{
    novedades
  });
});

/* POST datos de formulario */
router.post("/", async (req, res, next) => {
  console.log(req.body); // Acá pregunto: Estoy capturando datos?

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var tel = req.body.tel;
  var mensaje = req.body.mensaje;

  //abre var obj
  var obj = {
    to: "maguirre.neticel@gmail.com",
    subject: "Contacto Web Cerveceria",
    html:
      nombre +
      " se contacto a través de la web y quiere info a este correo " +
      email +
      ". <br> Además comentó: " +
      mensaje +
      ". <br> Su tel es: " +
      tel,
  }; //cierra var obj

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  }); //cierra var transport

  var info = await transporter.sendMail(obj);
  
  res.render("gracias");

}); //cierra petición del post

module.exports = router;
