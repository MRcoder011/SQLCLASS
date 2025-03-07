const { faker } = require('@faker-js/faker');
const myql = require('mysql2');
const connection =  mysql.createConnection({
    host: 'localhost',
    database: 'test',
    user: 'root',
  });

let getRandomuser = () => {
    return {
        Id: faker.string.uuid(), // Updated for newer versions
        username: faker.internet.userName(), 
        email: faker.internet.email(),
        password: faker.internet.password()
    };
};

console.log(getRandomuser());
