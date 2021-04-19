require('dotenv').config();

//step1: add mongoose and mongodb to the project
const mongoose = require('mongoose');

//Step2: setup mongo atlas and connect to the database using the following syntax:
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).catch(function (reason) {
  console.log('Unable to connect to the mongodb instance. Error: ', reason);
});



//step3: create a schema
//It defines the shape of the documents within that collection. 
//step4: create a parent schema
const { Schema } = mongoose;

//step5: create a parent person schema or blueprint
let personSchema = new Schema ({
  name: {type: String, required: true},
  age: Number,
  favoriteFoods: [String]
})

//step6: create/instantiate a model of Person in parent personSchema in mongoose
const Person = mongoose.model('Person', personSchema);

//step7: create and save a record of a model
//Warning - When interacting with remote services, errors may occur!
const createAndSavePerson = (done) => {
  let myInfo = new Person ({
    name: "John Andrew",
    age: 23,
    favoriteFoods: ["icecream", "pizza", "burger"]
  });
  myInfo.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
};

//step8: Create Many Records with model.create()
//takes an array of objects like [{name: 'John', ...}, {...}, ...] 
//as the first argument, and saves them all in the db.
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err,people) => {
    if (err) return console.error(err);
    done(null, people)
  });
};

//step9: Use model.find() to Search Your Database
//It returns an array of matches
const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (err, people) => {
    if (err) return console.error(err);
    done(null, people)
  })
};


//step10: Use model.findOne() to Return a Single Matching Document from Your Database
//even if there are multiple items. It is especially useful 
//when searching by properties that you have declared as unique.
const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (err, foodFound) => {
    if (err) return console.error(err);
    done(null, foodFound)
  })
};

//step11: Use model.findById() to Search Your Database By _id
// Searching by _id is an extremely frequent operation, so Mongoose provides a dedicated method for it.
const findPersonById = (personId, done) => {
  Person.findById(personId, (err, personFound) => {
    if (err) return console.error(err);
    done(null, personFound);
  });
};

//step12: Perform Classic Updates by Running Find, Edit, then Save
//We find() the person first, then update() the desire key and lastly, save() it.
const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, (err, personFound) => {
    if (err) return console.error(err);
    done(null, personFound);
  }).update(personId, {favoriteFoods: favoriteFoods.push(foodToAdd)}, (err, individual) => {
    if (err) return console.error(err);
    done(null, individual);
  }).save( (err, data) => {
    if (err) return console.error(err);
    done(null, data)
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
