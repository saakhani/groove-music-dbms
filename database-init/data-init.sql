-- User Table

CREATE TABLE USER_GROOVE (
    EMAIL VARCHAR(100) PRIMARY KEY,
    PASSWORD VARCHAR(100) NOT NULL,
    NAME VARCHAR(100) NOT NULL
);

CREATE OR REPLACE PROCEDURE signup(email IN VARCHAR2, password IN VARCHAR2, name IN VARCHAR2)
AS
    user_count NUMBER;
BEGIN
    SELECT COUNT(*) INTO user_count
    FROM USER_GROOVE
    WHERE EMAIL = email;
    IF user_count > 0 THEN
        DBMS_OUTPUT.PUT_LINE('User already exists');
    ELSE
        INSERT INTO USER_GROOVE (EMAIL, PASSWORD, NAME) VALUES (email, password, name);
    END IF;
END;
/

CREATE OR REPLACE PROCEDURE login(email IN VARCHAR2, password IN VARCHAR2)
AS
    user_count NUMBER;
BEGIN
    SELECT COUNT(*) INTO user_count
    FROM USER_GROOVE
    WHERE EMAIL = email AND PASSWORD = password;
    IF user_count = 0 THEN
        DBMS_OUTPUT.PUT_LINE('Invalid Credentials');
    ELSE
        DBMS_OUTPUT.PUT_LINE('Login Successful');
    END IF;
END;
/

--Artist Table
CREATE TABLE ARTIST (
    ID VARCHAR(100) PRIMARY KEY,
    NAME VARCHAR(100) NOT NULL
);

CREATE SEQUENCE artist_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER artist_id_trigger
    BEFORE INSERT ON ARTIST
    FOR EACH ROW
    DECLARE
        new_id VARCHAR2(10);
        prefix VARCHAR2(2) := 'AR';
    BEGIN
        SELECT prefix || LPAD(artist_seq.NEXTVAL, 3, '0') INTO new_id FROM dual;
        :NEW.ID := new_id;
    END;
/


CREATE OR REPLACE PROCEDURE insert_artist(artist_name IN VARCHAR2)
AS
    artist_count NUMBER;
BEGIN
    SELECT COUNT(*) INTO artist_count
    FROM ARTIST
    WHERE NAME = artist_name;

    IF artist_count > 0 THEN
        DBMS_OUTPUT.PUT_LINE('Artist already exists');
    ELSE
        INSERT INTO ARTIST (NAME) VALUES (artist_name);
    END IF;
END;
/



-- SELECT * FROM ARTIST;

-- Album Table

CREATE TABLE ALBUM (
    ID VARCHAR(100) PRIMARY KEY,
    NAME VARCHAR(100) NOT NULL,
    DURATION NUMBER,
    ALBUM_TYPE VARCHAR(100) CHECK (ALBUM_TYPE IN ('Single', 'EP', 'LP')),
    ARTIST_ID VARCHAR(100) NOT NULL,
    FOREIGN KEY (ARTIST_ID) REFERENCES ARTIST(ID)
);

CREATE SEQUENCE album_seq START WITH 1 INCREMENT BY 1;

CREATE TRIGGER album_id_trigger
    BEFORE INSERT ON ALBUM
    FOR EACH ROW
    DECLARE
        new_id VARCHAR2(10);
        prefix VARCHAR2(2) := 'AL';
    BEGIN
        SELECT prefix || LPAD(album_seq.NEXTVAL, 3, '0') INTO new_id FROM dual;
        :NEW.ID := new_id;
        :NEW.DURATION := 0;
    END;
/

CREATE OR REPLACE PROCEDURE insert_album(album_name IN VARCHAR2, artist_name IN VARCHAR2, ALBUM_TYPE IN VARCHAR2)
AS
    artist_id VARCHAR2(10);
    album_count NUMBER;
    artist_count NUMBER;
BEGIN
    SELECT COUNT(*) INTO artist_count
    FROM ARTIST
    WHERE NAME = artist_name;
    IF artist_count = 0 THEN
        INSERT INTO ARTIST (NAME) VALUES (artist_name);    
    END IF;

    SELECT ID INTO artist_id
    FROM ARTIST
    WHERE NAME = artist_name;

    SELECT COUNT(*) INTO album_count
    FROM ALBUM
    WHERE NAME = album_name;

    IF album_count > 0 THEN
        DBMS_OUTPUT.PUT_LINE('Album already exists');
    ELSE
        INSERT INTO ALBUM (NAME, ARTIST_ID, ALBUM_TYPE) VALUES (album_name, artist_id, ALBUM_TYPE);
    END IF;
END;
/



-- SELECT * FROM ALBUM;

-- Song Table
CREATE TABLE SONG (
    ID VARCHAR(100) PRIMARY KEY,
    NAME VARCHAR(100) NOT NULL,
    DURATION NUMBER,
    GENRE VARCHAR(100),
    ARTIST_ID VARCHAR(100) NOT NULL,
    FOREIGN KEY (ARTIST_ID) REFERENCES ARTIST(ID)
);

CREATE SEQUENCE song_seq START WITH 1 INCREMENT BY 1;

CREATE TRIGGER song_id_trigger
BEFORE INSERT ON SONG
FOR EACH ROW
DECLARE
    new_id VARCHAR2(10);
    prefix VARCHAR2(2) := 'SO';
BEGIN
    SELECT prefix || LPAD(song_seq.NEXTVAL, 3, '0') INTO new_id FROM dual;
    :NEW.ID := new_id;
END;
/

CREATE TABLE RELEASED_ON (
    SONG_ID VARCHAR(100) NOT NULL,
    ALBUM_ID VARCHAR(100) NOT NULL,
    RELEASE_DATE DATE NOT NULL,
    POSITION NUMBER NOT NULL,
    FOREIGN KEY (SONG_ID) REFERENCES SONG(ID),
    FOREIGN KEY (ALBUM_ID) REFERENCES ALBUM(ID),
    PRIMARY KEY (SONG_ID, ALBUM_ID),
    CONSTRAINT position_check UNIQUE(ALBUM_ID, POSITION)
);

CREATE OR REPLACE TRIGGER song_duration_trigger
BEFORE INSERT ON RELEASED_ON
FOR EACH ROW
DECLARE
    song_duration NUMBER;
    album_duration NUMBER;

BEGIN    
    SELECT DURATION INTO song_duration
    FROM SONG
    WHERE ID = :NEW.song_id;

    SELECT DURATION INTO album_duration
    FROM ALBUM
    WHERE ID = :NEW.album_id;

    UPDATE ALBUM SET DURATION = album_duration + song_duration WHERE ID = :NEW.album_id;
END;
/

CREATE OR REPLACE PROCEDURE insert_song(song_name IN VARCHAR2, artist_name IN VARCHAR2, album_name IN VARCHAR2, release_date IN DATE, GENRE IN VARCHAR2, SONG_DURATION IN NUMBER, SONG_POSITION IN NUMBER)
AS
    artist_id VARCHAR2(10);
    album_id VARCHAR2(10);
    song_id VARCHAR2(10);
    song_count NUMBER;
    artist_count NUMBER;
    album_count NUMBER;

BEGIN
    SELECT COUNT(*) INTO artist_count
    FROM ARTIST
    WHERE NAME = artist_name;
    IF artist_count = 0 THEN
        INSERT INTO ARTIST (NAME) VALUES (artist_name);    
    END IF;

    SELECT ID INTO artist_id
    FROM ARTIST
    WHERE NAME = artist_name;

    SELECT COUNT(*) INTO album_count
    FROM ALBUM
    WHERE NAME = album_name;
    IF album_count = 0 THEN
        INSERT INTO ALBUM (NAME, ARTIST_ID) VALUES (album_name, artist_id);
    END IF;

    SELECT ID INTO album_id
    FROM ALBUM
    WHERE NAME = album_name;

    SELECT COUNT(*) INTO song_count
    FROM SONG
    WHERE NAME = song_name;
    IF song_count > 0 THEN
        DBMS_OUTPUT.PUT_LINE('Song already exists');
    ELSE
        INSERT INTO SONG (NAME, ARTIST_ID, GENRE, DURATION) VALUES (song_name, artist_id, GENRE, SONG_DURATION);
        SELECT ID INTO song_id
        FROM SONG
        WHERE NAME = song_name;
        INSERT INTO RELEASED_ON (SONG_ID, ALBUM_ID, RELEASE_DATE, POSITION) VALUES (song_id, album_id, release_date, SONG_POSITION);
    END IF;
END;
/

-- Feature Table
CREATE TABLE FEATURES (
    SONG_ID VARCHAR(100) NOT NULL,
    ARTIST_ID VARCHAR(100) NOT NULL,
    FOREIGN KEY (SONG_ID) REFERENCES SONG(ID),
    FOREIGN KEY (ARTIST_ID) REFERENCES ARTIST(ID),
    PRIMARY KEY (SONG_ID, ARTIST_ID)
);

-- Playlist Table
CREATE TABLE PLAYLIST (
    ID VARCHAR(100) PRIMARY KEY,
    NAME VARCHAR(100) NOT NULL,
    DURATION NUMBER,
    DESCRIPTION VARCHAR(100),
    CREATOR_ID VARCHAR(100) NOT NULL,
    FOREIGN KEY (CREATOR_ID) REFERENCES USER_GROOVE(EMAIL)
);

CREATE SEQUENCE playlist_seq START WITH 1 INCREMENT BY 1;

CREATE TRIGGER playlist_id_trigger
BEFORE INSERT ON PLAYLIST
FOR EACH ROW
DECLARE
    new_id VARCHAR2(10);
    prefix VARCHAR2(2) := 'PL';
BEGIN
    SELECT prefix || LPAD(playlist_seq.NEXTVAL, 3, '0') INTO new_id FROM dual;
    :NEW.ID := new_id;
    :NEW.DURATION := 0;
END;
/

-- Playlist Songs Table
CREATE TABLE PLAYLIST_SONGS (
    PLAYLIST_ID VARCHAR(100) NOT NULL,
    SONG_ID VARCHAR(100) NOT NULL,
    FOREIGN KEY (PLAYLIST_ID) REFERENCES PLAYLIST(ID),
    FOREIGN KEY (SONG_ID) REFERENCES SONG(ID),
    PRIMARY KEY (PLAYLIST_ID, SONG_ID)
);

CREATE OR REPLACE PROCEDURE create_playlist(playlist_name IN VARCHAR2, creator_email IN VARCHAR2, playlist_description IN VARCHAR2)
AS
    playlist_id VARCHAR2(100);
    creator_count NUMBER;
BEGIN
    SELECT COUNT(*) INTO creator_count
    FROM USER_GROOVE
    WHERE EMAIL = creator_email;
    IF creator_count = 0 THEN
        DBMS_OUTPUT.PUT_LINE('User does not exist');
    ELSE
        INSERT INTO PLAYLIST (NAME, CREATOR_ID, DESCRIPTION) VALUES (playlist_name, creator_email, playlist_description);
    END IF;
END;
/

CREATE OR REPLACE TRIGGER playlist_duration_trigger
BEFORE INSERT ON PLAYLIST_SONGS
FOR EACH ROW
DECLARE
    song_duration NUMBER;
    playlist_duration NUMBER;
BEGIN    
    SELECT DURATION INTO song_duration
    FROM SONG
    WHERE ID = :NEW.song_id;

    SELECT DURATION INTO playlist_duration
    FROM PLAYLIST
    WHERE ID = :NEW.playlist_id;

    UPDATE PLAYLIST SET DURATION = playlist_duration + song_duration WHERE ID = :NEW.playlist_id;
END;
/

CREATE OR REPLACE PROCEDURE insert_into_playlist(playlist_id IN VARCHAR2, song_id IN VARCHAR2)
AS
BEGIN
    INSERT INTO PLAYLIST_SONGS (PLAYLIST_ID, SONG_ID) VALUES (playlist_id, song_id);
END;
/

CREATE OR REPLACE FUNCTION get_artist_id(artist_name IN VARCHAR2)
RETURN VARCHAR2
AS
    artist_id VARCHAR2(10);
BEGIN
    SELECT ID INTO artist_id
    FROM ARTIST
    WHERE NAME = artist_name;
    RETURN artist_id;
END;
/

CREATE OR REPLACE FUNCTION get_album_id(album_name IN VARCHAR2)
RETURN VARCHAR2
AS
    album_id VARCHAR2(10);
BEGIN
    SELECT ID INTO album_id
    FROM ALBUM
    WHERE NAME = album_name;
    RETURN album_id;
END;
/



exec insert_artist('Taylor Swift');
exec insert_artist('Coldplay');
exec insert_artist('Ed Sheeran');

exec insert_album('Evermore', 'Taylor Swift', 'LP');
exec insert_album('4 Saal', 'Bayaan', 'EP');

exec insert_song('Willow', 'Taylor Swift', 'Evermore', '11-DEC-20', 'Pop', 3.34, 1);
exec insert_song('Champagne Problems', 'Taylor Swift', 'Evermore', '11-DEC-20', 'Pop', 4.04, 2);
exec insert_song('Gold Rush', 'Taylor Swift', 'Evermore', '11-DEC-20', 'Pop', 3.05, 3);
exec insert_song('Tis the Damn Season', 'Taylor Swift', 'Evermore', '11-DEC-20', 'Pop', 3.49, 4);
exec insert_song('Tolerate It', 'Taylor Swift', 'Evermore', '11-DEC-20', 'Pop', 4.05, 5);
exec insert_song('No Body, No Crime', 'Taylor Swift', 'Evermore', '11-DEC-20', 'Pop', 3.36, 6);
exec insert_song('Happiness', 'Taylor Swift', 'Evermore', '11-DEC-20', 'Pop', 5.15, 7);
exec insert_song('Dorothea', 'Taylor Swift', 'Evermore', '11-DEC-20', 'Pop', 3.45, 8);
exec insert_song('Coney Island', 'Taylor Swift', 'Evermore', '11-DEC-20', 'Pop', 4.35, 9);
exec insert_song('Ivy', 'Taylor Swift', 'Evermore', '11-DEC-20', 'Pop', 4.20, 10);
exec insert_song('Cowboy Like Me', 'Taylor Swift', 'Evermore', '11-DEC-20', 'Pop', 4.35, 11);
exec insert_song('Long Story Short', 'Taylor Swift', 'Evermore', '11-DEC-20', 'Pop', 3.35, 12);
exec insert_song('Marjorie', 'Taylor Swift', 'Evermore', '11-DEC-20', 'Pop', 4.18, 13);
exec insert_song('Closure', 'Taylor Swift', 'Evermore', '11-DEC-20', 'Pop', 3.01, 14);
exec insert_song('Evermore', 'Taylor Swift', 'Evermore', '11-DEC-20', 'Pop', 5.04, 15);


exec INSERT_ALBUM('Midnights', 'Taylor Swift', 'LP');
exec insert_song('Maroon', 'Taylor Swift', 'Midnights', '21-OCT-22', 'Pop', 3.38, 2);
exec insert_song('Anti-Hero', 'Taylor Swift', 'Midnights', '21-OCT-22', 'Pop', 200, 3);

SELECT * FROM SONG WHERE NAME = 'Anti-Hero';
SELECT * FROM ALBUM WHERE NAME = 'Midnights';

exec insert_song('Lavender Haze', 'Taylor Swift', 'Midnights', '21-OCT-22', 'Pop', 3.22, 1);


SELECT * FROM ARTIST;
SELECT * FROM ALBUM;
SELECT * FROM SONG;
SELECT * FROM RELEASED_ON;




