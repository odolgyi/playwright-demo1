const exObject = {
    name: 'Vasya',
    gender: 'male',
    prop: {
        age: 18,
        interest: ['black', 'school', 'sport', 'muic'],
        goal: 'be honest'
    },
    setNameAndAge: function(name, age) {
        this.name = name;
        this.prop.age = age;
        console.log('name = ' + this.name);
        console.log('age = ' + this.prop.age);
    },
    details: {
        country: 'Ukraine',
        city: 'Kiev'
    },
    print: function(){
        console.log(Object.entries(this));
    }
};

exObject.print();
exObject.setNameAndAge('Vitya', 25);
console.log('****************');
exObject.print();
