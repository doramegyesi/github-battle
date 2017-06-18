//implicit binding
var me = {
    name: 'Dori',
    age: 31,
    sayName: function() {
        console.log(this.name);
    }
};

me.sayName();

var Person = function(name, age) {
    return {
        name: name,
        age: age,
        sayName: function() {
            console.log(this.name);
        },
        mother: {
            name: 'Agi',
            sayName: function() {
                console.log(this.name);
            }
        }
    };
};

var dori = Person('Dori', 31);
dori.sayName();
dori.mother.sayName();

//explicit binding
