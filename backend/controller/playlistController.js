const {getConnection} = require('../config/connection.js');

module.exports = {
  getAllPlaylists: async function  (req, res){
    let connection ;
    try {
      console.log("hitttt--<<<<<<")
      connection = await getConnection();
      const table = await connection.execute("SELECT * FROM PLAYLIST");
      // console.log(table.rows);
      res.status(200).send(table);
    } 
    catch (error) {
      console.error('Error executing SQL query to get all playlists:', error);
      res.status(500).send('Internal Server Error');
    } 
    finally {
      if (connection) {
        try {
          // Release the connection when done
          await connection.close();
        } 
        catch (error) {
          console.error('Error closing database connection:', error);
        }
      }
    } 
  },
}
