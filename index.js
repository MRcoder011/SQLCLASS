const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const connection =  mysql.createConnection({
    host: 'localhost',
    database: 'delta_app',
    user: 'root',
    password: 'Rahmani@30'
  });
 try{
    connection.query("show TABLES" , (err , result) =>{
        if(err) throw err ;
        console.log(result);
      });
 }catch (err){
console.log(err);
 
 }
 connection.end();
 

let getRandomuser = () => {
    return {
        Id: faker.string.uuid(), // Updated for newer versions
        username: faker.internet.userName(), 
        email: faker.internet.email(),
        password: faker.internet.password()
    };
};