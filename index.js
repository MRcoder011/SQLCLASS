const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const connection =  mysql.createConnection({
    host: 'localhost',
    database: 'delta_app',
    user: 'root',
    password: 'Rahmani@30'
  });

  let getRandomuser = () => {
    return [
      faker.string.uuid(), // Updated for newer versions
       faker.internet.userName(), 
        faker.internet.email(),
      faker.internet.password()
 ]
};


let q = "INSERT INTO user (id , username , password ) VALUES ?"
let data = [];
for (let i =1; i<= 100; i++){
    data.push(getRandomuser()); // random fake user
    
}
      

 try{
    connection.query(q , [data] , (err , result) =>{
        if(err) throw err ;
        console.log(result);
      });
 }catch (err){
console.log(err);
 
 }
 connection.end();
 
