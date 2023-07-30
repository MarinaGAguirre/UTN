var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST datos de formulario */
router.post('/', async (req, res, next) => {

  console.log(req.body) // Acá pregunto: Estoy capturando datos?

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var tel = req.body.tel;
  var mensaje = req.body.mensaje;

  //abre var obj
  var obj = {
    to: 'maguirre.neticel@gmail.com',
    subject: 'Contacto Web Cerveceria',
    html: nombre + ' se contacto a través de la web y quiere info a este correo ' + email + '. <br> Además comentó: ' + mensaje + '. <br> Su tel es: ' + tel
  }   //cierra var obj

  var transporter = nodemailer.createTransport ({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  }) //cierra var transport

  var info = await transporter.sendMail(obj);

  res.render('index', {
  message: 'Mensaje enviado correctamente'
  });

}); //cierra petición del post

module.exports = router;