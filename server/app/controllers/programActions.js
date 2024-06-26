// Some data to make the trick
const tables = require('../../database/tables')


const browse = async (req, res) => {
  const programsFromDB = await tables.program.readAll();

  res.json(programsFromDB);
};

module.exports = { browse };