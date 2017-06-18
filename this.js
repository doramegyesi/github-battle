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

//explicit binding w/ call()
var sayName = function(lang1, lang2) {
    console.log('My name is ' + this.name + ' and I know ' + lang1 + ' and ' + lang2);
}

var dori = {
    name: 'Dori',
    age: 31
};

var languages = ['JavaScript', 'Python', 'Java'];

sayName.call(dori, languages[0], languages[1]);

//explicit binding w/ apply()
var sayName = function(lang1, lang2) {
    console.log('My name is ' + this.name + ' and I know ' + lang1 + ' and ' + lang2);
}

var dori = {
    name: 'Dori',
    age: 31
};

var languages = ['JavaScript', 'Python', 'Java'];

sayName.apply(dori, languages);
