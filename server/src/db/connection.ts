import mysql from 'mysql';
import keys from '../keys';  //Importamos la constante del archivo "keys.ts" para conectar.


const connection = mysql.createConnection(keys);

export default connection;