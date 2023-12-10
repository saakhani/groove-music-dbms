const {getConnection} = require('../config/connection.js');

module.exports = {
  getAllSongs: async function  (req, res){
    let connection ;
    try {
      console.log("hitttt--<<<<<<")
      connection = await getConnection();
      const table = await connection.execute("SELECT * FROM SONG");
      res.status(200).send(table);
    } 
    catch (error) {
      console.error('Error executing SQL query to get all songs:', error);
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
  getSongsByAlbumID: async function  (req, res){
    let connection ;
    try {
      console.log(req.params.id)
      console.log("hitttt--<<<<<<")
      connection = await getConnection();
      const table = await connection.execute(`
        SELECT RELEASED_ON.POSITION, SONG.NAME, SONG.DURATION, SONG.GENRE
        FROM RELEASED_ON INNER JOIN SONG ON RELEASED_ON.SONG_ID = SONG.ID INNER JOIN ARTIST ON SONG.ARTIST_ID = ARTIST.ID
        WHERE RELEASED_ON.ALBUM_ID LIKE UPPER('${req.params.id}')
        ORDER BY RELEASED_ON.POSITION ASC
      `);
      res.status(200).send(table);
    } 
    catch (error) {
      console.error('Error executing SQL query to get all songs by album id:', error);
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
