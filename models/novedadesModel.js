var pool = require('./bd');

// Sirve para listar las Novedades:
async function getNovedades() {
  var query = "select * from novedades order by id desc";
  var rows = await pool.query(query);
  return rows;
}

// Abajo eliminamos Novedades:
async function deleteNovedadById(id) {
  var query = "delete from novedades where id = ?";
  var rows = await pool.query(query, [id]);
  return rows;
}

async function insertNovedad(obj) {
  try {
    var query = "insert into novedades set ?";
    var rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  } //cierra catch
} //cierra insert

// Abajo me trae 1 Novedad por id:
async function getNovedadById(id) {
  var query = "select * from novedades where id = ?";
  var rows = await pool.query(query, [id]);
  return rows[0];
}

// Abajo Modificamos 1 Novedad: update/actualizada por id:
async function modificarNovedadById(obj, id) {
  try {
    var query = "update novedades set ? where id = ?";
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
} //Cierra Modificamos 1 Novedad: update/

module.exports = {
  getNovedades,
  deleteNovedadById,
  insertNovedad,
  getNovedadById,
  modificarNovedadById,
}
