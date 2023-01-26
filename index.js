const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 3000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


class User {
    constructor(){
        this._id = faker.datatype.uuid(),
        this.firstName = faker.name.firstName(),
        this.lastName = faker.name.lastName(),
        this.phoneNumber = faker.phone.number(),
        this.email = faker.internet.email(),
        this.password = faker.internet.password()
    }
}

class Company {
    constructor(){
        this._id = faker.datatype.uuid(),
        this.name = faker.company.name(),
        this.address = {
            street : faker.address.streetAddress(false),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}


app.get("/api/users/new", (req, res) =>{
    const user = new User();
    res.json(user);
});

app.get("/api/companies/new", (req, res) =>{
    const company = new Company();
    res.json(company);
});

app.get("/api/user/company", (req, res) =>{
    const user = new User();
    const company = new Company();
    res.json(
        {
            "New User": user,
            "New Company": company,
        }
    );
});


app.listen( port, () => console.log(`Listening on port: ${port}`));
