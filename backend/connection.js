const oracledb = require('oracledb');

async function getConnection() {
    try {
        const connection = await oracledb.getConnection({
        user: 'groove',
        password: '123',
        connectString: 'SAAD-LAPTOP.local:1521/orcl'});

        console.log('Connection to Oracle Database established successfully');
        return connection;
    }
    catch (error) {
        console.error(error);
    }
}    

module.exports = {getConnection};
