import mysql from 'mysql';

const pool = mysql.createPool({
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: 'purpleFluke1!@',
  database: 'newsletter',
});

pool.on('connection', () => {
  console.log('Connected to DB');
});

export default pool;
