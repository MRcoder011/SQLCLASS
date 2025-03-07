const { faker } = require('@faker-js/faker');

let createRandomUser = () => {
    return {
        userId: faker.datatype.uuid(), // Corrected: changed from faker.string.uuid()
        username: faker.internet.userName(), // Corrected: changed from username() to userName() (for older versions)
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };
};

console.log(createRandomUser());