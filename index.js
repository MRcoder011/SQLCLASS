const { faker } = require('@faker-js/faker');

let getRandomuser = () => {
    return {
        Id: faker.string.uuid(), // Updated for newer versions
        username: faker.internet.userName(), 
        email: faker.internet.email(),
        password: faker.internet.password()
    };
};

console.log(getRandomuser());
