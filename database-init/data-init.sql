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
    POSITION NUMBER NOT NULL UNIQUE,
    FOREIGN KEY (SONG_ID) REFERENCES SONG(ID),
    FOREIGN KEY (ALBUM_ID) REFERENCES ALBUM(ID)
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


-- User Table

-- CREATE TABLE USER_GROOVE (
--     EMAIL VARCHAR(100) PRIMARY KEY,
--     PASSWORD VARCHAR(100) NOT NULL,
--     NAME VARCHAR(100) NOT NULL
-- );

exec insert_artist('Taylor Swift');
exec insert_artist('Coldplay');
exec insert_artist('Ed Sheeran');

exec insert_album('Evermore', 'Taylor Swift', 'LP');
exec insert_album('4 Saal', 'Bayaan', 'EP');

exec insert_song('Willow', 'Taylor Swift', 'Evermore', '11-DEC-20', 'Pop', 3.34, 1);

SELECT * FROM ARTIST;
SELECT * FROM ALBUM;
SELECT * FROM SONG;
SELECT * FROM RELEASED_ON;

-- DROP TABLE RELEASED_ON;
-- DROP TABLE SONG;
-- DROP TABLE ALBUM;
-- DROP TABLE ARTIST;

-- DROP SEQUENCE album_seq;
-- DROP SEQUENCE song_seq;
-- DROP SEQUENCE artist_seq;

-- DROP TRIGGER album_id_trigger;
-- DROP TRIGGER song_id_trigger;
-- DROP TRIGGER artist_id_trigger;
-- DROP TRIGGER song_duration_trigger;

-- DROP PROCEDURE insert_album;
-- DROP PROCEDURE insert_song;
-- DROP PROCEDURE insert_artist;



