DROP TABLE RELEASED_ON;
DROP TABLE PLAYLIST_SONGS;
DROP TABLE PLAYLIST;
DROP TABLE FEATURES;
DROP TABLE SONG;
DROP TABLE ALBUM;
DROP TABLE ARTIST;
DROP TABLE USER_GROOVE;

DROP SEQUENCE album_seq;
DROP SEQUENCE song_seq;
DROP SEQUENCE artist_seq;
DROP SEQUENCE playlist_seq;

-- DROP TRIGGER album_id_trigger;
-- DROP TRIGGER song_id_trigger;
-- DROP TRIGGER artist_id_trigger;
-- DROP TRIGGER song_duration_trigger;
-- DROP TRIGGER playlist_id_trigger;
-- DROP TRIGGER playlist_duration_trigger;

DROP PROCEDURE insert_album;
DROP PROCEDURE insert_song;
DROP PROCEDURE insert_artist;
DROP PROCEDURE create_playlist;
DROP PROCEDURE insert_into_playlist;
DROP PROCEDURE signup;
DROP PROCEDURE login;

