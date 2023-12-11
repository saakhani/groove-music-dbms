const {getConnection} = require('../config/connection.js');

module.exports = {
  getAllArtists: async function  (req, res){
    let connection ;
    try {
      console.log("hitttt--<<<<<<")
      connection = await getConnection();
      const table = await connection.execute("SELECT * FROM ARTIST");
      // console.log(table.rows);
      res.status(200).send(table.rows);
    } 
    catch (error) {
      console.error('Error executing SQL query to get all artists:', error);
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

  getAllArtistNames: async function  (req, res){
    let connection ;
    try {
      console.log("hitttt--<<<<<<")
      connection = await getConnection();
      const table = await connection.execute("SELECT ID, NAME FROM ARTIST");
      // console.log(table.rows);
      res.status(200).send(table.rows);
    } 
    catch (error) {
      console.error('Error executing SQL query to get all artists:', error);
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

  getArtistName: async function  (req, res){
    let connection ;
    try {
      console.log("hitttt--<<<<<<")
      connection = await getConnection();
      const table = await connection.execute(`SELECT NAME FROM ARTIST WHERE ID = UPPER('${req.params.id}')`);
      // console.log(table.rows);
      res.status(200).send(table.rows[0]);
    } 
    catch (error) {
      console.error('Error executing SQL query to get all artists:', error);
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
  }
}
