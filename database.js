const dbPool = require('./mariadb');

async function updateToDatabase(data) {
  let con;
  let lastId;
  try {
    con = await dbPool.getConnection();
    const result = await con.query('INSERT INTO ag_ifsc_codes (`bank`, `ifsc`, `branch`, `address`, `contact`, `city`, `district`, `state`) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE ifsc = ?', [
        data.bank, data.ifsc, data.branch, data.address, data.contact, data.city, data.district, data.state, data.ifsc
    ]);
    lastId = result.insertId;
    

  } catch (err) {
    console.log(err);
    return false;
  } finally {
    if(con) con.end();
  }

  return lastId;
}

exports.updateToDatabase = updateToDatabase;