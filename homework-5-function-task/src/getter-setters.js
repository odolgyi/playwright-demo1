export class Person {

    constructor(name, lastName, street, city, zip) {
        this.privateName = name;
        this.lastName = lastName;
        this.address = {
            street: street,
            city: city,
            zip: zip
        };
    }

    get name() {
        return this.privateName;
    }

    set name(value) {
        if (!value) {
            throw new Error('Name is required');
        } else {
            this.privateName = value;
        }
    }

    set lastname(value) {
        if (!value) {
            throw new Error('Name is required');
        } else {
            this.lastName = value;
        }
    }

    displayInfo() {
        console.log(`Name: ${this.name}, LastName: ${this.lastName}`);
        console.log(`Address: ${this.address.street}, ${this.address.city}, ${this.address.zip}`);
    }
}

const person = new Person('John', 'Fokker', '123 Main St', 'Lviv', '10001');

console.log(person.name);
person.lastname = 'Dogger';
person.name = 'Aloe';
person.displayInfo();
