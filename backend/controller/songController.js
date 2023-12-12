const {getConnection} = require('../config/connection.js');

module.exports = {
  getAllSongs: async function  (req, res){
    let connection ;
    try {
      console.log("hitttt--<<<<<<")
      connection = await getConnection();
      const table = await connection.execute("select * from SONG INNER JOIN RELEASED_ON ON SONG.ID = RELEASED_ON.SONG_ID");
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
  addSong: async function  (req, res){
    let connection;
    try {
      console.log("hitttt--<<<<<<")
      connection = await getConnection();
      console.log(req.body)
      const query = `begin insert_song('${req.body.song_name}', '${req.body.artist_name}', '${req.body.album_name}', '10-OCT-2021', '${req.body.genre}', ${req.body.duration}, ${req.body.song_position}); end;`
      const options = {
        autoCommit: true,
      };
      await connection.execute(query, {}, options);
      res.status(202).send("Added");
    } 
    catch (error) {
      console.error('Error executing SQL query to insert artist:', error);
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
  searchSongsByName: async function  (req, res){
    let connection ;
    try {
      connection = await getConnection();
      const table = await connection.execute(`
      select * from SONG INNER JOIN RELEASED_ON ON SONG.ID = RELEASED_ON.SONG_ID
      WHERE LOWER(SONG.NAME) LIKE LOWER('%${req.params.name}%')
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
